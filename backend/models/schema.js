var mongoose = require('./mongoose'),
    Schema = mongoose.Schema;


var booksSchema = new Schema({
author:String,
title:String,
isbn:String,
desc:String,
timestamp:String


});

module.exports = mongoose.model('books', booksSchema);

// var books = mongoose.model('booksSchema', booksSchema);
// exports.books = books;