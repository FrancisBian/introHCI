// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
  var source = $('#favorite-template').html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#bar");

  for(var i = 0; i < myFavorite.length; i++){
    var curData = myFavorite[i];
    var curHtml = template(curData);
    parentDiv.prepend(curHtml);
  }
})
