const express = require("express");
const app = express.Router();
const port = 5000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
var d = new Date();
var n = d.getDay();
