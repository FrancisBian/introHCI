var recipeData = [
  {'id': 0, 'name': 'chicken noodle soup', 'pic': 'images/fake_chicken_noodle_soup.png', 'category': ['chicken', 'carrot', 'noodle'], 'ingredients': ['3 A', '3 B', '3 C'], 'calories':0, 'servingSize': 0,'instructions':'Here should be the instructions of the recipe'},
  {'id': 1, 'name': 'lasagna', 'pic': 'images/fake_lasagna.png', 'category': ['noodle', 'cheese'], 'ingredients': ['3 A', '3 B', '3 C'], 'calories':0, 'servingSize': 0, 'instructions':'Here should be the instructions of the recipe'},
  {'id': 2, 'name': 'dumplings', 'pic': 'images/fake_dumplings.png', 'category': ['pork'], 'ingredients': ['3 A', '3 B', '3 C'], 'calories':0, 'servingSize': 0, 'instructions':'Here should be the instructions of the recipe'},
  {'id': 3, 'name': 'fried rice', 'pic': 'images/fake_fried_rice.png', 'category': ['rice', 'carrot', 'egg'], 'ingredients': ['3 A', '3 B', '3 C'], 'calories':0, 'servingSize': 0, 'instructions':'Here should be the instructions of the recipe'},
  {'id': 4, 'name': 'Spaghetti and meatball', 'pic': 'images/fake_fried_rice.png', 'category': ['noodle', 'pork', 'egg'], 'ingredients': ['3 A', '3 B', '3 C'], 'calories':0, 'servingSize': 0, 'instructions':'Here should be the instructions of the recipe'},
]

var myFavorite = [
  recipeData[0],
  recipeData[1],
  recipeData[2],
  recipeData[3]
]
var myKitchen = [
  {'id':0, 'category': 'Fruits', 'check': 'check here', 'items': ['apple', 'banana', 'pear']},
  {'id':1, 'category': 'Protein', 'check': 'check here','items': ['beef','tilapia']},
  {'id':2, 'category': 'Vegetables', 'check': 'check here','items': ['carrot', 'spinach', 'broccoli']},
  {'id':3, 'category': 'Diary', 'check': 'check here','items': ['milk','cheese']},
  {'id':4, 'category': 'Others','check': 'check here', 'items': ['noodle']},
]

//get username and password
var name = localStorage.getItem('customName');
var pass = localStorage.getItem('password');
$("#myusername").html(name);
$("#mypassword").html(pass);

//function for updating inputted login to local storage
function loginFunction() {
  //getting and setting username
  var name = localStorage.getItem('customName');
    if (true) {
      $("#myusername").html(name);

    var username = document.getElementById("username").value;
    console.log(name);
    localStorage.setItem('customName', username);
    console.log(username);
  }

  //getting and setting password
  var pass = localStorage.getItem('password');
    if (true) {
      $("#mypassword").html(pass);

      var mypass = document.getElementById("password").value;
      console.log(pass);
      localStorage.setItem('password', mypass);
      console.log(mypass);
    }
    //opens homepage after script runs
    localStorage.setItem('favData',JSON.stringify(myFavorite));
    localStorage.setItem('myKitchen',JSON.stringify(myKitchen));
    localStorage.setItem('recipeData', JSON.stringify(recipeData));
    window.location = "homepage.html";
}
