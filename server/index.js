const stars = require("./data/starsDetails");
const express = require("express");
const fs = require("fs");
const app = express();
const port = 3000;

app.get("/stars", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:3001");
  res.set("Access-Control-Allow-Credentials", true);
  res.send(stars);
});
app.post("/stars", (req, res) => {
  const { star } = req.body;
  const data = stars;
  data.push(star);
  fs.writeFile(stars, data, (err, data) => {
    if (!err) {
      console.log("File written");
    }
  });
});
app.get("/", (req, res) => res.send("Hello MUUU!"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
