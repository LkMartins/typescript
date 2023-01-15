"use strict";
// Number
var idade_var;
idade_var = 123;
idade_var = 1.2;
idade_var = 0xfa;
console.log(idade_var);
// Booleano
let active;
active = true;
active = false;
// String
let firstName = "Lukas";
let LastName = "Martins";
let fullName = `${firstName}  ${LastName}`;
// Enums
var ROLES;
(function (ROLES) {
    ROLES["MANAGER"] = "Manager";
    ROLES["ADMIN"] = "Admin";
    ROLES["CEO"] = "Ceo";
    ROLES["CTO"] = "Cto";
})(ROLES || (ROLES = {}));
;
function setRoles(role) {
}
setRoles(ROLES.CEO);
// Arrays
let names = ['Lukas', 'Giovana', 'Reijane', 'Enzo', 1, true];
let names2 = ['Lukas', 'Giovana', 'Reijane', 'Enzo'];
let names3 = ['Lukas', 'Giovana', 'Reijane', 'Enzo'];
let names4 = ['Lukas', 'Giovana', 'Reijane', 'Enzo'];
