var price , crust_price, topping_price ;
let total = 0;
function Getpizza( name,size,crust,topping, total ){
  this.name = name;
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}



$(document).ready(function(){
  $("button.order").click(function(event){
   let pname = $(".name option:selected").val();
   let size1 = $("#size option:selected").val();
   let crust1 = $("#crust option:selected").val();
   let topping1 = [];
   $.each($("input[name='toppings']:checked"), function(){            
       topping1.push($(this).val());
   });
   console.log(topping1.join(", "));
   switch(size1){
    case "0":
      price =0;
    break;
    case "large":
       price = 1500;
       console.log(price);
     break;
     case "medium":
       price = 1000;
       console.log("The price is "+price);
     break;
     case "small":
       price = 800;
       console.log(price);
     default:
       console.log("error"); 
   }
   switch(crust1){
      case "0":
        crust_price = 0;
      break;
      case "Crispy":
        crust_price = 200;
      break;
      case "Stuffed":
        crust_price = 250;
      break;
      case "Gluten-free":
        crust_price = 180;
      break;
      default:
        console.log("No price"); 
    }
    let topping_value = topping1.length*150;
    console.log("toppins value" + topping_value);

    if((size1 == "0") && (crust1 == "0")){
      console.log("nothing selected");
      $("button.order").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please select pizza size and crust"); 
    }
    else{
      $("button.order").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }

    total = price + crust_price + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;

    $("#pizzaname").html($(".name option:selected").val());
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(topping1.join(", "));
    $("#totals").html(total);

    $("button.addPizza").click(function(){
      let pname = $(".name option:selected").val();
      let size1 = $("#size option:selected").val();
      let crust1 = $("#crust option:selected").val();
      let topping1 = [];
      $.each($("input[name='toppings']:checked"), function(){            
          topping1.push($(this).val());
      });
      console.log(topping1.join(", "));
      switch(size1){
        case "0":
          price =0;
        break;
        case "large":
           price = 1500;
           console.log(price);
         break;
         case "medium":
           price = 1000;
           console.log("The price is "+ price);
         break;
         case "small":
           price = 800;
           console.log(price);
         default:
           console.log("error"); 
       }
       switch(crust1){
          case "0":
            crust_price = 0;
          break;
          case "Crispy":
            crust_price = 200;
          break;
          case "Stuffed":
            crust_price = 150;
          break;
          case "Gluten-free":
            crust_price = 180;
          break;
          default:
            console.log("No price"); 
        }
        let topping_value = topping1.length*150;
        console.log("toppins value" + topping_value);
        total = price + crust_price + topping_value;
        console.log(total);

        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);

