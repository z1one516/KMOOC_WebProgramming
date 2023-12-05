var express = require('express');
var request = require('request');
var app = express();


var messages = []; // var array to save chatting messages

app.use(express.json());
app.use(express.static("public"));

app.listen(3000, function() {
    console.log("App listening on port 3000!");
});

// save client message and translate 
app.post("/send", function(req, res) {
    var message = {
        sender: req.body.sender,
        ko: req.body.ko,
        en: req.body.en
    };

    console.log(message);
    
    var options = {
        url: "https://openapi.naver.com/v1/papago/n2mt",
        body: `source=${message.ko.length == 0 ? "en" : "ko"}&target=${message.ko.length == 0 ? "ko" : "en"}&text=${encodeURIComponent(message.ko.length == 0 ? message.en : message.ko)}`,
        headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8",
            "X-Naver-Client-Id": "7JtH_SB4p7AJVMJ6880B",
            "X-Naver-Client-Secret": "CcFqUyS1U9"
        }
    };
    request.post(options, function(error, response){
        var result = JSON.parse.apply(response.body).message.result;
        message.ko = message.ko.length == 0 ? result.translatedText:message.ko;
        message.en = message.en.lenght == 0 ? result.translagedText: message.en;
        console.log(message);
        messages.push(message);
        res.status(200).send({ message: "Success" });
    }); 
});

app.get("/receive", function(req,res) {
    var result = {total: messages.length, messages: []};

    if (messages.length > req.query.from) {
        result.messages = messages.slice(req.query.from);
    }

    res.status(200).send(result);
})