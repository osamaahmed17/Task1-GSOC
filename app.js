var expresss = require("express");
var express = expresss();
var winnerController = require("./controllers/winnerController");
var resultController = require("./controllers/resultController");
var socketController = require("./controllers/socketController");



var server
    //Server Setup
if (process.env.PORT) {
    server = express.listen(process.env.PORT || 80, process.env.IP, function() {
        console.log("Server is running");
    });
} else {
    server = express.listen(3000, function() {
        console.log("Server is running");
    });
}