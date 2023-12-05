var express = require('express');
var app = express();
var router = require('./router.js');
var booksRouter = require('./books.js');

app.use(express.json());
app.use(express.static('public'));
app.use('/router',router);
app.use('/books', booksRouter);

app.use(function(req, res, next) {
    res.send('OK');
});

app.listen(3000, function() {
    console.log('execute web server on 3000 port');
});
