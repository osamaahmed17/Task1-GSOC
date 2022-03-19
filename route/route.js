express.get("/", function(req, res) {
    res.render("index");
});
express.get("/computer", function(req, res) {
    res.render("computer");
});
express.get("/multiplayer", function(req, res) {
    res.render("multiplayer");
});

express.get("/loaderio-c22eb21e6fd039f5bb76ec284ff22809", (req, res) => {
    res.sendFile(path.join(__dirname + '/loaderio-c22eb21e6fd039f5bb76ec284ff22809.txt'));
})