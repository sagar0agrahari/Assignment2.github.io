const mongoose = require("mongoose");

mongoose.connect(
  `mongodb+srv://sagaragrahari106:2nPWRBnBToY8Z8HQ@cluster0.taeovkn.mongodb.net/Marketplace?retryWrites=true&w=majority`,
  { useNewUrlParser: true }
);

const connection = mongoose.connection;

module.exports = connection;
