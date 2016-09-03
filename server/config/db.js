var mysql=require('mysql');
var config=require('./config');

var connection=mysql.createConnection({
	host:config.database.host,
	user:config.database.user,
	password:config.database.password,
	database:config.database.db	
	});
connection.connect(function(err){
	if(err){
		console.log('Error Connecting'+err.stack);
		return;}
	console.log('Connected as id'+connection.threadId);
	});
exports.connection=connection;