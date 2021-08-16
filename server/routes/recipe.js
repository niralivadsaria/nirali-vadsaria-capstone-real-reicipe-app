const express = require("express");
const router = express.Router();
const fs = require("fs");
const uniqid = require("uniqid");

// var axios = require("axios");
var config = {
  method: "get",
  url: "https://tasty.p.rapidapi.com/recipes/auto-complete?prefix=chicken ",
  headers: {
    "x-rapidapi-key": "a7fe2e319amsh7fa01359119a6ccp155a3djsnb91809872546",
    "x-rapidapi-host": "tasty.p.rapidapi.com",
  },
};

// axios(config)
//   .then(function (response) {
//     console.log(JSON.stringify(response.data));
//   })
//   .catch(function (error) {
//     console.log(error);
//   });
