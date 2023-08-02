"use strict";
// TypeScript code using const and let for variable declaration
// let is block-scoped and cannot be redeclared
function makeCakeLet() {
    let cakeType = "Chocolate"; // let declaration
    if (true) {
        let cakeType = "Vanilla"; // Creating a new block-scoped variable
        console.log("Inside Block - Cake Type:", cakeType); // Output: Inside Block - Cake Type: Vanilla
    }
    console.log("Outside Block - Cake Type:", cakeType); // Output: Outside Block - Cake Type: Chocolate
}
makeCakeLet();
// TypeScript code using const for variable declaration
function makeCakeConst() {
    const cakeType = "Chocolate"; // const declaration
    // Uncomment the line below to see TypeScript in action
    // cakeType = "Vanilla"; // Error: Cannot assign to 'cakeType' because it is a constant.
    console.log("Cake Type:", cakeType); // Output: Cake Type: Chocolate
}
makeCakeConst();
