require('dotenv').config();

const mongoose = require("mongoose");


function connectDB() {
    // Database connection

    mongoose
      .connect(process.env.DB_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then((data) => {
        console.log(`Mongodb connected with server ${data.connection.host}`);
      });
      
}

module.exports = connectDB;