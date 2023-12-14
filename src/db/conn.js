const mongoose = require("mongoose");

//Creating database
mongoose
  .connect("mongodb://localhost:27017/fooddata", {  family:4 })

  .then(() => {
    console.log("connection succcessfully with DataBase");
  })
  .catch((e) => {
    console.log("connection failed");
  });