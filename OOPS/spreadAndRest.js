//Using the spread operator, it's easy to concatenate arrays:
const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // outputs a single array

//It's also easy to join objects:
const flying = { wings: 2 }
const car = { wheels: 4 }
const flyingCar = {...flying, ...car}
console.log(flyingCar) // {wings: 2, wheels: 4}

//Here's how to use the spread operator to easily add one or more members to an existing array without using push():
let veggies = ['onion', 'parsley'];
veggies = [...veggies, 'carrot', 'beetroot'];
console.log(veggies);

//Convert a string to an array using the spread operator
const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']

//Here's how to copy an object into a completely separate object, using the spread operator.
const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201
console.log(car1.speed, car2.speed)

//You can copy an array into a completely separate array, also using the spread operator, like this:
const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2)

