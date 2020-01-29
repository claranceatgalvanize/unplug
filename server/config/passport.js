const { Strategy } = require("passport-jwt"),
  ExtractJwt = require("passport-jwt").ExtractJwt;

const User = require("../models/user");
const settings = require("../config/settings");

module.exports = passport => {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = settings.secret;
  passport.use(
    new Strategy(opts, function(jwt_payload, done) {
      User.findOne({ id: jwt_payload.id }, function(err, user) {
        if (err) {
          return done(err, false);
        }
        if (user) {
          done(null, user);
        } else {
          done(null, false);
        }
      });
    })
  );
};
