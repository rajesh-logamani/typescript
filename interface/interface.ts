/**Product interfcae */
interface Product {
    id: number;
    name: string;
    description?: string; //optional
    price: number;
    display(): void;
}

const product: Product = {
    id: 1,
    name: 'Product 1',
    description: 'Description 1',
    price: 10.99,
    display() {
        console.log(this.name);
    },
};

const product2: Product = {
    id: 1,
    name: 'Product 1',
    price: 10.99,
    display: () => {
        console.log(product2.name);
    }
};

console.log(product,product2);