var Customer = /** @class */ (function () {
    function Customer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return Customer;
}());
var myCustomer = new Customer("c", "d");
// myCustomer.firstName = "a";
// myCustomer.lastName = "b";
console.log(myCustomer.firstName + " " + myCustomer.lastName);
