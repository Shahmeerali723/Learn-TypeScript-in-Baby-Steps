// 1. Syntax Errors:

let x: number = 10;  // Correct
let y: numer = 20;   // Syntax error: Should be 'number' instead of 'numer'

// Type Errors:

let name: string = "John";
name = 10;  // Type error: Cannot assign a number to a string variable

// Undefined or null Errorss:

let person: { name: string } = null;
console.log(person.name);  // Runtime error: Cannot read property 'name' of null

// Scope Errors:

if (true) {
    let myVar = 10;
}
console.log(myVar);  // Scope error: 'myVar' is not accessible here

// Function Errors:

function add(a: number, b: number): number {
    return a + b;
}
let result: string = add(5, 3);  // Type error: Result should be a number, not a string

// Unsed Variable Error

// Property Assisgnment Errors: