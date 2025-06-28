"use strict";
const product = {
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    price: 10.99,
    display() {
        console.log(this.name);
    },
};
const product2 = {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    display: () => {
        console.log(product2.name);
    }
};
console.log(product, product2);
