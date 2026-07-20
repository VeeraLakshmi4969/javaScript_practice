// ---------------------- Example 1 ----------------------

// Regular function using the 'function' keyword.
const regularFunction = function(param) {
    return param * 2;   // Returns double the value.
};

// Arrow function using => (same functionality).
const arrowFunction = (param) => {
    return param * 2;   // Returns double the value.
};
// ---------------------- Example 2 ----------------------

// Regular function with explicit return.
const regularFunction = function(param) {
    return param * 2;
};

// Arrow function with implicit return.
// No {} and no 'return' needed for a single expression.
const arrowFunction = (param) => param * 2;

// ---------------------- Example 3 ----------------------

// Array of numbers.
const numbers = [1, 2, 3, 4, 5];

// map() -> Creates a new array by applying a function to each element.
const squareNum = numbers.map(function(number) {
    return number ** 2;     // Returns the square of each number.
});

// Same map() operation using an arrow function.
const arrowSquareNumbers = numbers.map((number) => number ** 2);