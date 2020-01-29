const passport = require("passport"),
  config = require("../config/settings"),
  express = require("express"),
  jwt = require("jsonwebtoken"),
  router = express.Router(),
  User = require("../models/user");
require("../config/passport")(passport);

router.post("/register", (req, res) => {
  console.log(fullName, username, password);
  if (!req.body.fullName || !req.body.username || !req.body.password) {
    res.json({
      success: false,
      msg: "Please enter full name, username and password."
    });
  } else {
    const newUser = new User({
      fullname: req.body.fullname,
      username: req.body.username,
      password: req.body.password
    });
    newUser.save(err => {
      if (err) {
        return res.json({ success: false, msg: "Username already exists." });
      }
      res.json({ success: true, msg: "Successfully created new user." });
    });
  }
});

router.post("/login", (req, res) => {
  User.findOne({ username: req.body.username }, (err, user) => {
    if (err) throw err;

    if (!user) {
      res.status(401).send({
        success: false,
        msg: "Authentication failed. User not found."
      });
    } else {
      user.comparePassword(req.body.password, (err, isMatch) => {
        if (isMatch && !err) {
          const token = jwt.sign(user.toJSON(), config.secret);
          res.json({ success: true, token: `JWT ${token}` });
        } else {
          res.status(401).send({
            success: false,
            msg: "Authentication failed. Wrong password."
          });
        }
      });
    }
  });
});

router.post(
  "/logout",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    req.logout();
    res.json({ success: true });
  }
);

module.exports = router;
