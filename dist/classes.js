"use strict";
//class User {
//    firstName: string;
//    lastName: string;
//    age: number;
//   constructor(firstName: string , lastName: string , age: number){
//        this.firstName = firstName;
//        this.lastName = lastName;
//        this.age = age;
//    }
//}
//let user = new User('Lukas','Martins',20);
//user.firstName = 'Lukas alterado' // Valores podem ser alterados dessa forma!
// console.log(user);
// Nessa outra forma o valor não pode ser alterado depois de definido, diferente do caso de cima
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
// let user = new User('Lukas','Martins',20);
// user.firstName = 'Lukas alterado' // !Valores não podem ser alterados dessa forma!
// console.log(user);
// user.age = 21; // Valor pode ser alterado
// console.log(user.getFullName());
class Admin extends User {
    getFullName() {
        return `DR. ${this.firstName} ${this.lastName}`;
    }
}
let admin = new Admin('Lukas', 'Martins', 20);
console.log(admin.getFullName());
