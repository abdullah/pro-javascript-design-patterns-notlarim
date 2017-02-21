/**
 * Bu örnekte isbn kodu açıktadır, başka bir programcı veya bu kütüphaneyi
 * kullanacak user direkt olarak isbn'e erişebilir erişebildiği gibi
 * değiştirebilir. Burada isbn kodu eşsiz olduğunda başkası ile değişmesi sorun
 * teşkil edebilir
 *
 * theHobbit.isbn = 'blablabla'
 */

var Book = function(isbn, title, author) {
    if (isbn == undefined) throw new Error('Book constructor requires an isbn.');
    this.isbn = isbn;
    this.title = title || 'No title specified';
    this.author = author || 'No author specified';
}
Book.prototype.display = function() {
    console.log(this.title, this.author, this.isbn)
};


var theHobbit = new Book('0-395-07122-4', 'The Hobbit', 'J. R. R. Tolkien');
theHobbit.display(); // Outputs the data by creating and populating an HTML element.

/**
 * Yukarıdaki durumda kullanılmak üzere mutator method yönetimi kullanılabilir.
 * Bu yöntem her bir özelliğin atanması (set) getirilmesi/döndürülmesi (get)
 * için kullanılır.
 *
 * Ama aşağıda bir sorun daha var, setIsbn methodu her halükarda isbn'ı public hale getirecektir
 */


var Publication = new Interface('Publication', ['getIsbn', 'setIsbn', 'getTitle',
    'setTitle', 'getAuthor', 'setAuthor', 'display'
]);

// Interface.ensureImplements(this, Publication);

var Book2 = function(isbn, title, author) { // implements Publication
    this.setTitle(title);
    this.setIsbn(isbn);
    this.setAuthor(author);
}
Book2.prototype = {
    checkIsbn: function(isbn) {
        return true // @todo emulate isbn
    },
    getIsbn: function() {
        return this.isbn;
    },
    setIsbn: function(isbn) {
        if (!this.checkIsbn(isbn)) throw new Error('Book: Invalid ISBN.');
        this.isbn = isbn;
    },
    getTitle: function() {
        return this.title;
    },
    setTitle: function(title) {
        this.title = title || 'No title specified';
    },
    getAuthor: function() {
        return this.author;
    },
    setAuthor: function(author) {
        this.author = author || 'No author specified';
    },
    display: function() {
        console.log(this.title, this.author, this.isbn)
    }
};

var theHobbit2 = new Book2('0-395-07122-4', 'The Hobbit', 'J. R. R. Tolkien');
theHobbit2.display(); // Outputs the data by creating and populating an HTML element.
