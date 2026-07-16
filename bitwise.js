const num1 = 5;
const num2 = 3;

console.log(num1 & num2);
console.log(num1 | num2);
console.log(num1 ^ num2);
console.log(~num1);
console.log(num1 >> num2);
console.log(num1 << num2);

// & (AND): Returns 1 only if both corresponding bits are 1.
// | (OR): Returns 1 if at least one corresponding bit is 1.
// ^ (XOR): Returns 1 if the corresponding bits are different.
// ~ (NOT): Flips all bits (0 → 1 and 1 → 0); equivalent to -(n + 1).
// >> (Right Shift): Shifts bits to the right by the specified number of positions, preserving the sign bit.
// << (Left Shift): Shifts bits to the left by the specified number of positions, filling with zeros on the right.


let a = 5;
let b = 7;

console.log(`before swap : a=${a}, b=${b}`);

a = a^b;
b = a^b;
a = a^b;

console.log(`after swap  : a=${a}, b=${b}`)