const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
const bodyParser = require("body-parser");
const encrypt = require("mongoose-encryption");
// require("dotenv").config();

mongoose.connect("mongodb://localhost:27017/UserDB");

app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

// console.log(process.env.secret);

const UserSchema = new mongoose.Schema({
  email: "String",
  password: "String",
});

// UserSchema.plugin(encrypt, {
//   secret: process.env.secret,
//   encryptedFields: ["password"],
// });
const User = new mongoose.model("User", UserSchema);

app.get("/", function (req, res) {
  res.render("home");
});

app.get("/register", function (req, res) {
  res.render("register");
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.post("/register", function (req, res) {
  const newUser = new User({
    email: req.body.username,
    password: req.body.password,
  });

  newUser.save();

  try {
    res.render("secrets");
  } catch (error) {
    console.log(error.message);
  }
});

app.post("/login", function (req, res) {
  const username = req.body.username;
  const password = req.body.password;
  User.findOne({ email: username }).then(function (user) {
    if (user.password === password) {
      res.render("secrets");
    } else {
      res.send("Bad user/pass");
    }
  });
});

app.listen(3000, function () {
  console.log("server started at port 3000");
});
