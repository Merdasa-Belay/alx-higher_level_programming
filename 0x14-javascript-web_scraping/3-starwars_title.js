#!/usr/bin/node

const request = require("request");
const url = "https://swapi-api.alx-tools.com/api/films/:18";

request.get(url + process.argv[2], function (error, response, body) {
  if (error) {
    console.error("error:", error);
  } else {
    console.log(JSON.parse(body).title);
  }
});
