let fruits = ['apple','banana','orange'];

fruits.forEach((fruit,index)=>{
    console.log(`fruit ${index+1}: ${fruit}`);
})
// -----------------------------------------------------------

let numbers = [1,2,4,5,6];
let squares = numbers.map((num) => num*num)
console.log("squares : ",squares)

let ages = [22,45,56,24,3,56]

let adults = ages.filter((age)=> age>=18);
console.log("Adults: ", adults)

// -----------------------------------------------------------

let marks = [26,33,26,7,25,69,77,99]

let highest = marks.find((mark)=> mark>80);

console.log ("highest score: ", highest)