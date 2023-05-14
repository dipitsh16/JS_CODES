/*some built-in methods.

In this reading, the focus is on three specific methods that exist on arrays:
 forEach 
 filter
 map*/
// const fruits = ['kiwi', 'mango', 'apple', 'pear']
// function appednIndex(fruit, index){
//     console.log(`${index}. ${fruit}`)
// }
// fruits.forEach(appednIndex);
// // the forEach() method accepts a function that will work on each array item. That function's first parameter is the current array item itself, and the second (optional) parameter is the index.
// // the function that the forEach() method needs to use is passed in directly into the method call, like this:
// const veggies = ['onion', 'garlic', 'potato'];
// veggies.forEach( function(veggie, index) {
//     console.log(`${index}. ${veggies}`);
// });
// //
// const nums = [0,10,20,30,40,50];
// nums.filter( function(num) {
//     return num > 20;
// })
// //
// /*map method. 

// This method is used to map each array item over to another array's item, based on whatever work is performed 
// inside the function that is passed-in to the map as a parameter. */
// [0,10,20,30,40,50].map( function(num) {
//     return num / 10
// })
//

//map() constructor
/*A map can feel very similar to an object in JS.
However, it doesn't have inheritance. No prototypes! This makes it useful as a data storage. */
let bestBoxers = new Map();
bestBoxers.set(1, "The Champion");
bestBoxers.set(2, "The Runner-up");
bestBoxers.set(3, "The third place");

console.log(bestBoxers);
console.log(bestBoxers.get(1)); // 'The Champion'

//set() constructor
/*The Set constructor can, for example, accept an array.
This means that we can use it to quickly filter an array for unique members.*/
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits);