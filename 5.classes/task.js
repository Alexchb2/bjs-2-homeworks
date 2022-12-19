class PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state = 100, type = null){
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }
    fix(){
        return this.state *= 1.5;
    }
    set state(state){
        if(state < 0){
            this._state = 0;
        } else if(state > 100) {
            this._state = 100;
        } else {
            this._state = state;
        }
    }
    get state(){
        return this._state;
    }
}
class Magazine extends PrintEditionItem{
    constructor(name, releaseDate, pagesCount, state){
        super(name, releaseDate, pagesCount, state);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state){
        super(name, releaseDate, pagesCount, state);
        this.author = author; 
        this.type = "book";
    }
}

class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state){
        super(author, name, releaseDate, pagesCount, state);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state){
        super(author, name, releaseDate, pagesCount, state, author);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount, state) {
        super(author, name, releaseDate, pagesCount, state);
        this.type = "detective";
    }
}

class Library {
    constructor(name, books = []) {
        this.name = name;
        this.books = books;
    }

    addBook(book){
        if (book._state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        let book = this.books.find((book) => book[type] === value);
        return book || null;
    }

    giveBookByName(bookName) {
        const book = this.findBookBy('name', bookName);
        const bookIndex = this.books.indexOf(book);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            return book;
        }
        return null;
    }
}