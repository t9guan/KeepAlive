const express = require("express");
const path = require("path");

require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.use(express.json());

// debug middleware
app.use((req, res, next) => {
  console.log(req.url);
  return next();
});

//routes
app.get("/", (req, res) => {
  res.json("sup");
});

app.listen(port, () => {
  console.log("Backend on");
});
