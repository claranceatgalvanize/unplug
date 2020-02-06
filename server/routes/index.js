const express = require("express"),
  path = require("path"),
  router = express.Router(),
  Category = require(path.join(__dirname, "..", "models/", "category")),
  Post = require(path.join(__dirname, "..", "models/", "post"));

router.get("/category", (req, res, next) => {
  Category.find((err, categories) => {
    if (err) return next(err);
    res.json(categories);
  });
});

router.get("/bycategory/:id", (req, res, next) => {
  Post.find({ category: req.params.id }, (err, posts) => {
    if (err) return next(err);
    res.json(posts);
  });
});

router.get("/post", (req, res, next) => {
  Post.find((err, posts) => {
    if (err) return next(err);
    res.json(posts);
  });
});

router.get("/post/:id", (req, res, next) => {
  Post.findById(req.params.id, (err, post) => {
    if (err) return next(err);
    res.json(post);
  });
});

module.exports = router;
