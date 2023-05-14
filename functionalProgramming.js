//functional programming

// var currencyOne = 100;
// var currencyTwo = 0;
// var exchangeRate = 1.2;
// function convertCurrency(amount, rate){
//     return amount * rate;
// }
// currencyTwo = convertCurrency(currencyOne, exchangeRate);
// console.log(currencyTwo);

//

// function consoleLog(val) {
//     console.log(val)
//     return val
// }
// consoleLog('Hello');

/*the value is output in the console, but it's also returned.
Why is this useful?
It's useful because I can use return values from one function inside another function.*/

function doubleIt(num) {
    return num * 2
}
function objectMaker(val) {
    return {
        prop: val
    }
}
console.log(objectMaker(doubleIt(100)));
/*It means that by JavaScript allowing me to use the return keyword as described above, I can have multiple function calls, returning data and manipulating values, based on whatever coding challenge I have in front of me.
Being able to return custom values is one of the foundations that makes functional programming possible.*/
