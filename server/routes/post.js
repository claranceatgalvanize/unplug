const path = require("path"),
  passport = require("passport"),
  express = require("express"),
  router = express.Router(),
  Post = require(path.join(__dirname, "..", "models/", "post"));
require(path.join(__dirname, "..", "config/", "passport"))(passport);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const token = getToken(req.headers);
    if (token) {
      Post.find((error, posts) => {
        if (error) return next(error);
        res.json(posts);
      });
    } else {
      res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const token = getToken(req.headers);
    if (token) {
      Post.findById(req.params.id, (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const token = getToken(req.headers);
    if (token) {
      Post.create(req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

router.put(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const token = getToken(req.headers);
    if (token) {
      Post.findByIdAndUpdate(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  (req, res, next) => {
    const token = getToken(req.headers);
    if (token) {
      Post.findByIdAndRemove(req.params.id, req.body, (err, post) => {
        if (err) return next(err);
        res.json(post);
      });
    } else {
      return res.status(403).send({ success: false, msg: "Unauthorized." });
    }
  }
);

getToken = headers => {
  if (headers && headers.authorization) {
    const parted = headers.authorization.split(" ");
    if (parted.length === 2) {
      return parted[1];
    } else {
      return null;
    }
  } else {
    return null;
  }
};

module.exports = router;
