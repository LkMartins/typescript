// Number
var idade_var: number;
idade_var = 123;
idade_var = 1.2;
idade_var = 0xfa;

console.log(idade_var);

// Booleano
let active:boolean;
active = true;
active = false;

// String
let firstName:String = "Lukas";
let LastName:String = "Martins";
let fullName:String = `${firstName}  ${LastName}`;


// Enums
enum ROLES {
    MANAGER = 'Manager',
    ADMIN = 'Admin',
    CEO = 'Ceo',
    CTO = 'Cto'
};

function setRoles(role:ROLES): void {

}
setRoles(ROLES.CEO);

// Arrays
let names = ['Lukas','Giovana','Reijane','Enzo',1,true];
let names2:String[] = ['Lukas','Giovana','Reijane','Enzo'];
let names3: Array<string> = ['Lukas','Giovana','Reijane','Enzo'];
let names4: Array<any> = ['Lukas','Giovana','Reijane','Enzo'];