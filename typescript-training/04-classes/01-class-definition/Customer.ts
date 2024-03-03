class Customer {
    firstName: string;
    lastName: string;

    constructor(theFirst: string, theLast: string) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

let myCustomer = new Customer("c", "d");

// myCustomer.firstName = "a";
// myCustomer.lastName = "b";

console.log(myCustomer.firstName + " " + myCustomer.lastName);