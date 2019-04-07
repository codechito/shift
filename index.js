var http = require('http');
var express = require('express');
var config = require("config");
var url = require('url');

var app = express();

let ShiftList = {};
for(var i=0;i<config.List.length;i++){
  ShiftList[config.List[i]["Old URL"]] = config.List[i]["New URL"];
}
console.log(ShiftList);

app.all("*",function(req,res){
  var requrl = url.format({
    protocol: req.protocol,
    host: req.get('host'),
    pathname: req.originalUrl
  });
  if(ShiftList[requrl]){
    console.log(requrl," redirected to ...", ShiftList[requrl]);
    res.redirect(ShiftList[requrl]);
  }
  else{
    if(req.query.query){
      requrl = config.SearchURL + "?term=" + req.query.query;
      console.log("Search redirected to ...", requrl);
      res.redirect(requrl);
    }
    else{
      console.log("Default redirected to ...", requrl);
      res.redirect(config.SupportURL);
    }
  }
});
app.set('port', config.port);


var server = http.createServer(app);
server.listen(config.port);
