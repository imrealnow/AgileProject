function buttonClick() {
  var errors = document.getElementById("errors");
  var username = document.getElementById("username");
  var password = document.getElementById("password");
  if(username.value == "user1" && password.value == "password123") {
    document.location.replace("index.html");
    errors.innerHTML = "";
  }
  else {
    errors.innerHTML = "Invalid login details";
  }
};