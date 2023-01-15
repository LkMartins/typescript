"use strict";
const getUser = (user) => {
    return `${user.firstName} ${user.lastName}, age: ${user.age}`;
};
//let user = {
//    firstName: 'Lukas',
//    lastName: 'Martins',
//   age: 13
//}
//console.log(getUser(user));
class Person {
    constructor(firstN, lastN, ageU) {
        this.firstName = firstN;
        this.lastName = lastN;
        this.age = ageU;
    }
    getFullName() {
        return ` ${this.firstName} ${this.lastName}`;
    }
}
let person = new Person('Lukas', 'Martins', 20);
console.log(getUser(person));
