var accountsDetails = [];

function getValue() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var email = document.getElementById("email").value;
    var age = parseInt(document.getElementById("age").value);
    var account = {
        FirstName: firstName,
        LastName: lastName,
        EMail: email,
        Age: age
    }
    accountsDetails.push(account);
}

function viewArray() {
    console.log(accountsDetails);
}
  
  