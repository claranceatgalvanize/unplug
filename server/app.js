const express = require("express"),
  path = require("path"),
  cookieParser = require("cookie-parser"),
  logger = require("morgan"),
  mongoose = require("mongoose"),
  passport = require("passport");

const indexRouter = require("./routes/index"),
  usersRouter = require("./routes/users"),
  auth = require("./routes/auth"),
  category = require("./routes/category"),
  post = require("./routes/post");

const app = express(),
  DATABASE = "mongodb://localhost:27017/unplug";

app.use((req, res, next) => {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "*");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers,X-Access-Token,XKey,Authorization"
  );

  //  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(passport.initialize());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/api/auth", auth);
app.use("/api/category", category);
app.use("/api/post", post);

mongoose.connect(
  DATABASE,
  {
    promiseLibrary: require("bluebird"),
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
  },
  err => {
    if (err) {
      console.log(err);
    } else {
      console.log("connection successeful");
    }
  }
);

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
