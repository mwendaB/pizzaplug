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
   let name1 = $(".name option:selected").val();
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
  });


    $(".addPizza").click(function(){
      let name1 = $(".name option:selected").val();
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

        var newOrder = new Getpizza(name1, size1, crust1,topping1,total);

        $("#ordersmade").append('<tr><td id="pizzaname">'+newOrder.name +'</td><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
        console.log(newOrder);
        
    
      });
  
  
    $(document).ready(function(){
      $("#checkout").click(function(){ 
        $("#checkout").hide();
        $(".addPizza").hide();
        $(".deliver").slideDown(1100);
        $("#addedprice").slideDown(1100);
        console.log("Your total bills is sh."+checkoutTotal);
        $("#pizzatotal").append("Your bill is sh."+checkoutTotal);
      });

      $(".deliver").click(function(){
        $(".pizzatable").hide();
        $(".choise h2").hide();
        $(".delivery").slideDown(1100);
        $("#addedprice").hide();
        $("button.deliver").hide();
        $("#pizzatotal").hide();
        let deliceryamount= checkoutTotal+150;
        console.log("You will pay sh."+deliceryamount+" on delivery");
        $("#totalbill").append("Total amount is: "+deliceryamount);
      });
  
    });
  

    $(document).ready(function(){
      $("#final-order").click(function(event){
        event.preventDefault();
  
        $("#pizzatotal").hide();
        $(".delivery").hide();
        $("#final-order").hide();
        let deliceryamount= checkoutTotal+150;
        console.log("Final Bill is: "+deliceryamount);
        let person = $("#name").val();
        let phone = $("#phone").val();
        let location = $("#location").val();

        if ($("input#name").val() && $("input#phone").val() && $("input#location").val()!=""){
  
          $("#finallmessage").append(person+", Pizza Plug has recieved your order and it will be delivered to you at "+location+ ". you are required to pay sh. "+deliceryamount);
          $("#totalbill").hide();
          $("#finallmessage").slideDown(1500);
        }
        else {
          alert("Please fill in the details for delivery!");
          $(".delivery").show();
          $("button#final-order").show();
        }
      });
    });

    event.preventDefault();
  });