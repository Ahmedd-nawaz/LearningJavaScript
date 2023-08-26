// Expressions and operators
// console.log("Operatoprs in JS")
// let a = 10;
// let b = 4;
// console.log(a + b)
// console.log(a - b)
// console.log(a / b)
// console.log(a * b)
// console.log(a ** b) // The exponentiation ( ** ) operator, a = 45 multiplies into b = 4 (45 multiplies 4 times in this expression)
// console.log(a % b) // Remandor operator
// console.log(++a)
// console.log(a--)

// Assignment operatous
// a += 8
// console.log(a)

// Comaprision operatous
// let comp = 6;
// let comp2 = "7";
// console.log(comp == comp2)
// console.log(comp != comp2)
// console.log(comp === comp2)
// console.log(comp !== comp2)
// console.log(comp > comp2)

// Logical operators

// let x = 5;
// let y = 6;

// console.log(x < y && x == 5)
// console.log(x > y || x == 5)
// console.log(!false)


// Conditional Expressions
let a = prompt("What's your age")
console.log(a)
a = Number.parseInt(a) // Converting the stirng into number
console.log(typeof (a))
if (a > 0) {
    alert("This is a valid age")
}
else {
    alert("This is not a valid age");
}

if (a < 0) {
    alert("This is a invalid age")
}
else if (a < 9) {
    alert("You are a kid");
}
else if (a < 18 && a >= 9) {
    alert("You are a kid you can think of driving after 18");
}
else {
    alert("You can drive")
}
// console.log("done")

// Switch Statement

// var value = 'Papayas';
// switch (value) {
//   case 'Oranges':
//     console.log('Oranges are $0.59 a pound.');
//     break;
//   case 'Mangoes':
//   case 'Papayas':
//     console.log('Mangoes and papayas are $2.79 a pound.');
//     // Expected output: "Mangoes and papayas are $2.79 a pound."
//     break;
//   default:
//     console.log(`Sorry, we are out of ${value}.`);
// }


// Ternary Operators
console.log("You can", (a < 18 ? "Not drive" : "Drive"))