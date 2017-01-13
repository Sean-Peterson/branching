$(document).ready(function(){
  var animal = prompt("Would you like to learn about spiders, turtles or snakes?")

  if (animal === "spiders") {
      $(".spiders").show();
    }
    else if (animal === "snakes") {
      $(".snakes").show();
    }
    else if (animal === "turtles") {
      $(".turtles").show();
    }

});
