const express = require("express");
const app = express();
const mongoose = require("mongoose");
require('dotenv').config()




mongoose.connect("mongodb://localhost:27017/User", { useUnifiedTopology: true, useNewUrlParser: true });

const connection = mongoose.connection;

connection.once("open", function() {
  console.log("MongoDB database connection established successfully");
});
app.use(express.json())
const userData=require('./routes/userdata')
app.use('/user',userData)

const port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log("Server is running on Port: " + port);
});
