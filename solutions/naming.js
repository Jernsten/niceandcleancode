class User {
    constructor(fullName, age) {
        this.fullName = fullName
        this.age = age
    }

    greet() {
        console.log(`Hi ${this.fullName}! You are ${this.age} years old :)`)
    }
}

function createNewUser({ name, surname, age }) {
    return new User(name + ' ' + surname, age)
}

const userData = { name: 'Kim', surname: 'Boman', age: '33' }
const user = createNewUser(userData)
user.greet()