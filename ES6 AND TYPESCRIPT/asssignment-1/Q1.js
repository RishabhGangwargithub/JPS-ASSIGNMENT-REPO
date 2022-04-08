"use strict";
const number = 40;
try {
    number = 99;
} catch (err) {
    console.log(err);
}
console.log(number);
// expected output: 42
//Assigning Object
const obj = {
    name: "RISHABH"
};
console.log(obj.name);
obj.name = "GANGWAR";
console.log(obj.name);