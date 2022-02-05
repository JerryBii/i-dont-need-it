const express = require("express");
const cors = require("cors");
const login = require("./db/credentials");
const db = require("./db");
const axios = require("axios");
const userRouter = require("./routes/user-routes");

const app = express();
const port = 3000;

// set up the request parameters
const params = {
  api_key: "demo",
  type: "bestsellers",
  url: "https://www.amazon.com/s/zgbs/pc/516866",
};

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.use(userRouter);

app.get("/api/getProductData", async (req, res) => {
  axios
    .get(
      "https://api.rainforestapi.com/request?api_key=0991188F694E4C7AAEBF983FBE865355&type=product&asin=B07PXGQC1Q&amazon_domain=amazon.ca"
    )
    .then((response) => {
      console.log(JSON.stringify(response.data.product)); //Need to parse this properly later
    });
});
