var myKitchen = [
	{'id':0, 'category': 'Fruits', 'check': 'check here', 'items': ['apple', 'banana', 'pear']},
	{'id':1, 'category': 'Protein', 'check': 'check here','items': ['beef','tilapia']},
	{'id':2, 'category': 'Vegetables', 'check': 'check here','items': ['carrot', 'spinach', 'broccoli']},
	{'id':3, 'category': 'Diary', 'check': 'check here','items': ['milk','cheese']},
	{'id':4, 'category': 'Others','check': 'check here', 'items': []},
]


// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
  var source = $('#category-template').html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#row");

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
