class Customer3 {
    private _firstName: string;
    private _lastName: string;

    public get lastName(): string {
        return this._lastName;
    }
    public set lastName(value: string) {
        this._lastName = value;
    }

    public get firstName(): string {
        return this._firstName;
    }

    public set firstName(value: string) {
        this._lastName = value;
    }

    constructor(theFirst: string, theLast: string) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
}

let myCustomer3 = new Customer3("c", "d");

// myCustomer.firstName = "a";
// myCustomer.lastName = "b";

console.log(myCustomer2.firstName + " " + myCustomer2.lastName);