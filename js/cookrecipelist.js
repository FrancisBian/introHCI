chosenIng = JSON.parse(localStorage.getItem('currentIng'));
var recipeData = JSON.parse(localStorage.getItem('recipeData'));
$(document).ready(function() {
  var queryParams = new URLSearchParams(window.location.search);
	id = queryParams.get('id');
  if(id == 2){
    byCalory();
  }
  else{
    console.log(chosenIng);
    var dict = {};
    for(var i = 0; i < recipeData.length; i ++){
      currRecipe = recipeData[i];
      var recipeCount = 0;
      for(var j = 0; j < currRecipe['category'].length; j++){
        for(var k = 0; k < chosenIng.length; k++){
          if(currRecipe['category'][j] == chosenIng[k]){
            recipeCount += 1;
          }
        }
      }
      dict[i] = recipeCount;
    }

    var items = Object.keys(dict).map(function(key) {
      return [key, dict[key]];
    });
    items.sort(function(first, second) {
      return second[1] - first[1];
    });
    var recipeList = {};
    var recipe_idx = [];
    for (var key in items) {
      if (items.hasOwnProperty(key)) {
          if(items[key][1]>0){
            recipe_idx.push(items[key][0]);
            recipeList[items[key][0]] = items[key][1];
          }
      }
    }
    localStorage.setItem('recipe_idx',JSON.stringify(recipe_idx));
    if(recipe_idx.length<1){
      var div = document.createElement('div');
      div.setAttribute('class', 'container');
      div.innerHTML = "No recipe found, please try other ingredients.";
      document.getElementById("container").appendChild(div);
      var div = document.createElement('div');
      div.setAttribute('class', 'container');
      div.innerHTML = "<a id='back_button' href='cook1.html'>Go back</a>";
      document.getElementById("container").appendChild(div);
    }

    var source = $('#recipe-template').html();
    var template = Handlebars.compile(source);
    var parentDiv = $("#container");
    parentDiv.empty();

    for(var i = 0; i < recipe_idx.length; i++){
      var curData = recipeData[recipe_idx[i]];
      var curHtml = template(curData);
      parentDiv.append(curHtml);
      document.getElementById(recipe_idx[i]).innerHTML="Match "+recipeList[recipe_idx[i]]+" ingredients";
    }
  }
})

$('#calories').click(byCalory())

function byCalory(){
  var recipe_idx = JSON.parse(localStorage.getItem('recipe_idx'));
  recipeCal = {}
  for(var i = 0; i < recipe_idx.length; i++){
    for(var j = 0; j < recipeData.length; j ++){
      if(recipe_idx[i] == recipeData[j]['id']){
        recipeCal[recipe_idx[i]] = recipeData[j]['calories']
      }
    }
  }
  var items = Object.keys(recipeCal).map(function(key) {
    return [key, recipeCal[key]];
  });
  items.sort(function(first, second) {
    return second[1] - first[1];
  });
  items = items.reverse();
  console.log(items);

  var source = $('#recipe-template').html();
  var template = Handlebars.compile(source);
  var parentDiv = $("#container");
  parentDiv.empty();

  for(var i = 0; i < items.length; i++){
    var curData = recipeData[items[i][0]];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
    document.getElementById(items[i][0]).innerHTML="Calories: "+items[i][1];
  }
}
