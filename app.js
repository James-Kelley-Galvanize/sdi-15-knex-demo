const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const { getAllPets, getOnePet } = require("./db/controllers");

const app = express();

app.use(morgan("tiny"));
app.use(cors());

app.get(`/`, (req, res) => {
  getAllPets()
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

app.get(`/:id`, (req, res) => {
  getOnePet(req.params.id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      console.error(err);
      res.send(err);
    });
});

module.exports = app;
