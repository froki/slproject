$(document).ready(function() {
function processImages(response) {
        for (var i = 0; i < response.data.length; i++) {
                var url = response.data[i].images.thumbnail.url;
                $("#images").append("<img src='" + url + "'>");
        }
}
$("#addTodoBtn").click(function(funct){

var hashtags = $('#hashtag').val();

var url = "https://api.instagram.com/v1/tags/" + hashtags + "/media/recent?access_token=20179208.f59def8.9e2295a1135b4490984ad305c45f14d0&callback=?"
 $.getJSON(url, processImages);
 

});

$("images img").remove();

});