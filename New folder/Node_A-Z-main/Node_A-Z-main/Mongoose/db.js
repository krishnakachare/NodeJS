const mongoose = require('mongoose')
require('dotenv').config()

//For Connecting to local Database
//const connection = mongoose.connect("mongodb://127.0.0.1:27017/connecting") 

//For Connecting to global Database
const connection = mongoose.connect(process.env.mongoURL, {
  socketTimeoutMS: 30000
});

module.exports = {
    connection
}