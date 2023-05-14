// var purchase1 = {
//     shoes: 100,
//     stateTax: 1.2,
//     totalPrice: function(){
//         var calculation = this.shoes * this.stateTax;
//         console.log('Total price: ', calculation);
//     }
// }
// purchase1.totalPrice();
// //
// var purchase2 = {
//     shoes: 50,
//     stateTax: 1.2,
//     totalPrice: function(){
//         var calculation = this.shoes * this.stateTax;
//         console.log('Total price: ', calculation);
//     }
// }
// purchase2.totalPrice();

class Purchase{
    constructor(shoes, stateTax){
        this.shoes = shoes;
        this.stateTax = stateTax;
    }
    totalPrice() {
        var calculation = this.shoes * this.stateTax;
        console.log('Total price: ', calculation);
    }
}
const purchase1 = new Purchase(120, 1.2);
console.log(purchase1.totalPrice());