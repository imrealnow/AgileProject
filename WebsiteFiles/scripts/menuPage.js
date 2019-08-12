

var coffeeList = document.getElementById('coffeeType');
var withMilk = document.getElementById('milk').value;
var withSugar = document.getElementById('sugar').value;
var coffeeAdded = coffeeList.value;
var coffeeS = document.getElementById('coffeeSize').value;
var wSugar = " without";
var wMilk = " without";

//updates the selected coffe type
function selectCoffee(){
  coffeeAdded = document.getElementById('coffeeType').value;
}
//updates the selection size
function changeSize() {
  coffeeS = document.getElementById('coffeeSize').value;
}


//displays what has been added to cart
function addedToCart(){
  if(document.getElementById('sugar').checked == true){
    wSugar = " with";
  }

  if(document.getElementById('milk').checked == true){
    wMilk = " with";
  }
  var cart = sessionStorage.getItem("cartString");
  cart = cart + coffeeS + coffeeAdded + wSugar + wMilk;
  sessionStorage.setItem("cartString", cart);
  console.log("hello");
  alert("You have added a " + coffeeS + " " + coffeeAdded + wSugar +" sugar and" + wMilk + " milk to your cart.");
}
