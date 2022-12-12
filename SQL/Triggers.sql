/* Trigger for when a new Customer is added to Database make new cart for them */
CREATE TRIGGER newCart
AFTER INSERT ON Customer
EXECUTE PROCEDURE create_newUserCart();

/* Trigger for when an order is submitted */
CREATE TRIGGER orderSubmitted
AFTER INSERT ON SUBMITORDER
EXECUTE PROCEDURE create_order();

/* Trigger for when an expense is made */
CREATE TRIGGER expenseSubmitted
AFTER INSERT ON EXPENSES
EXECUTE PROCEDURE create_expense_report();
