interface Book{
    title: string;
    isbn: number;
    description: string;
    price: number;
}

// implement Book as class
class BookClass implements Book{
    title: string;
    isbn: number;
    description: string;
    price: number;

    constructor(title: string, isbn: number, description: string, price: number){
        this.title = title;
        this.isbn = isbn;
        this.description = description;
        this.price = price;
    }
}

const book = new BookClass('Book 1', 123456789, 'Description 1', 10.99);