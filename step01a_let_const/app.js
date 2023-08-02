"use strict";
// TypeScript code using const and let for variable declaration
// let is block-scoped and cannot be redeclared
let cakeType = "Vanilla"; // Creating a new block-scoped variable
console.log("Inside Block - Cake Type:", cakeType); // Output:  Cake Type: Vanilla
// Uncomment the line below to see TypeScript in action
// let cakeType = "Chocolate"; // let declaration
// console.log("Outside Block - Cake Type:", cakeType); // cannot redeclare the 'caketype' block socped variable
// TypeScript code using const for variable declaration
const cakeType1 = "Chocolate"; // const declaration
// Uncomment the line below to see TypeScript in action
// cakeType1 = "Vanilla"; // Error: Cannot assign to 'cakeType' because it is a constant.
console.log("Cake Type:", cakeType1); // Output: Cake Type: Chocolate
