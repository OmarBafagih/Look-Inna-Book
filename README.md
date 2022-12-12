# Look-Inna-Book
## Implementation Details
1. Our Implementation of Look Inna Book is a Node web application
2. We made the use of Express to handle routing/requests
3. We made the use of the 'pg' npm package to connect our node application to our postgre SQL database.

## Design Decisions:
1. A user can register as a new customer, upon registration they get redirected to browse through our selection of books, where they can also add/remove books to and from their cart or submit and order
2. The store owner has the ability to add or remove books to and from the store's stock
3. The user must enter their username and click the "retrieve cart" button to add to their cart and is also required to retrieve their potential current outstanding cart from the database
4. The user must enter an ISBN for the book they would like to add to their cart and click the "add to cart" button

## Run Instructions:
1. Clone repository
2. Make sure to have NPM installed and run the command 'npm i' to install all the required dependencies marked in the package.json file. If the 'npm i' command oesn't work, run the following commands:
   1. npm install pug
   2. npm install express
   3. npm install pg
3. Now that we have our application ready to run, we need to undergo the following steps to allow the database to be connected to our app.
   1. Create a new postgre database with the name '3005_lookinnabook', if you would like to use a different name, make sure to change the value on line 11
   2. Create the tables for this database by running the SQL located in the DDL.sql file
   3. Make sure to also create the triggers for the database by running the SQL found in the triggers.sql file
   4. We also need to create the functions for the database by running the SQL found in the functions.sql file

