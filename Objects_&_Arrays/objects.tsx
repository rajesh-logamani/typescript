// type User = {
//     name: string;
//     age: number;
// };

// const user:User = {
//     name: 'Rajesh',
//     age: 20
// }

// console.log(`user object`,user);

// for(const key in user){
//     const typedKey = key as keyof User;
//     console.log({key});
//     console.log(`value`, user[typedKey]);
// }


type Employee = {
    id: number,
    name: string,
    salary: number
}

const employee : Employee = {
    id:123,
    name: 'Rajesh',
    salary: 10000
}

for(const key in employee){
    console.log(key);
    const typedKey = key as keyof Employee;
    console.log(`value of ${key} is ${employee[typedKey]}`);
}

let {id, name : employeeName, salary} = employee;
console.log(id,employeeName,salary);