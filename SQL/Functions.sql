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

/* creates an order */
CREATE FUNCTION create_order()
	RETURNS TRIGGER
	LANGUAGE PLPGSQL
AS $$
BEGIN
/* inserting reportID, S(sale), and total amount of order into REPORT TABLE */
	INSERT INTO REPORT(reportID,expenseOrSale,amount)
	SELECT curr(pg_get_serial_sequence('SUBMITORDER','reportID')),'S',sum(b.ISBN*b.price)
	FROM BOOK b, BOOKCONTAINS bk, CART c
	WHERE C.cartID = bk.cartID and bk.ISBN = b.ISBN;

/* giving customer new cart */
	INSERT INTO CART(userName,cartID)VALUES(<userName>,DEFAULT);
	
	RETURN NULL;
END;
$$

/* making report from expense */
CREATE FUNCTION create_expense_report()
	RETURNS TRIGGER
	LANGUAGE PLPGSQL
AS$$
BEGIN
	
	INSERT INTO REPORT(reportID,expenseOrSale,amount)VALUE(curr(pg_get_serial_sequence('EXPENSES','reportid')),'E',<amount>)

	RETURN NULL;
END;
$$
