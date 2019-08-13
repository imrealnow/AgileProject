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
}
