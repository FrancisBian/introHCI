// Call this function when the page loads (the jQuery "ready" event)
var recipeID = -1;
favList = JSON.parse(localStorage.getItem('favData'));
var recipeData = JSON.parse(localStorage.getItem('recipeData'));
var backAdd = JSON.parse(localStorage.getItem('address'));
$(document).ready(function() {
	var queryParams = new URLSearchParams(window.location.search);
	recipeID = queryParams.get('id');
	console.log('query for recipe #', recipeID);
	for(var i = 0; i < recipeData.length; i++){
		var curData = recipeData[i];
		if(curData.id == recipeID){
			document.getElementById("recipeimg").src=curData.pic;
			document.getElementById("recipeName").textContent=curData.name;
			document.getElementById("ingredient1").textContent=curData.ingredients[0];
			document.getElementById("ingredient2").textContent=curData.ingredients[1];
			document.getElementById("ingredient3").textContent=curData.ingredients[2];
			document.getElementById("instruction").textContent=curData.instructions;
			document.getElementById("categories").textContent=curData.category;
			document.getElementById("calories").textContent="Calories: "+curData.calories;
			document.getElementById("servingSize").textContent="Serving size: "+curData.servingSize;
		}
	}

	for(var i = 0; i < favList.length; i++){
		if(favList[i]['id'] == recipeID ){
			$(".star.glyphicon").toggleClass("glyphicon-star glyphicon-star-empty");
			console.log("Find this in favorite");
		}
	}
	if(backAdd == "homepage.html"){
		console.log(backAdd);
		$("#back").attr("href", backAdd);
	}

})

$(".star.glyphicon").click(function() {
  $(this).toggleClass("glyphicon-star glyphicon-star-empty");
	if(this.className == "star glyphicon glyphicon-star"){
		favList.push(recipeData[recipeID]);
		console.log("here1 "+favList.length);
	}
	else{
		for(var i = 0; i < favList.length; i++){
			if(favList[i]['id'] == recipeID){
				favList.splice(i,1);
			}
			console.log("here2 "+favList.length);
		}
	}
	for(var i = 0; i < favList.length; i++){
		console.log(favList[i]['name']);
	}
	localStorage.setItem('favData',JSON.stringify(favList));
});
