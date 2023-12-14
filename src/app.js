const express = require("express");
// const mongoose = require('mongoose');
const path = require("path");
const hbs = require("hbs");
const Register = require("./modals/contact");
require("./db/conn");
const port = process.env.PORT || 8001;
const app = express();
// const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");
app.use(express.json()); //when we use json in express
// app.use(express.static(static_path));
app.use(express.urlencoded({ extended: false }));
app.use(
  "/css",
  express.static(path.join(__dirname, "../public/css"))
);
app.use(
  "/js",
  express.static(path.join(__dirname, "../public/js"))
);
app.use(
  "/img",
  express.static(path.join(__dirname, "../public/img"))
);


app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);
app.get("/", (req, res) => {
  res.render("index");
});
app.get("/signup", (req, res) => {
  res.send("signup page");
});
app.get("/meals", (req, res) => {
  res.send("meals page");
});
app.get("/pricing", (req, res) => {
  res.send("pricing page");
});
app.get("/testimonials", (req, res) => {
  res.send("tetimonials");
});
app.get("/howitworks", (req, res) => {
  res.send("how it works page");
});
app.get("/login", (req, res) => {
  res.send("login page");
});
app.get("/error", (req, res) => {
  res.send("error page");
});
//-------
app.post("/contact", async (req, res) => {
  try {
    const registerUser = new Register(req.body);
    await registerUser.save();
    res.status(201).redirect("/");
   
  } catch (e) {
    res.status(400).send(e);
    console.log("the error part page" + e);
  }
});

app.listen(port, () => {
  console.log(`server is running at ${port}`);
});
