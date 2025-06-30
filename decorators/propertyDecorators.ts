/**
 * Property decorator
 * @param target The prototype of the class
 * @param propertyKey The name of the property
 */

function propertyDecorator(target: any, context: ClassFieldDecoratorContext) {
    console.log('Property decorator');
    console.log(target);
    console.log(context.name);
}

class PropertyDecoratorExample {
    @propertyDecorator
    property!: string;
    hello: string;
    constructor(message: string) {
        this.hello = message;
    }
}

const propertyDecoratorExample = new PropertyDecoratorExample('world');
console.log(propertyDecoratorExample.hello);
console.log(propertyDecoratorExample.property);