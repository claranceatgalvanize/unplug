const express = require("express"),
  router = express.Router(),
  passport = require("passport");

router.get("/", (req, res) => {
  res.send("respond with a resource");
});

router.post(
  "/api/profile",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    res.send(req.user.profile);
  }
);

module.exports = router;
