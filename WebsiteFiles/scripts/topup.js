const session = new Session();
var currentUser = session.get('currentUser');
console.log(session.get('currentUser'))
function topupButton(){
  var amount = +document.getElementById("topupAmount").value;
  if (amount > 0){
    currentUser.balance += amount;
    var ssss = currentUser.balance += amount;
    alert(ssss);
    session.set('currentUser');
  }
  else{
    alert("you need to input a valid number larger than 0")
  }
  console.log(session.get('currentUser'))
}
