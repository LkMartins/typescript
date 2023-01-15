"use strict";
//function numerosSomar(a: number, b: number): number { 
//    return a + b;
//}
//console.log(numerosSomar(5, 1));
//const add = (a: number, b: number): number =>  a + b;
//console.log(numerosSomar(5, 5));
//const appPromo = (a: number, b: number, promo?: number): number => {
//   if(typeof promo != 'undefined'){
//        return (a + b) - promo;
//    }
//    return a + b
//}
// console.log(appPromo(5, 5, 5));
// console.log(appPromo(5, 5));
//const sellPromo = (price: number, percent: number): number => price - (price *(percent / 100));
//console.log(sellPromo(100, 25)); // Dessa meneira se eu não passar  o segundo paremetro da um erro
// assim sempre da um desconto de 5%, mesmo que não de valor no parametro depois
//const sellPromo2 = (price: number, percent: number = 5): number => price - (price *(percent / 100));
//console.log(sellPromo2(100));
//const calcTotal = (numbers: number[] ): number => {
//   let total = 0;
//    numbers.forEach(num => total += num)
//    return total;
//}
//console.log(calcTotal([1,2,3,4,5,6]));
// Abaixo de forma dinamica
const calcTotal = (...numbers) => {
    let total = 0;
    numbers.forEach(num => total += num);
    return total;
};
console.log(calcTotal(1, 3, 4));
