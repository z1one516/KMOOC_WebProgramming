var haksik=[];
var moms=[];

$.ajax("http://smart.handong.edu/api/service/menu").done(function(result){
    haksik = result.haksik;
    moms = result.moms;
    addItems(haksik);
})

//haksik array is an argument

// add in table
function addItems(menuArr) {
    for (const menu of menuArr) {
        $("#tableBody").append(
            `<tr><td>${menu.menu_kor}</td><td>${menu.menu_eng}</td></tr>`
        );
    }
}

$("#haksikBrn").click(function() {
    $("tableBody").html("");
    addItems(haksik);
});
$("momsBtn").click(function() {
    $("tableBody").html("");
    addItems(moms);
});
// $("tableBody").html(""); before adding the data clear. otherwise, data will be endlessly added