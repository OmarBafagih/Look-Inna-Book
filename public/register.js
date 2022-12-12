function init(){
    document.getElementById("submit").addEventListener("click", submit);
}

function submit(){
    let newCustomer = {}
    let userName = document.getElementById("username").value;
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;
    let address = document.getElementById("address").value;
    newCustomer['username'] = userName
    newCustomer['fName'] = fName
    newCustomer['lName'] = lName
    newCustomer['address'] = address
    //AJAX request to server to add new user into database
    let xhttp = new XMLHttpRequest();
    xhttp.open('POST', '/customer', true);
    xhttp.setRequestHeader("Content-Type", "application/json");
    xhttp.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            //redirect to allow to browese through books
            window.location.href = "http://localhost:3000/customer";
            
        }
    };
    
    xhttp.send(JSON.stringify(newCustomer));
}