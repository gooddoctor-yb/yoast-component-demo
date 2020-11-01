const express = require("express");
const path = require("path");
const app = express();

app.use(express.static("./dist"));
app.use("/", function (req, res) {
  res.sendFile(path.resolve("dist/index.html"));
});

app.listen(3000, function (error) {
  if (error) throw error;
  console.info("http://localhost:3000");
});
