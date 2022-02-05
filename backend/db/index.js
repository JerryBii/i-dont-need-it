const mongoose = require("mongoose");
const login = require("./credentials");

const connection =
  "mongodb+srv://" +
  login.login.username +
  ":" +
  login.login.password +
  "@idni-accounts.qhxjo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

mongoose
  .connect(connection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Database Connected Succesfully"))
  .catch((e) => {
    console.error("Connection error", e.message);
  });

const db = mongoose.connection;

module.exports = db;
