// const mongoose = require("mongoose");
// require("dotenv").config();

// const connection = mongoose.connect("mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2");

// module.exports = { connection };

const mongoose = require("mongoose");

const mongoURL = "mongodb://127.0.0.1:27017/?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2";

const connection = mongoose.connect(mongoURL);

module.exports = { connection };

