const dotenv = require("dotenv").config();
const { application } = require("express");
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.set("strictQuery", true).connect("mongodb://localhost:27017/DB").then(function (req, res){
 console.log("connected to database");
}).catch(function(error){
console.log("connection failed");
});








