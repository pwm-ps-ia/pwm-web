const express = require("express");

const livereload = require("livereload");
const connectLiveReload = require("connect-livereload");
const app = express();
const port = process.env.PORT || 8080;
const path = require("path");

app.use(express.static("public"));
app.use(express.static("files"));
app.use(connectLiveReload());

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/home.html"));
});

app.use("/static", express.static("static"));
app.use("/components", express.static("components"));

app.get("/about_us", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/about_us.html"));
});

app.get("/documentation", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/documentation.html"));
});

app.get("/news", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/news.html"));
});

app.get("/login", function (req, res) {
  res.sendFile(path.join(__dirname, "/pages/login.html"));
});

const liveReloadServer = livereload.createServer();
liveReloadServer.server.once("connection", () => {
  setTimeout(() => {
    liveReloadServer.refresh("/");
  }, 100);
});

app.listen(port);
console.log("Server started at http://localhost:" + port);
