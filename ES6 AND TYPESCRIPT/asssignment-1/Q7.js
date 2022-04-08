"use strict";
/*a)Suppose there is a javascript array with 4 elements.
 Print the value of 3rd element using array matching.*/
let arr = ["a","b","c","d"];
let [po, ia, as, de] = arr;
console.log("value of 2nd element is" + ia);
/*b.Create an organization object having
attributes name, address.
 Write a program to retrieve pin code of an address
 using object deep matching.*/
let pinCode = 20001;
let organization = {
    name: "RISHABH",
    address: "bareilly Park",
    pinCode
};
console.log("Pincode is" + pinCode);