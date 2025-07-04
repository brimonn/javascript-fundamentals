//Global scope
/*var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but with let scope";
const globalConst = "I'm a global constant";

//Block scope
{
var blockVar = "I'm a var with block scope";
let blockLet = "I'm a let with block scope";
const blockConst = "I'm a const with block scope";
}

//Global scope
console.log(globalVar);
console.log(globalLet);
console.log(globalConst);

//Block scope
console.log(blockVar);
console.log(blockLet);*/

function show(){
    var functionVar = "I'm a var with block scope";
    let functionLet = "I'm a let with block scope";
    const functionConst = "I'm a const with block scope";
}

show();

console.log(functionVar);
console.log(functionLet);
console.log(functionConst);