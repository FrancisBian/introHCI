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
      var innerDiv = document.createElement('div');
      innerDiv.setAttribute('class','cross');
      innerDiv.innerHTML = "<a style='color:black;float:right;'>&#x2715;</a>"+curData['items'][j];
      div.append(innerDiv);
      document.getElementById("collapse"+i).appendChild(div)
    }
  }
})

$('.cross').click(function() {
  $(this).parent().remove();
  console.log($(this).parent());
});
