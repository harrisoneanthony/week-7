function pizzaOven(crustType, sauceType, cheese, toppings){
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheese = cheese;
    pizza.toppings = toppings;
    return pizza;
}

var p1 = pizzaOven("deep dish", "traditional",["mozzarella"],["pepperoni", "sausage"]);
console.log(p1);

var p2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(p2);

var p3 = pizzaOven("cauliflower", "sugar-free", "lactose-free", "rabbit food");
console.log(p3);

var p4 = pizzaOven("sourdough", "ranch dressing", ["mozzarella", "blue cheese"], ["buffalo chicken", "bacon"]);
console.log(p4);


var crustType = [
    "deep dish",
    "stuffed crust",
    "thin crust",
    "pretzel",
    "cauliflower"
]
var sauceType = [
    "marinara",
    "tomato basil",
    "white sauce",
    "bbq",
    "garlic"
]
var cheese = [
    "mozzarella",
    "feta",
    "goat cheese",
    "four cheese",
    "blue cheese"
]
var toppings = [
    "pepperoni",
    "buffalo chicken",
    "sausage",
    "meatball",
    "mushrooms"
]

function randomRange(max, min){
    return Math.floor(Math.random() * max - min) + min;
}

function randomIngredient(arr){
    var i =  Math.floor(Math.random()*arr.length);
    return arr[i];
}

function randomPizza(){
    var pizza = {};
    pizza.crustType = randomIngredient(crustType);
    pizza.sauceType = randomIngredient(sauceType);
    pizza.cheese = randomIngredient(cheese);
    pizza.toppings = [];
    for (var i = 0; i<randomRange(3, 0); i++){
        pizza.toppings.push(randomIngredient(toppings));
    }
    return pizza;
}
console.log(randomPizza());

"Hello World"
