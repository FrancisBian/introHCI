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
			document.getElementById("description").textContent=curData.description;
			document.getElementById("catlg1").textContent=curData.category[0];
			document.getElementById("catlg2").textContent=curData.category[1];
			document.getElementById("catlg3").textContent=curData.category[2];
			document.getElementById("instruction").textContent=curData.instructions;
		}
	}
})
