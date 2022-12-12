/* Insert a publisher into the Publisher Table */
INSERT INTO PUBLISHER values(<publisherName>,<address>,<emailAddress>,<phoneNum>,<bankingNum>);

/* Insert a book into the Book Table */
INSERT INTO BOOK values(<ISBN>,<bookName>,<authorName>,<genre>,<publisherName>,<price>,<pages>,<transferPercetage>,<amount>);

/* Insert a book into the BOOKCONTAINS Table(when the user adds a book by ISBN to cart) */
INSERT INTO BOOKCONTAINS values(<cartID>,<ISBN>,<quantity>);

/* Select all books */
SELECT *
FROM BOOK 


/* Search for book by bookName */
SELECT bookName, ISBN, authorName, price, genre
FROM BOOK
WHERE bookName = '<name>';


/* Retrive all books by userName*/
SELECT bookName, ISBN, authorName, price, genre
FROM CART c, BOOKCONTAINS bc, Book b
WHERE userName = <userName> and c.cartID = bc.cartID and bc.ISBN = b.ISBN


/* removing book from database */
UPDATE BOOK SET quanitity = quantity-<removal>.quantity WHERE ISBN = <ISBN>;
