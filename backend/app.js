const express = require("express");
const path = require("path");
const cors = require("cors");

require("dotenv").config();
const port = process.env.PORT;

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "build")));

// debug middleware
app.use((req, res, next) => {
  console.log(req.url);
  return next();
});

//routes
app.get("/api/test", (req, res) => {
  res.json({ message: "sup" });
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(port, () => {
  console.log(`Backend server running on ${port}`);
});
