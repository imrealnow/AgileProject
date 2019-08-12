

var coffeeList = document.getElementById('coffeeType');
var withMilk = document.getElementById('milk').value;
var withSugar = document.getElementById('sugar').value;
var coffeeAdded = coffeeList.value;
var coffeeS = document.getElementById('coffeeSize').value;
var wSugar = " with";
var wMilk = " with";

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
    wSugar = " without";
  }

  if(document.getElementById('milk').checked == true){
    wMilk = " without";
  }

  console.log("hello");
  alert("You have added a " + coffeeS + " " + coffeeAdded + wSugar +" milk and" + wMilk + " sugar to your cart.");
}
