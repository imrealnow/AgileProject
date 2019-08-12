function onLoad()
{

};

function buttonClick() {
  const users = new User();

  users.createUser("John", "johnsPassword","john@gmail.com");
  users.createUser("Max", "maxsPassword","max123@gmail.com");

  var errors = document.getElementById("errors");
  var username = document.getElementById("username");
  var password = document.getElementById("password");

  //this checks the user accounts for the username, and checks their password too
  if(users.getUser(username.value) != null) {
    if(users.getUser(username.value).Password == password.value)
    {
      //this sets the "currentUser" variable to who you successfully signed in as
      sessionStorage.setItem('currentUser', username.value);
      sessionStorage.setItem("cartString", "");
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

// login/ signup toggle
$('.btn-group a button').click(function(){
  $('.btn-group > div').hide();
 $('.btn-group > div').eq($(this).parent().index()).show();
});
