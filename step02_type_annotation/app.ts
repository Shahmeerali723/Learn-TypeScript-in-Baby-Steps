
// Variables:

let itemCount: number = 10;
itemCount = 15; // Valid - Changing the value of a mutable variable

const maxItems: number = 100;
// maxItems = 120; // Invalid - Attempting to change the value of a constant variable

// Data Types:

let age: number = 25;
let price: number = 9.99; // data type is number

let _name: string = "Alice";
let message: string = 'Hello, TypeScript!'; //data type is string

let isStudent: boolean = true;
let isLoggedIn: boolean = false; //data type is boolean

let numbers: number[] = [1, 2, 3, 4, 5];
let fruits: string[] = ["apple", "banana", "orange"]; //data type is array

let person: [string, number] = ["Alice", 30]; //data type is tuple

enum Color {
    Red,
    Green,
    Blue,
  }
  let favoriteColor: Color = Color.Blue; //data type is enum

let randomValue: any = "Hello, TypeScript!";
randomValue = 42; //data type is any

function greet(name: string): void {
  console.log(`Hello, ${name}!`);
}//data type is void that return nothing course on the void and see 
  
let emptyValue: null = null; // Explicitly assigning null
let notDefined: undefined = undefined;	// This is implicitly undefined

let persons: object = { name: "Bob", age: 30 };//data type is object

// Explicit-Typing

let name: string = "John";  // Explicitly typing 'name' as a string
name = 10;  // Type error: Cannot assign a number to a string variable

// Implicit Typing

let person = null;  // 'person' is implicitly typed as 'any' because of the assignment
console.log(person.name);  // Runtime error: Cannot read property 'name' of null


  





