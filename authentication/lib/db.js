var mongoose = require('mongoose');
var Schema = mongoose.Schema;
module.exports.mongoose = mongoose;
module.exports.Schema = Schema;


var username = "pereter"
var password = "0032380as";
var address = "@ds041248.mongolab.com:41248/nodeproject";
connect();

function connect(){
	var url = 'mongodb://'+username + ':' + password + address;
	mongoose.connect(url);
}

function disconnect() {mongoose.disconnect()}