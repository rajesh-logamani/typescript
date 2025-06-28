interface Add{
    (a: number, b: number): number;
}

const add: Add = (a , b) => a + b; //Syntax with interface
const sub = (a: number, b: number): number => a - b; // Syntax without interface


console.log(add(10, 20));
console.log(sub(10, 20));