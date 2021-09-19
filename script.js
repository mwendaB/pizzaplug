function getSizeCost() {
  var selectedSize = document.getElementById("size").value;
  return parseInt(selectedSize);
}

function getCrustCost() {
  var selectedCrust = document.getElementById("crust").value;
  return parseInt(selectedCrust);
}
function getNumber() {
  var selectedNumber = document.getElementById("numberofpizza").value;
  return parseInt(selectedNumber);
}
function mushrooms() {
  var mushroom = 0;
  var addMushroom = document.getElementById("toppingone");
  if (addMushroom.checked === true) {
      mushroom = 150;
  }
  return parseInt(mushroom);
}

function sausages() {
  var sausage = 0;
  var addsausage = document.getElementById("toppingone");
  if (addsausage.checked === true) {
      sausage = 140;
  }
  return parseInt(sausage);
}

function onions() {
  var onion = 0;
  var addonions = document.getElementById("toppingone");
  if (addonions.checked === true) {
      onion = 130;
  }
  return parseInt(onion);
}

function tikkaSaucee() {
  var tikkaSauce = 0;
  var addtikkaSauce = document.getElementById("toppingone");
  if (addtikkaSauce.checked === true) {
      tikkaSauce = 120;
  }
  return parseInt(tikkaSauce);
}


function mozarellaCheese() {
  var cheese = 0;
  var addmozarellaCheese = document.getElementById("toppingone");
  if (addmozarellaCheese.checked === true) {
      cheese = 110;
  }
  return parseInt(cheese);
}

function calctotalPrice() {
  event.preventDefault();
  var totalPrice = (getSizeCost() + getCrustCost() + mushrooms()) * (getNumber());
  
      console.log(totalPrice);
  alert("Your order of " + getNumber() + " pizza(`s) has been processed.Your total amount payable is " + totalPrice +"." )

};




$(document).ready(function() {
  $("#delivery").submit(function () {

      var name = $("input#name").val();
      var number = $("input#number").val();
      var location = $("input#location").val();

      alert("Hello " + name + "  . Your order has been successfuly received and will be delivered to " +  location + " within one hour .The delivery will cost ksh 180/= Thank you for chosing us as your plug.");
      
  });
  
});