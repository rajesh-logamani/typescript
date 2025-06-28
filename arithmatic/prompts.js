"use strict";
/*Prompts */
let promptNumber = parseInt(prompt("Enter a number") || '');
console.log(`The number is ${promptNumber}`);
console.log('Using For loop');
for (let number = 1; number <= promptNumber; number++) {
    if (number % 5 === 0)
        continue;
    console.log(number);
}
console.log('Using while');
let number = 1;
while (number <= promptNumber) {
    if (number % 5 !== 0)
        console.log(number);
    number++;
}
