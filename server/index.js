const stars = require("./data/starsDetails");
const starsDetails = require("./data/starInterviews");
const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 5000;;

app.get("/stars", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:5000");
  res.set("Access-Control-Allow-Credentials", true);
  res.send(stars);
});
app.get("/starsDetails", (req, res) => {
  res.set("Access-Control-Allow-Origin", "http://localhost:5000");
  res.set("Access-Control-Allow-Credentials", true);
  res.send(starsDetails);
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
app.post("/starsDetails", (req, res) => {
  const { starsDetails } = req.body;
  const data = starsDetails;
  data.push(starsDetails);
  fs.writeFile(starsDetails, data, (err, data) => {
    if (!err) {
      console.log("File written");
    }
  });
});
app.get("/", (req, res) => res.send("Labelsticks API"));

app.listen(port, () => console.log(`Labelsticks app listening on port ${port}!`));
