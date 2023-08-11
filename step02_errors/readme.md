# Common Errors steps:

## 1. Syntax Errors:

Syntax errors occur when your code violates the rules of the TypeScript syntax. This could be due to incorrect spelling, missing or misplaced punctuation, or using incorrect keywords.

## 2. Type Errors:

Type errors occur when you use a value of the wrong data type where it's not allowed. TypeScript is strict about data types, so using the wrong type can result in a type error.

Example:

typescript
Copy code
let name: string = "John";
name = 10;  // Type error: Cannot assign a number to a string variable
3. Undefined or Null Errors:
These errors occur when you try to access properties or methods on variables that are null or undefined.

Example:

typescript
Copy code
let person: { name: string } = null;
console.log(person.name);  // Runtime error: Cannot read property 'name' of null
4. Scope Errors:
Scope errors occur when you try to access a variable outside of its scope. TypeScript enforces block scope, so variables declared within a block are only accessible within that block.

Example:

typescript
Copy code
if (true) {
    let myVar = 10;
}
console.log(myVar);  // Scope error: 'myVar' is not accessible here
5. Function Errors:
Errors related to functions can include incorrect argument types, missing return statements in functions that are expected to return a value, etc.

Example:

typescript
Copy code
function add(a: number, b: number): number {
    return a + b;
}
let result: string = add(5, 3);  // Type error: Result should be a number, not a string
6. Unused Variables:
TypeScript may give you warnings about variables that you've declared but haven't used. While not an error, this can help you catch potential issues.

Example:

typescript
Copy code
let unusedVariable: number = 5;  // TypeScript warning: Variable 'unusedVariable' is declared but its value is never read
7. Property Assignment Errors:
Errors can also occur if you try to assign a value to a property that doesn't exist on an object.

Example:

typescript
Copy code
let person: { name: string } = { name: "Alice" };
person.age = 30;  // Type error: Property 'age' does not exist on type '{ name: string }'
Understanding and addressing these common errors will help you write more reliable TypeScript code. Remember that TypeScript's type checking can catch many of these errors during development, which can save you a lot of debugging time later on.


1. Syntax Errors:
Think of syntax errors like writing a sentence with incorrect grammar or spelling. Just as a sentence needs proper structure to make sense, your TypeScript code needs the correct syntax to run properly.

2. Type Errors:
Imagine trying to fit a square peg into a round hole. Type errors occur when you try to use the wrong type of data in a situation that expects a specific type. It's like using the wrong tool for a job.

3. Undefined or Null Errors:
Consider a situation where you're looking for your friend's phone number, but you realize you don't have their contact. Trying to use their nonexistent number is like accessing properties of null or undefined variables.

4. Scope Errors:
Think of scope errors like being able to see things only within certain rooms in a house. Variables declared inside a room (block) are only accessible within that room. Trying to use them outside is like trying to use a kitchen appliance in the living room.

5. Function Errors:
Imagine baking a cake but not following the recipe correctly. Function errors can be like using the wrong ingredients or mixing steps up. If you expect a cake but get a pie, there's an issue.

6. Unused Variables:
Think of declaring variables as putting ingredients on a shopping list but not using them in your recipes. Just as unused ingredients can clutter your kitchen, unused variables can clutter your code.

7. Property Assignment Errors:
Imagine you're trying to write someone's address on an envelope, but you accidentally add information that doesn't belong to them. Property assignment errors are like trying to assign properties to an object that doesn't have those properties.





