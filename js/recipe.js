var recipeData = [
	{'id': 0, 'name': 'chicken noodle soup', 'pic': 'images/fake_chicken_noodle_soup.png', 'category': ['chicken', 'carrot', 'noodle'], 'description': 'It is a description of this recipe', 'instructions':'Here should be the instructions of the recipe'},
	{'id': 1, 'name': 'lasagna', 'pic': 'images/fake_lasagna.png', 'category': ['noodle', 'cheese'], 'description': 'It is a description of this recipe', 'instructions':'Here should be the instructions of the recipe'},
	{'id': 2, 'name': 'dumplings', 'pic': 'images/fake_dumplings.png', 'category': ['pork'], 'description': 'It is a description of this recipe', 'instructions':'Here should be the instructions of the recipe'},
	{'id': 3, 'name': 'fried rice', 'pic': 'images/fake_fried_rice.png', 'category': ['rice', 'carrot', 'egg'], 'description': 'It is a description of this recipe', 'instructions':'Here should be the instructions of the recipe'}
]

var myKitchen = [
	{'category': 'Fruits', 'items': ['apple', 'banana', 'pear']},
	{'category': 'Protein', 'items': ['beef','tilapia']},
	{'category': 'Vegetables', 'items': ['carrot', 'spinach', 'broccoli']},
	{'category': 'Diary', 'items': ['milk','cheese']},
	{'category': 'Others', 'items': []},
]


// Call this function when the page loads (the jQuery "ready" event)
$(document).ready(function() {
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
