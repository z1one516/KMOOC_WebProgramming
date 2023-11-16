$('#alert').click(function(){
    alert('Button clicked!');
});

$('#button2').click(function(){
    $('#alert').click();
})
