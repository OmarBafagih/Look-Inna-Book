*/ Creates a new cart for Customer */
CREATE FUNCTION create_newUserCart()
	RETURNS TRIGGER
	LANGUAGE PLPGSQL
AS $$
BEGIN
	INSERT INTO CART(userName,cartID)VALUES(<userName>,DEFAULT);
	RETURN NULL;
END;
$$

CREATE FUNCTION create_order()
	RETURNS TRIGGER
	LANGUAGE PLPGSQL
AS $$
BEGIN
	INSERT INTO SUBMITORDER(orderNum,userName,cartID,reportID)VALUES(DEFAULT,<userName>,curr(pg_get_serial_sequence('cart','cartid')),DEFAULT);
	
	INSERT INTO REPORT(reportID,expenseOrSale,amount)
	SELECT curr(pg_get_serial_sequence('SUBMITORDER','reportID'),'S',sum(b.ISBN*b.price)
	FROM BOOK b, BOOKCONTAINS bk, CART c
	WHERE C.cartID = bk.cartID and bk.ISBN = b.ISBN;

	DELETE FROM 
