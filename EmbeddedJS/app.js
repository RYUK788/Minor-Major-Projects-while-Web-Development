const express = require("express");
const bodyParser = require("body-parser");
const date = require("./date.js");
const app = express();

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

const items = ["Buy Food", "Cook Food", "Eat Food"];
const workItems = [];
app.get("/", function (req, res) {
  // let days = [
  //   "Sunday",
  //   "Monday",
  //   "Tuesday",
  //   "Wednesday",
  //   "Thursday",
  //   "Friday",
  //   "Saturday",
  // ];
  // let dayName = days[today.getDay()];
  // let day = "";
  // if (currentDay === 6 || currentDay === 0) {
  //   day = dayName;
  // } else {
  //   day = dayName;
  // }
  const day = date.getDate();
  res.render("list", { listTitle: day, newItems: items });
});
app.post("/", function (req, res) {
  let item = req.body.newItem;
  console.log(req.body.list);
  if (req.body.list === "Work List") {
    workItems.push(item);
    res.redirect("/work");
  } else {
    items.push(item);
    res.redirect("/");
  }
});

app.get("/work", function (req, res) {
  res.render("list", { listTitle: "Work List", newItems: workItems });
});
app.get("/about", function (req, res) {
  res.render("about");
});
app.listen(3000, function () {
  console.log("app is running on port 3000");
});
