"use strict";
function paramDecorator(target, propertyKey, parameterIndex) {
    console.log('Target: ', target);
    console.log('Key: ', propertyKey);
    console.log('Index: ', parameterIndex);
}
// class ParamDecoratorExample {
//     hello(@paramDecorator name: string) { }
// }
