const express = require("express");
const app = express();

app.listen(80, () => {
  console.log("Server running on port 8080");
});

app.get("/health", (req, res, next) => {
  res.status(200).send("Hello!");
});

