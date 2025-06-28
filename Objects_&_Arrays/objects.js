"use strict";
// type User = {
//     name: string;
//     age: number;
// };
const employee = {
    id: 123,
    name: 'Rajesh',
    salary: 10000
};
for (const key in employee) {
    console.log(key);
    const typedKey = key;
    console.log(`value of ${key} is ${employee[typedKey]}`);
}
let { id, name: employeeName, salary } = employee;
console.log(id, employeeName, salary);
