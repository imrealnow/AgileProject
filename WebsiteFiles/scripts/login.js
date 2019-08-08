function buttonClick() {
  // username: "password"
  var userAccounts = {
    steve: "stevesPassword",
    john: "johnsPassword",
    max: "maxsPassword"
  };

  var errors = document.getElementById("errors");
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  //this checks the user accounts for the username, and checks their password too
  if(userAccounts[username.value]==password.value) {
    //this sets the "currentUser" variable to who you successfully signed in as
    sessionStorage.setItem('currentUser', username.value);
    //this redirects to another page
    document.location.replace("index.html");
    errors.innerHTML = "";
  }
  else {
    //this sets an error message if the login failed
    errors.innerHTML = "Invalid login details";
  }
};