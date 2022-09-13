function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var s1 = pizzaOven("deep dish", "traditional",["mozzarella"],["pepperoni", "sausage"]);
console.log(s1);

var s2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(s2);

var s3 = pizzaOven("cauliflower", "sugar-free", "lactose-free", "rabbit food");
console.log(s3);

var s4 = pizzaOven("sourdough", "ranch dressing", ["mozzarella", "blue cheese"], ["buffalo chicken", "bacon"]);
console.log(s4);

