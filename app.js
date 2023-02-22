var express = require("express");
var app = express();
var mysql = require('mysql');
var database = require("./database");

app.get('/',function(req,res){
    res.send("bao dep trai");
})

app.get('/getAllStudent',function(req,res){
    database.getAllStudent(function(results)
    {
        res.json(results)
    })
});
app.listen(3000);