

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

  if(document.getElementById('milk').checked == true){
    wMilk = " with milk";
  }

  if(coffeeS == "regular"){
     price = (Number(price) + 450);
   }
 else {
      price = (Number(price) + 300);
   }
  sessionStorage.cartPrice = price;

  var cart = sessionStorage.getItem("cartString");
  cart = cart + "," + coffeeS + "," + coffeeAdded + "," + wSugar + "," + wMilk + "," + "ENDLINE";
  sessionStorage.setItem("cartString", cart);
  //console.log(price);
  totalDis.innerHTML = "Cart Total $" + price;


  alert("You have added a " + coffeeS + " " + coffeeAdded + wSugar +" and" + wMilk + " to your cart.");

}
  totalDis.innerHTML = "Cart Total $" + (price/100);

var cart = sessionStorage.getItem("cartString");
var displayCart = document.getElementById("orderItems");
var cartSplit = cart.split(",")
var line = "";
var totalCost =  sessionStorage.getItem("cartPrice");
//displays the order in short hand in HTML
for (i=0; i<cartSplit.length; i++){


      if (cartSplit[i]=="regular"){
        line = line + "Reg ";
      }
      else if (cartSplit[i]=="small"){
        line = line + "Sml ";
      }
      if( 2 == (i%5)){
        line = line + cartSplit[i];
      }
      if (cartSplit[i]==" with sugar"){
        line = line + " Sugar ";

      }
      if (cartSplit[i]==" without milk"){
        line = line + " Milk";
      }
      console.log(cartSplit[i]);
      if (cartSplit[i]=="ENDLINE"){
        line = displayCart.innerHTML + "<br>" + line;
        displayCart.innerHTML = line;
        line = "";
      }
  }
//displays price of cart items on page
displayCart.innerHTML = displayCart.innerHTML + "<br> Price: $" + (totalCost/100);

  function clearCart(){
    sessionStorage.setItem("cartString", "");
    sessionStorage.setItem("cartPrice", 0);
    displayCart.innerHTML = "";

  }
