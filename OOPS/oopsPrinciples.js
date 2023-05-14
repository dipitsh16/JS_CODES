//OOP Principles: Inheritance
/* Inheritance is one of the foundations of object-oriented programming.
There is a base class of a "thing".
There is one or more sub-classes of "things" that inherit the properties of the base class (sometimes also referred to as the "super-class")
There might be some other sub-sub-classes of "things" that inherit from those classes in point 2. */
class Animal { /* ...class code here... */ }
class Bird extends Animal { /* ...class code here... */ }
class Eagle extends Bird { /* ...class code here... */ }

//OOP Principles: Encapsulation
/* Encapsulation has to do with making a code implementation "hidden" from other users,
in the sense that they don't have to know how my code works in order to "consume" the code.
I don't really need to worry or even waste time thinking about how the toUpperCase() method works. 
All I want is to use it, since I know it's available to me. */
console.log("abc".toUpperCase());

//OOP Principles: Abstraction
/* Abstraction is all about writing code in a way that will make it more generalized.
The concepts of encapsulation and abstraction are often misunderstood because their differences can feel blurry.
It helps to think of it in the following terms:
An abstraction is about extracting the concept of what you're trying to do, rather than dealing with a specific manifestation of that concept. 
Encapsulation is about you not having access to, or not being concerned with, how some implementation works internally. */

//OOP Principles: Polymorphism
/* Polymorphism is a word derived from the Greek language meaning "multiple forms".
An alternative translation might be: "something that can take on many shapes".
1. A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. 
When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

2. Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object.
This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a 
bicycle is not the same as ringing the bell on a door. */

const bicycle = {
    bell: function() {
        return "Ring, ring! Watch out, please!"
    }
}
const door = {
    bell: function() {
        return "Ring, ring! Come here, please!"
    }
}

// console.log(bicycle.bell());
// console.log(door.bell());
//Now, to make this code truly polymorphic, I will add another function declaration:
function ringTheBell(thing) {
    console.log(thing.bell())
}
ringTheBell(bicycle);
ringTheBell(door);

//
console.log("abc".concat("def")); // 'abcdef'
console.log(["abc"].concat(["def"])); // ['abc', 'def']
console.log(["abc"] + ["def"]); // ["abcdef"]
/*concat() method is exhibiting polymorphic behavior since it behaves differently based on the 
context - in this case, based on what data types I give it. */
