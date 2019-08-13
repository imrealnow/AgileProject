const order = new Order();
const session = new Session();
var coffeeList = document.getElementById('coffeeType');
var withMilk = document.getElementById('milk');
var withSugar = document.getElementById('sugar');
var coffeeSize = document.getElementById('coffeeSize');
var priceLabel = document.getElementById('price');
var totalCostLabel = document.getElementById('displayTotal');
var coffeeQuantity = document.getElementById('quantity');
var orderList = document.getElementById('orderItems');
var price = 0.0;

function pageSetup()
{
  setWelcome();
  updateOrderList();
}

function setWelcome()
{
    //this just sets the welcome span in the index to show that the current user was correctly set
    var welcomeMessage = document.getElementById("welcome");
    welcomeMessage.innerHTML = "Welcome, " + session.get("currentUser").Name;
}

function getSelectedCoffee()
{
  var coffeeSelections = document.getElementsByName('toggle');
  for(i = 0; i < coffeeSelections.length; i++) { 
      if(coffeeSelections[i].checked)
        return coffeeSelections[i].value;
  }
}

function updatePrice()
{
  if(coffeeSize.value == "Regular")
    price = 4.5 * coffeeQuantity.value;
  else if(coffeeSize.value == "Small")
    price = 3.0 * coffeeQuantity.value;
  priceLabel.innerHTML = "$" + price;
}

function addCoffeeToCart()
{
  if(getSelectedCoffee() == null)
  {
    alert("Please select a coffee");
    return;
  }
  if(coffeeSize.value == "")
  {
    alert("Please select a size");
    return;
  }
  var additions = [];
  if(withMilk.checked)
    additions.push("milk");
  if(withSugar.checked)
    additions.push("sugar");

  // add the coffee to the order and save its id
  var coffeeId = order.addCoffee(getSelectedCoffee(), coffeeSize.value, price, additions, coffeeQuantity.value);
  //update total price
  totalCostLabel.innerHTML = "$" + order.getTotalPrice();
  updateOrderList();
}

function updateOrderList()
{
  var currentOrder = session.get('currentOrder');
  orderList.innerHTML = "";
  var i;
  for(i = 0; i < currentOrder.Items.length; i++)
  {
    var el = document.createElement("div");
    var button = document.createElement("button");
    el.className = "orderItem";
    var additions = "";
    if(currentOrder.Items[i].Additions.length > 1)
    {
      additions = " with " + currentOrder.Items[i].Additions[0] + " and " + currentOrder.Items[i].Additions[1];
    }
    else if(currentOrder.Items[i].Additions.length > 0)
    {
      additions = " with " + currentOrder.Items[i].Additions[0];
    }
    el.innerHTML = currentOrder.Items[i].Quantity +"x " + currentOrder.Items[i].Size + " " + currentOrder.Items[i].Type + additions;
    button.innerHTML = "X";
    button.id = currentOrder.Items[i].Id;
    button.addEventListener("click", function(){
      order.removeCoffeeById(this.id);
      updateOrderList();
      totalCostLabel.innerHTML = "$" + order.getTotalPrice();
    });
    el.appendChild(button);
    orderList.appendChild(el);
  }
}