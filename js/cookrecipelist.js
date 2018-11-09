$(document).ready(function() {
  chosenIng = JSON.parse(localStorage.getItem('currentIng'));
  var recipeData = JSON.parse(localStorage.getItem('recipeData'));
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
  console.log(items);
  var recipe_idx = [];
  for (var key in items) {
    console.log(items[key]);
    if (items.hasOwnProperty(key)) {
        if(items[key][1]>0){
          recipe_idx.push(items[key][0]);
        }
    }
  }
  console.log(recipe_idx);
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

  for(var i = 0; i < recipe_idx.length; i++){
    var curData = recipeData[recipe_idx[i]];
    var curHtml = template(curData);
    parentDiv.append(curHtml);
  }
})
