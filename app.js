var express = require("express");
var app = express();
app.set("view engine", "ejs");
app.use(express.static("public"));

//requiring routes
var indexRoutes = require("./routes/index");
app.use(indexRoutes);

app.listen(3000, process.env.IP, function(){
    console.log("Subreddit Search App has started!");
});