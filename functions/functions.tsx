console.log(`***********Function************`);

function hello():string {
    return 'hello';
}

console.log(hello());


console.log(`***********Parameterized Function************`);
function helloName(name : string):string {
    return 'hello ' + name;
}

console.log(helloName('Rajesh'));

console.log(`***********Optional Parameterized Function************`);
function helloNameOptional(name? : string):string {
    return 'hello ' + name;
}

console.log(helloNameOptional('Rajesh'));
console.log(helloNameOptional());

console.log(`***********Default Parameterized Function************`);
function helloNameDefault(name : string = 'Rajesh'):string {
    return 'hello ' + name;
}

console.log(helloNameDefault('Rajesh Logamani'));
console.log(helloNameDefault());


console.log(`***********Function as parameter********************`);

function add(a : number, b : number):number {
    return a + b;
}

function sub(a : number, b : number):number {
    return a - b;
}

function multiply(a : number, b : number):number {
    return a * b;
}

function divide(a : number, b : number):number {
    return a / b;
}

/**
 * Calculate performs a mathematical operation on the given two numbers with the given operation.
 * @param {number} num1 - The first number to perform the operation on.
 * @param {number} num2 - The second number to perform the operation on.
 * @param {(a : number, b : number) => number} operation - The operation to perform. 
 * @returns {number} The result of the given operation.
 */
function calculate(num1 : number, num2 : number, operation : (a : number, b : number) => number):number {
    return operation(num1, num2);
}

console.log(calculate(10, 20, add));
console.log(calculate(10, 20, sub));
console.log(calculate(10, 20, multiply));
console.log(calculate(10, 20, divide));


console.log(`***********Function overloading********************`);

function doubleMe(a : number) : number;
function doubleMe(a : string) : string;
function doubleMe(a : any){
    if(typeof a === 'string'){
        return a + ' ' + a;
    }
    return a * 2;
}

console.log(doubleMe(10));
console.log(doubleMe('Rajesh'));


console.log(`*******************Calculator********************`);
// let maths = parseInt(prompt('Enter your Maths marks') || '0');
// let physics = parseInt(prompt('Enter your Physics marks') || '0');
// let chemistry = parseInt(prompt('Enter your Chemistry marks') || '0');

// console.log(`Your total marks is ${maths + physics + chemistry}`);
// let average = (maths + physics + chemistry) / 3;
// console.log(`Your average is ${average}`);

// let grade = average < 70 ? 'C' : average <90 ? 'B' : 'A';
// console.log(`Your grade is ${grade}`);

console.log(`*******************Arrow function to find is prime********************`);

const isPrime = (n:number):boolean => {
    if(n<=1) return false;

    for(let i=2; i<=Math.sqrt(n); i++){
        if(n%i === 0) return true;
    }
    return false;
}

console.log(`4 => ` + isPrime(4));
console.log(`5 => ` + isPrime(5));
console.log(`6 => ` + isPrime(6));
console.log(`7 => ` + isPrime(7));
console.log(`8 => ` + isPrime(8));
console.log(`9 => ` + isPrime(9));
console.log(`10 => ` + isPrime(10));