/* Trigger for when a new Customer is added to Database make new cart for them */
CREATE TRIGGER newCart
After INSERT ON Customer
EXECUTE PROCEDURE create_newUserCart();
