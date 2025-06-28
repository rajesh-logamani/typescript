interface Exterior{
    color: string;
    make: string;
    model: string;
}

interface Interior{
    seats: number;
    doors: number;
}

interface Car extends Exterior, Interior{
    year: number;
    engine: string;
}

const myCar: Car = {
    color: 'red',
    make: 'Toyota',
    model: 'Camry',
    seats: 4,
    doors: 4,
    year: 2022,
    engine: 'V6',
}

interface Book{
    title: string;
    isbn: number;
    description: string;
    price: number;
}

const book: Book = {
    title: 'Book 1',
    isbn: 123456789,
    description: 'Description 1',
    price: 10.99,
}