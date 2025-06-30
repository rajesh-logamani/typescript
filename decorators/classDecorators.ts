function classDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
        newProperty = 'newly added property';
        hello = 'override';
    };
}

@classDecorator
class Greeter {
    property = 'property';
    hello: string;
    constructor(m: string) {
        this.hello = m;
    }
}

const greeter = new Greeter('world') as Greeter & { newProperty: string };
console.log(greeter.hello);
console.log(greeter.property);
console.log(greeter.newProperty);