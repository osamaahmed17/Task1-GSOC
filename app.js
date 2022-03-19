var express = require("express");

var app = express();
app.use(express.static(__dirname + '/views'));


app.get('/', function(req, res) {
    res.render('index.ejs');
});

//Server Setup
if (process.env.PORT) {
    server = app.listen(process.env.PORT || 80, process.env.IP, function() {
        console.log("Server is running");
    });
} else {
    server = app.listen(3000, function() {
        console.log("Server is running");
    });
}