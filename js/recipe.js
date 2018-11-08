// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
	console.log(myKitchen);
	var queryParams = new URLSearchParams(window.location.search);
	var recipeID = queryParams.get('id');
	console.log('query for recipe ', recipeID);

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
})
