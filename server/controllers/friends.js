var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');

function FriendsController(){
	this.index = function(req, res){
		Friend.find({}, function(err, friend){
			res.json({friend});
		  })
  	};

  	this.create = function(req,res){
   		 var newfriend = new Friend({name: req.body.name, age: req.body.age})
       // console.log("This is the body",req.body)
       newfriend.save(function(err, result){
          if(err){
            console.log("there was an error saving user", err);
            res.json({error: "Invalid Credentials"});
          } else {
            res.json(result);
          }
       })
  	};

  	this.update = function(req,res){
      Friend.update({_id: req.params.id}, req.body, function(err){
          if (err) {
            console.log(err); }
         else{
            res.redirect('/')
          }

      })
  	};

  	this.delete = function(req,res){
    //your code here
    	res.json({placeholder:'delete'});
  	};

  	this.show = function(req,res){
    	Friend.find({}, function(err, friend){
    		res.json(friend);
    	})
  	};

}

module.exports = new FriendsController();