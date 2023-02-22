const express = require("express");
const ejs = require("ejs");
const _ = require("underscore");
// const axios = require("axios");
const yahooStockAPI = require("yahoo-stock-api").default;
const yahoo = new yahooStockAPI();

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
  yahoo.getSymbol({ symbol: req.query.ticker }).then((response) => {
    res.render("answer.ejs", {
      ticker: req.query.ticker,
      price: response.bid,
    });
  });
});

// Form
// Action to handle the form

server.listen(PORT, () =>
  console.log(`Now serving on http://localhost:${PORT}`)
);

// res.send(req.query.ticker);
// .then(console.log);
//   axios.get("http://numbersapi.com/random/trivia")
