"use strict";
const productArray = [];
productArray[0] = {
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    price: 10.99,
    display: () => {
        console.log(productArray[0].name);
    }
};
productArray[1] = {
    id: 2,
    name: 'Product 2',
    description: 'Description 2',
    price: 19.99,
    display: () => {
        console.log(productArray[1].name);
    }
};
