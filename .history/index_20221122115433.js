// Write your solution in this file!

customerName = "bob";


function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

function setBestCustomer() {
    bestCustomer = "not bob";
}

function overwriteBestCustomer() {
    bestCustomer = "maybe bob";
}

const leastFavoriteCustomer = "Blah";


function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = "Blah Blah";

}

console.log(customerName);
upperCaseCustomerName();
console.log(customerName);