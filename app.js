var expresss = require("express");
var express = expresss();


//Server Setup
if (process.env.PORT) {
    var server = express.listen(process.env.PORT || 80, process.env.IP, function() {
        console.log("THe Server is running");
    });
} else {
    var server = express.listen(3000, function() {
        console.log("THe Server is running");
    });
}