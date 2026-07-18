// let nums = [1,2,4,5,6];
// nums.forEach(function(num){
//     console.log(num*2);

// });
// // ----------------------------------------------------

// let numbers = [1,2,3,4,5,6,7]
// let evenNumbers = numbers.filter(function(number){
//     return number % 2==0;
// });
// console.log(evenNumbers)
// // ----------------------------------------------------


let nums = [2,3,4,6,5];
let sum = nums.reduce(function(add, number){
    return add+number
},0);
console.log(sum);

// --------------------------------------------------------

let numbers = [2,5,6,3,6,3,9];

let double = numbers.map(function(number){
    return number*2;
})
console.log(double)