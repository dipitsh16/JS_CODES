//cookie business
//store mangager
var storeManager = {};
storeManager.rangeTilesPerTurn = 4;
storeManager.socialSkills = 50;
storeManager.streetSmarts = 50;
storeManager.health = 30;
storeManager.specialAbility = "finding business opportunities";
storeManager.greeting = "Let's make some money";

var assistantManager = {
    movement: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40
}

storeManager.nextAchievement = "open a new store";
assistantManager.nextAchievement = "get promoted";

//
//square brackets
var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
//with bracket notation, can add space characters inside property names
car["number of doors"] = 4;
console.log(car);

//useful thing that bracket notation has but is not available in the dot notation: It can evaluate expressions
var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}

//arrays are objects
var fruits = [];
//to add
fruits.push("apple");
fruits.push("pear");
console.log(fruits);
//to remove
fruits.pop("apple")
console.log(fruits);

//
function arrayBuilder(one, two, three){
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
var simpleArr = arrayBuilder("apple", "pear", "plum");
console.log(simpleArr);