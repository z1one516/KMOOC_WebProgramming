var express = require("express");
var app = express();

var todos= {};

$.ajax("http://localhost:3000/todos").done(function(result){
    console.log(result);

    todos = result;
    for (const todo of Object.keys(todos)){
        $(".contents ul").append(liTemplate(todo, todos[todo]))
    }
});

// api 서버와 html 파일을 같은 도메인에서 호스팅하기 위해 static 미들웨어 추가, 정적파일 위치 public 폴더로 지정
app.use(express.json());
app.use(express.static("public"));

app.listen(3000, function() {
    console.log("App listensing on port 300)!");
});

// request body에 있는 JSON 문자열이 JSON 미들웨어에 의해 자동으로 자바스크립트 객체 변환되어 저장
// line 19 . 으로 response 함수 연결: response 객체 함수들이 반환값으로 다시 response 객체를 리턴하기 때문 -> chaining 중복 줄임. status(200) 생략 가능
app.post("/todos", function(req, res) {
    todos = req.body.todos;
    console.log(req.body);
    res.status(200).send({message: "success"});
});

// 저장된 todos 값을 저장된 api로 전송
app.get("/todos", function(req,res){
    res.status(200).send(todos);
});


