const mongoose = require('mongoose')

const connectionString = process.env.MONGODB_URI || "mongodb://localhost/charity-app";

mongoose.connect(connectionString, { useNewUrlParser: true})
  .then(() => {
    console.log("Connected to mongo at: " + connectionString);
  });

  module.exports = mongoose