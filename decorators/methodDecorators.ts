function methodDecorator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    console.log('Method Decorator');
    console.log(target);
    console.log(propertyKey);
    console.log(descriptor);
}

// class MethodDecoratorExample {
//     @methodDecorator
//     hello() { }
// }

// const example = new MethodDecoratorExample();
// example.hello();