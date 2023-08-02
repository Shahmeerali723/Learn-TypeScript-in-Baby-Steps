"use strict";
// TypeScript code using var and let for variable declaration
// var is function-scoped and can be redeclared
function makeCakeVar() {
    var cakeType = "Chocolate"; // var declaration
    if (true) {
        var cakeType = "Vanilla"; // Re-declaring var inside the block
        console.log("Inside Block - Cake Type:", cakeType); // Output: Inside Block - Cake Type: Vanilla
    }
    console.log("Outside Block - Cake Type:", cakeType); // Output: Outside Block - Cake Type: Vanilla
}
makeCakeVar();
