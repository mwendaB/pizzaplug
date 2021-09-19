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

