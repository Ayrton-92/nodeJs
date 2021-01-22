class Persons {
    constructor(firstname, lastname) {
        this.firstname = firstname
        this.lastname = lastname
    }
    get fullname() {
        return this.makeFullName()
    }

    makeFullName() {
        return this.firstname + ' ' + this.lastname
    }

}



class Users extends Persons {
    constructor(firstname, lastname, email) {
        super(firstname, lastname)
        this.email = email
    }



}
let person = new Persons('Jane', 'Dae')
let user = new Users('John', 'Doe', 'john.doe@gmail.com')

console.log(person)
console.log(user)

console.log(person instanceof Users)
console.log(user instanceof Persons)