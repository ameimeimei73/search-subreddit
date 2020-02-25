var express = require("express");
var router  = express.Router();
var request = require("request");

// Root route
router.get("/", function(req, res){
    res.render("search");
 });
 
// Search for subreddit
router.get("/results", function(req, res){
    var query = req.query.search; 
    var url = "https://www.reddit.com/r/" + query + "/.json?limit=20";
    var data = []
    request(url, function(error, response, body){
        if(!error && response.statusCode == 200) {
            var rawData = JSON.parse(body)["data"];
            var passData = rawData["children"];
            if (rawData["dist"]) {
                passData.forEach(function(subreddit) { 
                    data.push({
                        sub: query,
                        title: subreddit["data"]["title"],
                        author: subreddit["data"]["author"],
                        url: "https://www.reddit.com/" + subreddit["data"]["permalink"]
                    });
                }); 
            } else {
                 data = 0
            } 
        } else {
            data = 0
        }
        res.render("index", {data: data});
    });
});

module.exports = router;