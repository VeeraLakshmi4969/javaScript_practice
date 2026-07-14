function greet(name) {
    console.log(`Hello, ${name}`);
}

// JavaScript treats everything inside single ('') or double ("") quotes as normal text.

// Single Quotes (' '):
// It does not replace ${name} with the variable's value.

// Backticks (` `):
// If JavaScript sees ${...}, it evaluates the expression inside and inserts its value.

const person = { name: 'Nani' };

greet.apply(person, ['Alice']);

const numbers= [2,5,8,10,3];
const maxNumbers = Math.max.apply(null,numbers)
console.log('max numbers: ',maxNumbers);