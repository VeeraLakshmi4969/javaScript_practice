// Function that takes one parameter (name) and prints a greeting.
function greet(name) {
    console.log(`Hello, ${name}`); // Backticks allow variable interpolation using ${}.
}

// JavaScript treats text inside single ('') or double ("") quotes as plain text.
// Example:
// console.log('Hello, ${name}'); // Prints: Hello, ${name}

// Backticks (` `) create template literals.
// They replace ${...} with the value of the variable or expression.
// Example:
// console.log(`Hello, ${name}`); // Prints: Hello, Alice

const person = { name: 'Nani' };

// apply() calls a function immediately.
// Syntax: function.apply(thisValue, [arguments])

// thisValue -> Value of 'this' inside the function.
// [arguments] -> Arguments passed as an array.

// Here, greet() doesn't use 'this', so passing 'person' has no effect.
// Only 'Alice' is passed as the function argument.
greet.apply(person, ['Alice']); // Output: Hello, Alice

const numbers = [2, 5, 8, 10, 3];

// Math.max() expects separate arguments.
// Example: Math.max(2, 5, 8, 10, 3)

// apply() spreads the array into individual arguments.
// null is passed because Math.max() does not use 'this'.
const maxNumbers = Math.max.apply(null, numbers);

// Prints the largest number in the array.
console.log('Max number:', maxNumbers); // Output: 10