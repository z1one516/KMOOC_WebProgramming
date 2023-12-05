var request = require('request');
//  첫번째 인자 url, 두번째 생략 가능 , 세번째 인자 post, put body 에 전달할 내용 지정 가능
request.get('/books', function(error, response, body) {

});

request.post('/books', {vody: {key:value}}, function(error, response, body) {

});

request.put('/books', {body: {key:value}}, function(error, response, body) {

});

request.delete('/books', function(error, response, body) {

});