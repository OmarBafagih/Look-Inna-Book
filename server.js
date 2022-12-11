const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;


const path = require('path');
app.set('views', path.join(__dirname, '/views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.get('/', function (req, res){
    res.render('home')

});

app.get('/customer', function (req, res){
    res.render('customer')

});

app.get('/storeOwner', function (req, res){
    res.render('storeOwner')

});

app.listen(PORT);
console.log("Server listening on port 3000");