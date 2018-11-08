// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
  var source = $('#favorite-template').html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#bar");
  favoriteList = JSON.parse(localStorage.getItem('favData'));
  console.log(favoriteList.length);

  for(var i = 0; i < favoriteList.length; i++){
    var curData = favoriteList[i];
    var curHtml = template(curData);
    parentDiv.prepend(curHtml);
  }
})
