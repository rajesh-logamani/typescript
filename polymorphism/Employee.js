"use strict";
class Employee {
    constructor(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    display() {
        console.log('Employee Details ' + this.id + ' ' + this.name + ' ' + this.salary);
    }
}
class Manager extends Employee {
    constructor(id, name, salary, department) {
        super(id, name, salary);
        this.department = department;
    }
    display() {
        super.display();
        console.log('Manager Details ' + this.id + ' ' + this.name + ' ' + this.salary + ' ' + this.department);
    }
}
class Developer extends Employee {
    constructor(id, name, salary, language) {
        super(id, name, salary);
        this.language = language;
    }
    display() {
        super.display();
        console.log('Developer Details ' + this.id + ' ' + this.name + ' ' + this.salary + ' ' + this.language);
    }
}
class Tester extends Employee {
    constructor(id, name, salary, testerType) {
        super(id, name, salary);
        this.testerType = testerType;
    }
    display() {
        super.display();
        console.log('Tester Details ' + this.id + ' ' + this.name + ' ' + this.salary + ' ' + this.testerType);
    }
}
let employee = new Employee(123, 'Rajesh Employee', 10000);
let manager = new Manager(123, 'Rajesh Manager', 10000, 'IT');
let developer = new Developer(123, 'Rajesh Dev', 10000, 'Java');
let tester = new Tester(123, 'Rajesh QA', 10000, 'Manual');
// employee.display();
// manager.display();
// developer.display();
// tester.display();
const employees = [employee, manager, developer, tester];
for (const emp of employees) {
    emp.display();
}
