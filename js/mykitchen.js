// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
  var source = $('#category-template').html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#row");
  var myKitchen = JSON.parse(localStorage.getItem('myKitchen'));

  for(var i = 0; i < myKitchen.length; i++){
    var curData = myKitchen[i];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
    for(var j = 0; j < curData['items'].length; j++){
      var div = document.createElement('div');
      div.setAttribute('class', 'panel-body');
      div.innerHTML = "<a style='color:black;float:right;' class='cross'>&#x2715;</a>"+curData['items'][j];
      document.getElementById("collapse"+i).appendChild(div)
    }
  }
})

$('.cross').click(function() {
  console.log($(this).parent().getAttribute('id'));
  console.log($(this).parent());
});
