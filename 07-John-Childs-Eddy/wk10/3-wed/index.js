const express = require("express");
const ejs = require("ejs");
const _ = require("underscore");
const axios = require("axios");

// Basic setup
const server = express();
server.set("view-engine", ejs);
const PORT = 1337;

// Form input
server.get("/home", (req, res) => {
  res.render("home.ejs");
});

// Talk to an API
server.get("/answer", (req, res) => {
  axios.get("http://numbersapi.com/random/trivia").then((response) => {
    res.send(req.query.ticker);
    res.render("answer.ejs", {
      ticker: req.query.ticker,
      price: "No comment",
    });
  });
});

// Form
// Action to handle the form

server.listen(PORT, () =>
  console.log(`Now serving on http://localhost:${PORT}`)
);
