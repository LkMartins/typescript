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
    // private readonly firstName: string; // readnoly não permite o valor ser alterado depois 
    // private lastName: string; 
    // private age: number; // Deixa o valor protegido e assim eu não consigo alterar fora do esboço da classe

    protected readonly firstName: string; // readnoly não permite o valor ser alterado depois 
    protected lastName: string; 
    protected age: number; // Deixa o valor protegido somente para quem está na classe ou quem estender ela

    constructor(firstName: string , lastName: string , age: number){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    public getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

// let user = new User('Lukas','Martins',20);
// user.firstName = 'Lukas alterado' // !Valores não podem ser alterados dessa forma!

// console.log(user);
// user.age = 21; // Valor pode ser alterado
// console.log(user.getFullName());

class Admin extends User{

    public getFullName(){
        return `DR. ${this.firstName} ${this.lastName}`;
    }
}

let admin = new Admin('Lukas','Martins',20);
console.log(admin.getFullName());