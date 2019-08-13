//the purpose here is to have a page where the user can top up to buy coffees on the site
const users = new User();
const session = new Session();
var currentUser = session.get('currentUser');

console.log(session.get('currentUser'));

function topupButton(){
  //gets the value of the typed into the field
  var amount = +document.getElementById("topupAmount").value;

  if (amount > 0)
  {
    //adds the value in the input to the balance
    currentUser.Balance += amount;
    var ssss = currentUser.Balance;
    console.log(ssss);
    //sets the value to the seession then using the seesion to set the value within the user
    var current = session.set('currentUser', currentUser);
    users.updateUser(current, 'currentUser');
    console.log(session.get('currentUser'));
    location.reload();
    alert("thanks for topping up, your current balance is: " + ssss);
  }
  //catchs if the input isn't a valid number
  else
  {
    alert("you need to input a valid number larger than 0");
  }

}
