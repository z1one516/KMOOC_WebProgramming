var obj = {
    a: 'JSON',
    b: 'NOSJ',
    arr : [1,2,'test']
}
console.log(obj);

var json = JSON.stringify(obj);
console.log(json);

var newObj = JSON.parse(json);
console.log(newObj);

<!-- key: things todo, value: completion check -->
var todos = {};
$("addButton").click(function(){
    var text = $("#inputBox").val();
    todos[text] = false;
    $("#inputBox").val("");
    console.log(todos);
});

<script>
    var students = [
        { name: 'Mary', id: '219xxx'},
        { name: 'Alice', id: '210XXX'}
    ];
    var ul = $('ul');
    for (let student of students) {
        var li = $('<li>' + student.name +'</li>');
        li.data('id', student.id);
        li.click(function(event) {
            var el = $(event.target);
            alert(el.data('id'));
        });

        ul.append(li);
    }
</script>