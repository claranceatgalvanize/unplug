const { Strategy } = require("passport-jwt");
const { ExtralJwt } = require("passport-jwt");

const User = require("../models/user");
const settings = require("./settings");

module.exports = passport => {
  const opts = {};
  opts.jwtFromRequest = ExtralJwt.fromAuthHeaderWithScheme("jwt");
  opts.secretOrKey = settings.secret;
  passport.use(
    new JwtStrategy(opts, (jwt_payload, done) => {
      User.findOne({ id: jwt_payload.id }, (err, user) => {
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
