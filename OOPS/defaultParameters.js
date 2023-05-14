function noDefaultParams(number) {
    console.log('Result:', number * number)
}
noDefaultParams(); // Result: NaN
/*JavaScript, due to its dynamic nature, doesn't throw an error, but it does return a non-sensical output.

Consider now, the following improvement, using default parameters: */
function withDefaultParams(number = 10) {
    console.log('Result:', number * number)
}

//consider following example
class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var fail = new NoDefaultParams(1,2,3,false);
console.log(fail.calculate()); // 'The value of bool1 is incorrect'

//to improve this
class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
// var better = new WithDefaultParams();
var better = new WithDefaultParams(2,2,4,"Answer:",true);
console.log(better.calculate()); // Result: 6