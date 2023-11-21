$(document).ready(function () {
    var dict = $('#sidemenu ul');
    var title = $('#sidemenu h2');
    var p = $('#sidemenu p');

    $.getJSON('dict.json')
        .done(function (data) {
            for (var word of data) {
                var li = $('<li></li>');
                li.text(word.title);
                li.data('word', word);
                li.click(function (event) {
                    var el = $(event.target);
                    var word = el.data('word');
                    title.text(word.title);
                    p.text(word.description); // Corrected typo here
                });
                dict.append(li);
            }
        });
});
