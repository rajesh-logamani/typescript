"use strict";
/**Variables */
console.log('***********Variables************');
let x = 5;
let y = "Hello";
let z = true;
console.log(x, y, z);
console.log('***********Objects************');
let obj = {
    name: "John",
    age: 30,
};
console.log(obj);
console.log('***********Arrays************');
let arr = [1, 2, 3, 4, 5];
console.log(arr);
console.log('***********Mixed Arrays************');
let mixedArr = [{ name: "John", age: 30 }, 1, "two", 3, "four", { name: "John", age: 30 }];
console.log(mixedArr);
console.log('***********Tuple************');
let tuple = [1, "one"];
console.log(tuple);
console.log('***********Any************');
let anyVar = "I can be anything";
console.log(anyVar);
console.log("typeof any", typeof anyVar);
anyVar = 20;
console.log("typeof any", typeof anyVar, typeof anyVar === 'number');
console.log('***********Unknown************');
let unknownVar = "I can be anything, but I need to be checked before use";
console.log(unknownVar, ', typeofunknown - ', typeof unknownVar, typeof unknownVar === 'string');
unknownVar = null;
console.log(unknownVar, ', typeofunknown - ', typeof unknownVar);
unknownVar = 20;
console.log(unknownVar, ', typeofunknown - ', typeof unknownVar);
let u = 5;
// u = "hello";
// u.toUpperCase(); // Error: Object is of type 'unknown'
if (typeof u === "string") {
    u = u.toUpperCase(); // OK
}
console.log(u, typeof u);
/**
 * Diff Between unknown and any
 * Both allows assigning any type of values
 * any:- does not throw compilation error while storing number and trying to convert to uppercase.
 * unknown:- requires explicit type check before performing any action on the variable.
 */
console.log('***********Null************');
let nullVar = null;
// nullVar = 120; 
/**
 * Assigning values to null type will throw an error.
 * null type will be useful in union types
 */
console.log(nullVar);
console.log('***********undefined************');
let undefinedVar = undefined;
console.log(undefinedVar);
// undefinedVar = 120;
/**
 * Assigning values to undefinedVar type will throw an error.
 * undefinedVar type will be useful in union types
 */
console.log('***********Symbol************');
let symbolVar = Symbol("unique");
console.log(symbolVar);
console.log('***********Bigint************');
let bigintVar = 12345678901234567890n;
console.log(bigintVar);
// Enum
console.log('***********Enum************');
var Color;
(function (Color) {
    Color["Red"] = "RED";
    Color["Green"] = "GREEN";
    Color["Blue"] = "BLUE";
})(Color || (Color = {}));
console.log(Color.Red, Color.Green, Color.Blue);
/**
 * RECAP:
 * - `number`: e.g., `let x: number = 5;`
 * - `string`: e.g., `let y: string = "Hello";`
 * - `any`: e.g., `let anyVar: any = "I can be anything";`
 * - `boolean`: e.g., `let z: boolean = true;`
 * - `object`: e.g., `let obj: { name: string; age: number } = { name: "John", age: 30 };`
 * - `arrays`: e.g., `let arr: number[] = [1, 2, 3, 4, 5];`
 * - `mixed arrays`: e.g., `let mixedArr: (number | string | { name: string; age: number })[] = [{ name: "John", age: 30 }, 1, "two"];`
 * - `tuple`: e.g., `let tuple: [number, string] = [1, "one"];`
 * - `multiple tuple`: e.g., `let tuples: [number, string][] = [[1, "one"], [2, "two"]];`
 * - `unknown`: e.g., `let u: unknown = 5;`
 * - `null`: e.g., `let nullVar: null = null;`
 * - `undefined`: e.g., `let undefinedVar: undefined = undefined;`
 * - `Symbol`: e.g., `let symbolVar: symbol = Symbol("unique");`
 * - `bigint`: e.g., `let bigintVar: bigint = 12345678901234567890n;`
 * - `enum`: e.g., `enum Color { Red = "RED", Green = "GREEN", Blue = "BLUE" };`
 */ 
