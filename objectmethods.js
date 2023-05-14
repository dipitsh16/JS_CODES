var car = {};
car.color = "red";
car.mileage = 98765;
console.log(car);
//add a method to the car object so that it can be called as car.turnkey()
car.turnKey = function() { 
    console.log("The engine is running"); 
}
//If the function is a property of an object, it is then referred to as a method.
car.lightsOn = function(){
    console.log("The lights are on")
}
console.log(car);
car.turnKey();
car.lightsOn();

//
var result = null;
console.log(result);
//
var str = "Hello";
str.match("jello");