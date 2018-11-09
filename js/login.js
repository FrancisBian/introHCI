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
    window.location = "homepage.html";
}
