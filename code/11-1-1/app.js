var menu = $('#sidemenu li');
var content = $('#content');

menu.click(function(event) {
    var url = event.target.innerText + '.html';
    $.ajax(url)
        .done(function(html) {
            content.html(html); // Corrected typo in this line
        })
        .fail(function() {
            content.html('Failed to load content.'); // Handle failure
        });
});
