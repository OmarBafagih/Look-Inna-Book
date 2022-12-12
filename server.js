const express = require('express');
const {Client} = require('pg');
const app = express();
const PORT = process.env.PORT || 3000;

const client = new Client({
    host: "localhost",
    user: "postgres",
    port: "5432",
    password: "lookinnabook",
    database: "3005_lookinnabook"
})


client.connect();


const path = require('path');
const { nextTick } = require('process');
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// GET REQUESTS
app.get('/', function (req, res){res.render('home')});
app.get('/storeOwner', function (req, res){res.render('storeOwner')});
app.get('/register', function (req, res){res.render('register')});
app.get('/customer', function (req, response){
    //load data from db into pug file to show books
    try{
        client.query(`Select * FROM book`, (err, res) =>{
            if(!err){
                console.log(res.rows);
                response.render('customer', {books: res.rows});
            }
            else{
                console.log(err.message);
            }
        }) 
    } catch(err){
        next(err);
    }

});

//POST REQUESTS
app.post("/customer", function(req,res){
    console.log(req.body);
    res.status(200).send();
});

app.post("/removeBooks", function(req,res){
    console.log(req.body);

    res.status(200).send();
});

app.post("/addBooks", function(req,res){
    let newBook = req.body;
    insertBook(newBook).then(result => {
        if (result) {
            console.log('User inserted');
        }
    });
    res.status(200).send();
});



const insertBook = async (newBook) => {
    try {
        // await client.connect();
        await client.query(
            `INSERT INTO "book"   
             VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [newBook.ISBN, newBook.bookName, newBook.authorName, newBook.genre, newBook.publisherName, newBook.price, newBook.pages, newBook.transferPercentage, newBook.quantity]);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};

const removeBook = async (newBook) => {
    try {
        // await client.connect();
        await client.query(
            `UPDATE INTO "book"   
             VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9)`, [newBook.ISBN, newBook.bookName, newBook.authorName, newBook.genre, newBook.publisherName, newBook.price, newBook.pages, newBook.transferPercentage, newBook.quantity]);
        return true;
    } catch (error) {
        console.error(error.stack);
        return false;
    }
};



app.listen(PORT);
console.log("Server listening on port 3000");