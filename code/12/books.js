// books.js
var express = require('express');
var booksRouter = express.Router(); // Fix the variable name

var books = [];
var id = 1;

booksRouter.get('/', function(req, res, next) {
    res.send(books);
});

booksRouter.post('/', function(req, res, next) {
    var book = req.body;
    book.id = id;

    books.push(req.body);
    id += 1;
    res.sendStatus(200);
});

booksRouter.put('/:id', function(req, res, next) {
    var index = books.findIndex(function(book) {
        return book.id == req.params.id;
    });
    books.splice(index, 1, req.body);
    res.sendStatus(200);
});

booksRouter.delete('/:id', function(req, res, next) {
    var index = books.findIndex(function(book) {
        return book.id == req.params.id;
    });
    books.splice(index, 1);
    res.sendStatus(200);
});

module.exports = booksRouter;