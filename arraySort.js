let num = [46,878,356,347,875,345,123];

num.sort((a,b) => a-b);

console.log("sorted numbers: ",num);


let fruits = ["aplple","banana","goa","pineapple","kiwi","carrot"]
fruits.sort();
console.log(fruits)

let people = [{name: "nani",age:20},
    {name: "mahadev",age:24},
    {name: "nagur",age:30}
]
people.sort((a,b)=>a.age-b.age);
console.log(people)
// Here,
// (a,b)=>a-b
// is called the compare function.
// JavaScript repeatedly picks two elements and sends them into the function.
// Suppose it picks
// 46
// 878
// Then
// a = 46
// b = 878
// Return value
// 46-878 = -832
// Negative means
// 46 comes before 878