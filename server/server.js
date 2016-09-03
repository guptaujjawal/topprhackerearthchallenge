var express= require('express'),
	bodyParser=require('body-parser'),
	path=require('path'),
	config=require('./config/config');
	
var app=express();

app.use(bodyParser());

app.set('views', path.join(__dirname, '../client'));
app.set('view engine', 'jade');

app.use(function (req, res, next) {
    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});

require('./route')(app);

app.listen(process.env.PORT || config.server.port);
console.log("Server started at "+config.server.port);

