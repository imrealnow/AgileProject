

var coffeeList = document.getElementById('coffeeType');
var withMilk = document.getElementById('milk').value;
var withSugar = document.getElementById('sugar').value;
var coffeeAdded = coffeeList.value;
var coffeeS = document.getElementById('coffeeSize').value;
var wSugar = " without sugar";
var wMilk = " without milk";
var price = sessionStorage.getItem('cartPrice');
var totalDis = document.getElementById("displayTotal");



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
    wSugar = " with sugar";
  }
  console.log("step1");

  if(document.getElementById('milk').checked == true){
    wMilk = " with milk";
  }
  console.log("step3");

  if(coffeeS == "regular"){
     price = (Number(price) + 450);
   }
 else {
      price = (Number(price) + 300);
   }
  console.log("step3");
  sessionStorage.cartPrice = price;
  console.log("step4");

  var cart = sessionStorage.getItem("cartString");
  cart = cart + "," + coffeeS + "," + coffeeAdded + "," + wSugar + "," + wMilk + "," + "ENDLINE";
  sessionStorage.setItem("cartString", cart);
  //console.log(price);
  totalDis.innerHTML = "Cart Total $" + price;



  alert("You have added a " + coffeeS + " " + coffeeAdded + wSugar +" and" + wMilk + " to your cart.");

    console.log("jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj");
}
  totalDis.innerHTML = "Cart Total $" + (price/100);
