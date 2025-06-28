"use strict";
// implement Book as class
class BookClass {
    constructor(title, isbn, description, price) {
        this.title = title;
        this.isbn = isbn;
        this.description = description;
        this.price = price;
    }
}
const book = new BookClass('Book 1', 123456789, 'Description 1', 10.99);
