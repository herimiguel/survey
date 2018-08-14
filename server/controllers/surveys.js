var mongoose = require('mongoose');
var User = mongoose.model('User');
var Survey = mongoose.model('Survey');

module.exports = {
    make: function(req,res){
        User.findOne({_id: req.session.current_user._id}, function(err,user){
            console.log("enter survey creation");
            console.log(user);
            console.log(req.body.content);
            var anw = new Survey();
            anw.customer = req.session.current_user;
            console.log(anw.customer)
            // anw.content = req.body.content;
            anw.author = req.body.author;
            anw.author1 = req.body.author1;
            anw.author2 = req.body.author2;
            anw.author3 = req.body.author3;
            anw.author4 = req.body.author4;
            anw.customerName = req.session.current_user.name;
            console.log(anw.customer);
            user.surveys.push(anw);
            anw.save(function(err, anw){
                if (err) {
                    console.log(err);
                } else {
                    user.save(function(err, users){
                        console.log(users);
                    if (err) {
                            console.log(err);
                            res.json(err);
                        } else {
                            console.log("********");
                            console.log(anw)
                            res.json(anw);
                        } 
                    });
                }
            });
        });
    },


    getPoll: function(req, res){
        Survey.find({_id: req.body.id}), function(err, anws) {
            if (err) {
                console.log("Errors loading surveys.");
            } else {
                res.json(anws);
            }
        };
    },

    give: function(req,res){
        Survey.find({}).sort('datetime').exec(function(err, anws) {
            if (err) {
                console.log("Errors loading users.");
            } else {
                res.json(anws);
            }
        });
    },
    destroy: function(req, res){
        console.log(" destroying function inside");
        console.log(req.body);
        Survey.remove({_id: req.body.id}, function(err){
            if (err) {
                console.log(err);
                res.json(err);
            } else {
                res.json([]);
            }
        });
    }
}
