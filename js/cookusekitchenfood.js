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
      div.setAttribute('class', 'item');
      div.innerHTML = "<input type='checkbox' id='box' style='margin-top:15px;margin-left:15px;margin-bottom:15px;margin-right:10px;'>"+curData['items'][j]+"<br>";
      document.getElementById("collapse"+i).appendChild(div);
    }
  }
})


$('#make_button').click(function(){
  var stringArr = [];
  $('.item').each(function(){
    var checked = this.children[0].checked;
    if(checked){
      stringArr.push((this).textContent);
    }
  })
  if(stringArr.length == 0){
    alert("Please choose at least one ingredient!");
  }
  else{
    window.location.href = "cookrecipelist.html";
  }
  localStorage.setItem('currentIng',JSON.stringify(stringArr));
})
