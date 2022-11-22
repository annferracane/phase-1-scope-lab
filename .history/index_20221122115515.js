// Write your solution in this file!

var customerName = "bob";

function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    var bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    var bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Blah";


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Blah Blah";

}

console.log(customerName);
upperCaseCustomerName();
console.log(customerName);