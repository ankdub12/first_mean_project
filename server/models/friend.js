var mongoose = require('mongoose');

var FriendSchema = new mongoose.Schema({
	name: {type: String, required: true},
	age: {type: String}
	})

var Friend = mongoose.model('Friend', FriendSchema)

