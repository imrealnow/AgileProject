function onLoad()
{
  const users = new User();

  users.createUser("John", "johnsPassword","john@gmail.com");
  users.createUser("Max", "maxsPassword","max123@gmail.com");
};

function loginButton() {
  const users = new User();
  const session = new Session();

  var errors = document.getElementById("l-errors");
  var username = document.getElementById("l-username");
  var password = document.getElementById("l-password");

  //this checks the user accounts for the username, and checks their password too
  if(users.getUser(username.value) != null) {
    if(users.getUser(username.value).Password == password.value)
    {
      //this sets the "currentUser" variable to who you successfully signed in as
      session.set("currentUser", users.getUser(username.value));
      //this redirects to another page
      document.location.replace("index.html");
      errors.innerHTML = "";
    }
    else
    {
      //this sets an error message if the login failed
      errors.innerHTML = "Incorrect password";
    }
  }
  else {
    //this sets an error message if the login failed
    errors.innerHTML = "User not found";
  }
};

function signupButton() {
  const users = new User();
  const session = new Session();

  var errors = document.getElementById("s-errors");
  var username = document.getElementById("s-username");
  var email = document.getElementById("s-email");
  var password = document.getElementById("s-password");

  //this checks the user accounts for the username, and checks their password too
  if(users.getUser(username.value) != null) {
    errors.innerHTML = "User already exists";
  }
  else {
      var newUser = users.createUser(username.value, password.value, email.value);
      session.set("currentUser", newUser);
      //this redirects to another page
      document.location.replace("index.html");
  }
};

// login/ signup toggle
$('.btn-group a button').click(function(){
  $('.btn-group > div').hide();
 $('.btn-group > div').eq($(this).parent().index()).show();
});
$('#pwd').click(function(){
  $('.forgotpwd').show();
 $('.login').hide();
 $('.signup').hide();
});
