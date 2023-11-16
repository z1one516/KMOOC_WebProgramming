var todos = {};

$("#addButton").click(function(){
    var text = $("#inputBox").val(); // Corrected selector to use #
    todos[text] = false;
    $("#inputBox").val("");
    console.log(todos);

    $(".contents ul").append(liTemplate(text));
});


function inputTemplate(text) {
    var inputTag = $('<input type="checkbox" class="checkBox">');
    inputTag.data("value", text);
    return inputTag;
}

function buttonTemplate(text) {
    var buttonTag = $('<button class="deleteButton">X</button>');
    buttonTag.data("value", text);
    return buttonTag;
}

function liTemplate(text) {
    var li = $('<li></li>');
    li.attr("value", text);
    li.append(inputTemplate(text));
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
    });

    return li;
}

