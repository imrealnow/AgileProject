const session = new Session();
var currentUser = session.get('currentUser');

console.log(session.get('currentUser'));

function getInfo(){
  var nameMessage = document.getElementById("userName");
  var userName = currentUser.Name;
  nameMessage.innerHTML = "User: " + userName;

  var balanceMessage = document.getElementById('balance');
  var userBalance = currentUser.Balance;
  balanceMessage.innerHTML = "Your balance is : $" + userBalance;

  var coffeesBoughtMessage = document.getElementById('coffeesBought');
  var userCoffees = currentUser.CoffeesBought;

  coffeesBoughtMessage.innerHTML = "You have bought a total of " + userCoffees
  + " coffees, buy a total of ten to get a free coffee!";
}
