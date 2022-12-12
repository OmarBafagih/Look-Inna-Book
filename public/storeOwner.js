function init(){
    document.getElementById("submit").addEventListener("click", addBooks);
    document.getElementById("submit2").addEventListener("click", removeBooks);

}

function addBooks(){
    let newBook = {}
    let ISBN = document.getElementById("ISBN").value;
    let bookName = document.getElementById("bookName").value;
    let authorName = document.getElementById("authorName").value;
    let genre = document.getElementById("genre").value;
    let publisherName = document.getElementById("publisherName").value;
    let price = document.getElementById("price").value;
    let pages = document.getElementById("pages").value;
    let transferPercentage = document.getElementById("transferPercentage").value;
    let quantity = document.getElementById("quantity").value;

    newBook['ISBN'] = ISBN
    newBook['bookName'] = bookName
    newBook['authorName'] = authorName
    newBook['genre'] = genre
    newBook['publisherName'] = publisherName
    newBook['price'] = price
    newBook['pages'] = pages
    newBook['transferPercentage'] = transferPercentage
    newBook['quantity'] = quantity

    //AJAX request to server to add new user into database
    let xhttp = new XMLHttpRequest();
    xhttp.open('POST', '/addBooks', true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //redirect to allow to browese through books
            window.location.href = "http://localhost:3000/customer";
            
        }
    };
    
    xhttp.send(JSON.stringify(newBook));
    console.log("Hello");


}

function removeBooks(){
    //AJAX request to server to add new user into database
    let removedBooks = {}
    let ISBN = document.getElementById("ISBN2").value;
    let quantity = document.getElementById("quantity2").value;
    removedBooks["ISBN2"] = ISBN
    removedBooks["quantity2"] = quantity

    let xhttp = new XMLHttpRequest();
    xhttp.open('POST', '/removeBooks', true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //redirect to allow to browse through books
            window.location.href = "http://localhost:3000/customer";
        }
    };
    
    xhttp.send(JSON.stringify(removedBooks));

}