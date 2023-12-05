var todos = {};
// 추가하가 버튼이 클릭되는 경우 li 할 일이 새로 생성되는 경우, 체크가 해제된 false 전
$("#addButton").click(function(){
    var text = $("#inputBox").val(); // Corrected selector to use #
    todos[text] = false;
    $("#inputBox").val("");
    console.log(todos);

    $(".contents ul").append(liTemplate(text, false));
    saveTodos(); // 클라이언트의 todos 리스트 전달 1) 추가 2) 체크
});


function inputTemplate(text, checked) {
    var inputTag = $('<input type="checkbox" class="checkBox">');
    inputTag.data("value", text);
    inputTag.attr("checked", checked);
    return inputTag;
}

function buttonTemplate(text) {
    var buttonTag = $('<button class="deleteButton">X</button>');
    buttonTag.data("value", text);
    return buttonTag;
}

function liTemplate(text, checked) {
    var li = $('<li></li>');
    li.attr("value", text);
    li.append(inputTemplate(text, checked));
    li.append(document.createTextNode(text)); // Use document.createTextNode to insert text content
    li.append(buttonTemplate(text));

    li.click(function(event) {
        var el = $(event.target);
        console.log(el.data("value"));

        if (el.is("button")) {
            delete todos[text];
            li.remove();
        } else if (el.is("input[type='checkbox']")) {
            var isChecked = el.is(":checked");
            if (isChecked) {
                li.addClass("checked");
                todos[text] = true;
            } else {
                li.removeClass("checked");
                todos[text] = false;
            }
        }

        saveTodos()
    });

    return li;
}

// jQuery 에 ajax를 사용하여 주어진 API주소로 POST 요청
function saveTodos() {
    $.ajax({url:"http://localhost:3000/todos",
method: "POST",
data: JSON.strinigy({todos: todos}),
dataType: "json",
contentType: "application/json"
}).done(function(){
console.log(function() {
    console.log("POST done");
});
})
}