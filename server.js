// import express
const express = require("express");
//instance of all the method of express
const app = express();
const port = 8080;
const requestTime = require("./middleware");

app.set("view engine", "pug");
// middleware golbale during working
// app.use(requestTime);

// creation route to send file
app.get("/", function (req, res) {
  res.render("../views/index");
});
app.get("/services", function (req, res) {
  res.render("../views/services");
});
app.get("/contact", function (req, res) {
  res.render("../views/contact");
});
// styling route
app.get("/style.css", (request, response) => {
  response.sendFile(__dirname + "/views/style.css");
});
//create server
app.listen(port, (err) => {
  err
    ? console.log(err)
    : console.log(` app running at http://localhost:${port}`);
});
