var express = require('express')
var MongoClient = require('mongodb').MongoClient
var mongo  = require('mongodb')
var app = express()

//var mongoclient = new MongoClient(new Server("localhost", 27017));
var url = 'mongodb://localhost:27017/test';

app.get('/', function (req, res) {
	res.send('Hello Aurora\nLets Start Coding')
})

var server = app.listen(3000, function () {
	var host = server.address().address
	var port = server.address().port
	console.log('Aurora Server running at http://%s:%s', host, port)
})

	// Connection URL
	// Use connect method to connect to the Server
		MongoClient.connect(url, function(err, db) {
			console.log("Connected correctly to server");
			var myCollection = db.collection('test');
			//var cursor = myCollection.find({"title" : "First data", "user" : "king"});
			var cursor = myCollection.find();
			cursor.each(function(err, doc) {

				if(err){
					console.log("document err:");
					throw err;
				}

				if(doc == null){
					console.log("document null:");
		            return;
		        }
		        console.log("document find:");
		        console.log(doc.title);
		    });
			/*
		    myCollection.insert({"title" : "First data5", "user" : "king5" }, function(err, result) {
		    if(err)
		        throw err;
		    console.log("entry saved");
			});*/
			db.close();
		});
// end
