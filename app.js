if (process.env.NOD_ENV !== "production") {
  require("dotenv").config();
}

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const sslRedirect = require("heroku-ssl-redirect");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");
const contactRouter = require("./routes/contact");
const worksRouter = require("./routes/works");
const loginRouter = require("./routes/login");

var app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(sslRedirect());

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/send", contactRouter);
app.use("/contact", contactRouter);
app.use("/works", worksRouter);
app.use("/login", loginRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
