"use strict";
function methodDecorator(target, propertyKey, descriptor) {
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
