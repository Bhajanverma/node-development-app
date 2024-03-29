const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const morgan = require("morgan")
const userRoutes = require("./Routes/userRoutes");
const blogRoutes = require("./Routes/blogRoutes");
const dashboardRoutes = require("./Routes/dashboard");
const { authorizationCheck } = require("./middlewares/auth");
require("dotenv").config();
// const UserModel = require("./Model/userModel");
const app = express();
// Use Morgan Middleware for logging
app.use(morgan("dev"))

// const UserModel = require("./model/userModel");

const port = 5000;

// mongoose.connect("mongodb://127.0.0.1:27017/grass-learning");
// var db = mongoose.connection;
// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function callback() {
//   console.log("connected");
// });

// middleware - > MVC (model(schemas) , view(ejs) , controller (public , routes))

mongoose
  .connect("mongodb://127.0.0.1:27017/grass-node-v2")
  .then(() => {
    console.log("Connected successfully ");
  })
  .catch((error) => console.log(error));

app.use(bodyParser.json());

app.use("/user", userRoutes);
app.use("/blog",blogRoutes);


app.use("/dashboard",authorizationCheck,dashboardRoutes)
// app.use("/admin",authorizationCheck,roleGuard, adminRoutes)

app.listen(port, () => {
  console.log(`The server is running on port ${port}`);
});

// register -> post (name , email , password , phoneno:)
// login -> token with his information -> post  (email, password)
// dashboard -> middleware check based on token

// authorization and authentication