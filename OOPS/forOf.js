/*it's important to know that a for of loop cannot work on an object directly, since an object is not iterable.*/
//eg
// const car = {
//     speed: 100,
//     color: "blue"
// }
// for(prop of car){
//     console.log(prop);
// }

// //Contrary to objects, arrays are iterable
// const colors = ['red','orange','yellow']
// for (var color of colors) {
//     console.log(color);
// }

//Luckily, you can use the fact that a for of loop can be run on arrays to loop over objects.
//built-in methods: Object.keys(), Object.values(), and Object.entries().

/*The Object.keys() method receives an object as its parameter. Remember, this object is the object you want to loop over. It's still too early to explain how you'll loop over the 
object itself; for now, focus on the returned array of properties when you call the Object.keys() method. */
const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2)); // ['speed','color']
/*when I run Object.keys() and pass it my car2 object, the returned value is an array of strings, where each 
string is a property key of the properties contained in my car2 object.*/
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3)); // [300, 'yellow']

//Object.entries(), which returns an array listing both the keys and the values.
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4));

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();

  /*Feel free to run the testBracketsDynamicAccess() function a few times, and you'll notice that sometimes the 
  value that gets output is 15, and sometimes it's orange, although I'm always accessing the drone[dynamicKey] key. Since the value of the dynamicKey is populated on the Math.random() invocation, sometimes that expression evaluates to drone["speed"], and other times that expression evaluates to drone["color"]. */

  //for in loops are unreliable, they iterate over the object nd also its prototype whereas the for of only iterates over the object created from the prototype
  