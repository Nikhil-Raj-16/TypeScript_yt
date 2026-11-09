"use strict";
// Generics
// Generic Functions
//  Generic Interfaces
// Generic Classes
// hume ek function banana hai jo ki accept karega koi bhi value and usse parint karega
function logger(a) {
}
logger("hey");
// how we can accept any type of data
// we should not use a: any, as typescript ka significance hi khatam hojayega
// therefore, there comes the use of generics
// Generics allow you to create reusable components that can work over a variety of types rather than a single one.
// hum ek function ko use karte waqt bata sakte hai ki function argument ko kis type se treat kare
// <T>  - <T>: This defines a type parameter (where T stands for "Type"). It acts as a placeholder for whatever type you want to pass in.
// Generic Functions
function abcd(a) {
    console.log(a);
}
abcd("xyz"); // now T has now become string
abcd(12);
function abcd1(a, b, c) {
    console.log(a, b, c);
}
abcd1("Nikhil", "Raj", 23);
abcd1(16, "Raj", 23);
function log(val) {
    console.log(val);
}
log("ODISHA");
log(213);
log(216);
function xyz(obj) {
}
xyz({ name: "Nikhil", age: 23, key: "Nsjjhajd" });
// Generic Classes
class BottleMaker {
    key;
    constructor(key) {
        this.key = key;
    }
}
let b1 = new BottleMaker("Hey");
console.log(b1);
let b2 = new BottleMaker(12);
console.log(b2);
function jkl(a, b) {
    // return "HISHI";
    // all are of T type but then also when we are returning the string type then we can see that it fails because it is a string literals, as it should be of generic type so if we write either return a or return b, it gives no error but if we want to return that string literal then we can do like
    return "HISHI";
    // return <T>"hishi";
    // as the intellisense will not work until we do type checking
    // if(typeof a === "string"){
    //     // a. gives us the suggestion
    // }
}
jkl("hi", "hello");
//# sourceMappingURL=app.js.map