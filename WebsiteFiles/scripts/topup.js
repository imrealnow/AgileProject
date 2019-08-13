const users = new User();
const session = new Session();
var currentUser = session.get('currentUser');

console.log(session.get('currentUser'));

function topupButton(){
  var amount = +document.getElementById("topupAmount").value;

  if (amount > 0)
  {
    currentUser.Balance += amount;
    var ssss = currentUser.Balance;
    console.log(ssss);
    var current = session.set('currentUser', currentUser);
    users.updateUser(current, 'currentUser');
    console.log(session.get('currentUser'));
  }

  else
  {
    alert("you need to input a valid number larger than 0");
  }

}
