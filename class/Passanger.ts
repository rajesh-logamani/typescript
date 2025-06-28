class Passanger{
    firstName:string
    lastName:string;
    age:number;
    constructor(firstName:string,lastName:string,age:number){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    fullName(){
        return `${this.firstName} ${this.lastName}`;
    }

    display(){
        console.log(`${this.fullName()} is ${this.age} years old`);
    }
}

const passanger=new Passanger('Rajesh','Kumar',20);
console.log(passanger.fullName());
passanger.display();

for(const key in Object.keys(passanger)){
    // Skip if the property is a function
    if (typeof (passanger as any)[key] === "function") continue;
    console.log(key);
}