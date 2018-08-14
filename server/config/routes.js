var users = require('../controllers/users.js');
var surveys = require('../controllers/surveys.js');
var path = require('path');
module.exports = function(app) {

    app.get("/api/give", function (req,res){
        users.give(req,res);
    });
    app.post("/api/create", function (req,res){
        users.create(req,res);
    });
    app.post("/api/login", function (req,res){
        users.login(req,res);
    });
    app.get("/api/account", function (req,res){
        users.current(req,res);
    });
    app.post("/api/add", function(req,res){
        surveys.make(req,res);
    });

    // app.get("/api/addPoll", function(req, res){
    //     surveys.getPoll(req, resp);
    // });

    app.get("/api/surveys", function(req,res){
        surveys.give(req,res);
    });
    app.post("/api/destroy", function(req,res){
        surveys.destroy(req,res);
    });
    app.get("/api/out", function(req,res){
        users.logout(req,res);
    });
    app.all('*', function(req,res){
        res.sendFile(path.resolve('./public/dist/index.html'));
    });
}