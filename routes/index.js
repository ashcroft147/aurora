var express = require('express');
var router = express.Router();
var mongodb = require('mongodb');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Aurora' });
});

router.get('/thelist', function(req, res){
  var MongoClient = mongodb.MongoClient;

  var url = 'mongodb://localhost:27017/aurora';
  MongoClient.connect(url, function(err, db){
    if(err){
      console.log('Unable to connect to the server', err);

    }
    else {
      console.log("Connection Established");

      var collection = db.collection('students');

      collection.find({}).toArray(function (err, result){
        if(err) {
          res.send(err);
        } else if (result.length) {
          res.render('studentlist', {
            "studentlist": result
          });
        } else {
          res.send('No documents found');
      }
      db.close();
      });
    }
  });
});


router.get('/newstudent', function(req, res){
  res.render('newstudent', {title: 'Add Student'});
});

router.post('/addstudent', function(req, res){
  var MongoClient = mongodb.MongoClient;

  var url = 'mongodb://localhost:27017/aurora';

  MongoClient.connect(url, function(err, db) {
    if(err){
      console.log("Unable to connect to the server", err);

    }
    else {
      console.log('Connected to server');
      var collection = db.collection('students');

      var student1 = {student: req.body.student, University: req.body.University, city: req.body.city, sex: req.body.sex};

      collection.insert([student1], function(err, result){
        if(err){
          console.log(err);
        }
        else {
          res.redirect("thelist");
        }
        db.close();
      });
    }
  });
});

module.exports = router;
