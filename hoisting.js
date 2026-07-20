// var: Old way to declare variables (can be redeclared and updated).
// let: Modern way for variables whose values can change.
// const: Used for values that should not change after assignment.

var myVar;                  // Declare variable (hoisted)

console.log(myVar);         // undefined (declared but not assigned)

myVar = 43;                 // Assign value

console.log(myVar);         // Output: 43

sayHello();
function sayHello(){
    console.log("hello");
}

if(true){
    let blockVar="I am block scoped";
    console.log(blockVar);
    
}

// var → Changeable, can be redeclared (old way)
// let → Changeable, cannot be redeclared (preferred)
// const → Cannot be reassigned (constant value)