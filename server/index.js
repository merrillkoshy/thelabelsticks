const stars = require("./data/starsDetails");
const starsDetails = require("./data/starInterviews");
const express = require("express");
const fs = require("fs");
const app = express();
const port = process.env.PORT || 5000;;
const mongoose = require('mongoose');
var cors = require('cors');
const bodyParser = require('body-parser');
const logger = require('morgan');

//mongoDB connection string
const dbRoute=
'mongodb+srv://merrillkoshy:emirati735@cluster0-1iuvp.mongodb.net/test?retryWrites=true&w=majority';
mongoose.connect(dbRoute, { useNewUrlParser: true });

let db = mongoose.connection;

db.once('open', () => console.log('connected to the database'));

// checks if connection with the database is successful
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// (optional) only made for logging and
// bodyParser, parses the request body to be a readable json format
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));

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
