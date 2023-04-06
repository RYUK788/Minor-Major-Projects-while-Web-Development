const express = require("express");
const mongoose = require("mongoose");
const ejs = require("ejs");
const app = express();
const bodyParser = require("body-parser");
const md5 = require("md5");
const bcrypt = require("bcrypt");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const findOrCreate = require("mongoose-findorcreate");
const session = require("express-session");
const passportLocalMongoose = require("passport-local-mongoose");
// const encrypt = require("mongoose-encryption");
require("dotenv").config();
app.engine("html", require("ejs").renderFile);
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("trust proxy", 1);
app.use(
  session({
    secret: "Our little secret",
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  })
);
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect("mongodb://localhost:27017/UserDB", { useNewUrlParser: true });

// console.log(process.env.secret);

const UserSchema = new mongoose.Schema({
  email: "String",
  password: "String",
  googleId: "String",
  secret: "String",
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);
UserSchema.plugin(findOrCreate);
// const secret = "Thisisourlittlesecret";
// UserSchema.plugin(encrypt, {
//   secret: secret,
//   encryptedFields: ["password"],
// });
const User = new mongoose.model("User", UserSchema);

passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.CLIENT_ID,
      clientSecret: process.env.CLIENT_SECRET,
      callbackURL: "http://localhost:3000/auth/google/secrets",
    },
    function (accessToken, refreshToken, profile, cb) {
      console.log("profile");
      User.findOrCreate({ googleId: profile.id }, function (err, user) {
        return cb(err, user);
      });
    }
  )
);

app.get("/", function (req, res) {
  res.render("home");
});

app.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile"] })
);

app.get(
  "/auth/google/secrets",
  passport.authenticate("google", { failureRedirect: "/login" }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect("/secrets");
  }
);

app.get("/register", function (req, res) {
  res.render("register");
});

app.get("/submit", function (req, res) {
  if (req.isAuthenticated()) {
    res.render("submit");
  } else {
    res.redirect("/login");
  }
});

app.post("/submit", function (req, res) {
  const submittedSecret = req.body.secret;
  // console.log(req.user.id);

  User.findOne({ username: req.body.username })
    .then(function (foundUser) {
      foundUser.secret = submittedSecret;
      foundUser.save();
      res.redirect("/secrets");
    })
    .catch(function (err) {
      console.log(err.message);
    });
});

app.get("/login", function (req, res) {
  res.render("login");
});

app.get("/logout", function (req, res) {
  res.redirect("/");
});

app.get("/secrets", function (req, res) {
  if (req.isAuthenticated()) {
    res.render("secrets");
  } else {
    res.redirect("/login");
  }
});

app.post("/register", function (req, res) {
  // bcrypt.hash(req.body.password, 10 /*saltRounds*/, function (err, hash) {
  //   // Store hash in your password DB.
  //   const newUser = new User({
  //     email: req.body.username,
  //     password: hash,
  //   });

  //   newUser.save();

  //   try {
  //     res.render("secrets");
  //   } catch (error) {
  //     console.log(error.message);
  //   }
  // });

  //If not used passport above Code is applicable...//////////////////

  // app.post("/submit", function (req, res) {
  //   const submittedSecret = req.body.secret;
  //   UserfindById(req.user.id)
  //     .then(function (User) {
  //       User.secret = submittedSecret;
  //       User.save(function () {
  //         res.redirect("/secrets");
  //       });
  //     })
  //     .catch(err, function () {
  //       console.log(error.message);
  //     });
  // });
  /////// USING PASSPORT ////////////
  User.register(
    { username: req.body.username, active: false },
    req.body.password,
    function (err, user) {
      if (err) {
        console.log(err.message);
        res.redirect("/register");
      } else {
        passport.authenticate("local")(req, res, function () {
          res.redirect("/secrets");
        });
      }
    }
  );
});

app.post("/login", function (req, res) {
  // const username = req.body.username;
  // const password = req.body.password;
  // User.findOne({ email: username }).then(function (user) {
  //   bcrypt.compare(password, user.password, function (err, result) {
  //     if (result === true) {
  //       res.render("secrets");
  //     } else {
  //       res.send("Bad user/pass");
  //     }
  //   });
  // });

  //////////  USING PASSPORT  /////////////
  const user = new User({
    username: req.body.username,
    password: req.body.password,
  });
  req.login(user, function (err) {
    if (err) {
      console.log(err.message);
    } else {
      passport.authenticate("local")(req, res, function () {
        res.redirect("/secrets");
      });
    }
  });
});

app.post("/logout", function (req, res, err) {
  req.logout(function (err) {
    if (err) {
      console.log(err.message);
    }
    res.redirect("/");
  });
});

app.listen(3000, function () {
  console.log("server started on port 3000");
});
