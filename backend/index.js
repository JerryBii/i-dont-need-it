const express = require("express");
const cors = require("cors");
const login = require("./db/credentials");
const db = require("./db");
const axios = require("axios");

const app = express();
const port = 3000;

// set up the request parameters
const params = {
  api_key: "demo",
  type: "bestsellers",
  url: "https://www.amazon.com/s/zgbs/pc/516866",
};

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  console.log("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/api/getProductData", async (req, res) => {
  axios
    .get(
      "https://api.rainforestapi.com/request?api_key=0991188F694E4C7AAEBF983FBE865355&type=product&asin=B000YDDF6O&amazon_domain=amazon.com"
    )
    .then((response) => {
      console.log(JSON.stringify(response.data, 0, 2)); //Need to parse this properly later
    });
});
