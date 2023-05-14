/* JavaScript has a number of built-in object types, such as:
 Math, Date, Object, Function, Boolean, Symbol, Array, Map, Set, Promise, JSON, etc.
These objects are sometimes referred to as "native objects".
Constructor functions, commonly referred to as just "constructors", are special functions that allow us to build instances of these built-in native
objects. All the constructors are capitalized. */
function Icecream(flavor) {
    this.flavor = flavor;
    this.meltIt = function() {
        console.log(`The ${this.flavor} icecream has melted`);
    }
}

let kiwiIcecream = new Icecream("kiwi");
let appleIcecream = new Icecream("apple");
kiwiIcecream;
appleIcecream;

/*due to the fact that each object in JavaScript is unique, you can't compare a String object with another String object, even when their values 
are identical.

In other words, if you compare new String('plum') === new String('plum'), you'll get back false, while "plum" === "plum" returns true. You're 
getting the false when comparing objects because it is not the values that you pass to the constructor that are being compared, but rather the 
memory location where objects are saved. */

