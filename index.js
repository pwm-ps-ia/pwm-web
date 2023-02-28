const express = require("express");

const app = express();
const port = process.env.PORT || 8080;
const path = require("path");

app.use(express.static("public"));
app.use(express.static("files"));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.use("/static", express.static("static"));

app.get("/about_us", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/about_us/about_us.html"));
});

app.get("/documentation", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/documentation/documentation.html"));
});

app.get("/news", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/news/news.html"));
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
