var cart = sessionStorage.getItem("cartString");
var displayCart = document.getElementById("cartListDis");
var cartSplit = cart.split(",")
var line = "";
var totalCost =  sessionStorage.getItem("cartPrice");

for (i=0; i<cartSplit.length; i++){
  if (cartSplit[i]=="ENDLINE"){
    line = displayCart.innerHTML + "<br>" + line;
    displayCart.innerHTML = line;
    line = "";
  }
  else{
      line = line + cartSplit[i];
  }

  console.log(cartSplit[i]);



}
displayCart.innerHTML = displayCart.innerHTML + "<br> Price: $" + (totalCost/100);

function clearCart(){
  sessionStorage.setItem("cartString", "");
  sessionStorage.setItem("cartPrice", 0);
  displayCart.innerHTML = "";

}
