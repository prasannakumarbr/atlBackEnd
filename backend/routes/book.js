var express = require('express');
var router = express.Router();
var db = require('../models/schema');
var moment = require('moment');

// /* GET home page. */
// router.post('/', function(req, res, next) {

//   //res.render('index', { title: 'Express' });
//   console.log("addbooks method began execution........." +req.body.author+"Title:"+req.body.title);
//   var book1 = new db({
//   	author:req.body.author,
//   	title:req.body.title
//   });
//   book1.save(function(err, result){
//   	if (err){
//   		console.log("error in save" +err);
//   	}else{
//   		console.log("Saved successfully" +result);
//   		res.json({'response':"books detail saved successfully"});
//   	}
// });
// });

// exports = router;



exports.addBooks = function(req,res,next){
console.log("addbooks method began execution........." +req.body.author+"Title:"+req.body.title);
var book1 = new db({
   author:req.body.author,
   title:req.body.title,
   isbn:req.body.isbn,
   desc:req.body.desc,
   timestamp:moment()
    });
  book1.save(function(err, result){
   if (err){
     console.log("error in save" +err);
   }else{
     console.log("Saved successfully" +result);
     res.json({'response':"books detail saved successfully"});
   }
});
}

exports.viewBooks = function(req,res,next){
  console.log('Viewbooks method began execution.........');
  db.find({},function(err,result){
    //console.log("result" +result);
    res.json({allBooks:result});
  });

  }