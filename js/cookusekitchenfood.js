// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
  var source = $('#list-template').html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#food_list");

  for(var i = 0; i < myKitchen.length; i++){
    var curData = myKitchen[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
    for(var j = 0; j < curData['items'].length; j++){
      var div = document.createElement('div');
      div.setAttribute('class', 'panel-body');
      div.innerHTML = curData['items'][j];
      document.getElementById("collapse"+i).appendChild(div)
    }
  }
})
