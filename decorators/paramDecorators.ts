function paramDecorator(target: any, propertyKey: string, parameterIndex: number) {
    console.log('Target: ', target);
    console.log('Key: ', propertyKey);
    console.log('Index: ', parameterIndex);
}

// class ParamDecoratorExample {
//     hello(@paramDecorator name: string) { }
// }