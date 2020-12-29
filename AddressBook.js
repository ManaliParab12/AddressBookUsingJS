console.log("Welcome To Address Book")
class AddressBook {
    firstName;
    lastName;
    address;
    city;
    state;
    zip;
    phoneNumber;
    email;

    constructor(firstName, lastName, address, city, state, zip, phoneNumber, email) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
    this.city = city;
    this.state = state;
    this.zip = zip;
    this.phoneNumber = phoneNumber;
    this.email = email;
    }

    get firstName() { 
        return this._firstName; 
    }
    set firstName(firstName) {
        this._firstName = firstName;
    }

    get lastName() {
        return this._lastName;
    }
    set lastName(lastName) {
        this._lastName = this.lastName;
    }

    get address() {
        return this._address;
    }
    set address(address) {
        this._address = this.address;
    }

    get city() {
        return this._city;
    }
    set city(city) {
        this._city = city;
    }

    get state() {
        return this._state;
    }
    set state(state) {
        this._state = state;
    }

    get zip() {
        return this._zip;
    }
    set zip(zip) {
        this._zip = zip;
    }

    get phoneNumber() {
        return this._phoneNumber;
    }
    set phoneNumber(phoneNumber) {
        this._phoneNumber = this.phoneNumber;
    }

    get email() {
        return this._email;
    }
    set email(email) {
        this._email = this.email;
    }

    toString() {
        return "FirstName : " +this.firstName+ "\nLastName : " +this.lastName+ "\nAddress :" +this.address+ 
        "\nCity : " +this.city+ "\nState : " +this.state+ "\nZip : " +this.zip+ "\nPhoneNumber : " +this.phoneNumber+ 
        "\nemail : " +this.email;
    }
}

let addressBook = new AddressBook("Manali", "Parab", "ManvelPada", "Virar", "Maharashtra", 401305, 8149877402, "manaliparab10@gmail.com");
console.log(addressBook.toString());