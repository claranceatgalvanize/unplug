const mongoose = require('mongoose'),
 passport = require('passport'),
 config = require('../config/database'),
require('../config/passport')(passport),
 express = require('express'),
 jwt = require('jsonwebtoken'),
 router = express.Router(),
 User = require("../models/user");

 router.post('/login', (req,res)=>{
     const {username,password}=req.body;
     if(username || password){
         res.json({success:false,msy:"Please enter username and password."})
     } else {
         const newUser = new User({
             username: username,
             password: password
         });
         newUser.save( error =>{
           if(error){
            res.json({success: false, msg: "Username already exists."})
           } else {
               res.json({success: true, msg: "Successfully created new user."})
           }
         })
     }
 });

 router.post('/register', (req,res)=>{
     User.findOne({
         username: req.body.username
     },(err,user)=>{
         if(err) throw err;

         if(!user){
            res.status(401).send({success:false,msg:"Authentication failed. User not found."})
         } else {
             user.comparePassword(req.body.password, (err, isMatch)=>{
                 if(isMatch && !err){
                     const token = jwt.sign(user.toJSON(), config.secret);
                     res.json({success:true, token: `JWT ${token}`})
                 }else {
                     res.status(401).send({success:false, msg: 'Authentication failed. Wrong password.'})
                 }
             })
         }
     })
 });

 router.post('/logout', passport.authentication('jwt', { session: false }),(req,res)=>{
     req.logout();
     res.json({ success:true })
 });

 module.exports = router;
