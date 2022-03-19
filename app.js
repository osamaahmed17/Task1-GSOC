var expresss = require("express");

var express = expresss();
var resultController = require("./controller/resultController");
//var socketController = require("./controller/socketController");



var server;


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
global.server = server