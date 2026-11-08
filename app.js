"use strict";
// Functions
// Function Types
// optional and default parameters
// Rest parameters
// Overloads
// Function Types
function abcd(name, cb) {
}
abcd("Nikhil", (value) => {
    console.log(value);
});
function abcdef(name, age, cb) {
    cb("heyss");
}
abcdef("Nikhil", 23, (arg) => {
    console.log(arg);
});
// optional and default parameters
// optional parameters
function user(name, age, gender) {
}
user("Nikhil", 23, "male");
user("Labshda", 25);
// Default parameters
function user1(name, age, gender = "Don't want to say") {
    console.log(name, age, gender);
}
user1("Nikhil", 23, "male");
user1("Labshda", 25);
// Rest parameters
//  ... rest/spread 
// func ke parameter mei agar, ... lagaye toh aap waha saare diye gaye argument ko ek hi variable as an array rakh rahe ho
// function abcde(...args : number[]){
// }
// abcde(1,2,3,3,32,4,54,5,4,6,7);
function sum(...arr) {
    console.log(arr);
}
sum(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
function candy(...arr) {
    console.log(arr[5]);
    // if out of range then undefined
}
candy("Dairymilk", "kitkat", "5Star");
// spread operator makes a copy of that array
var arr = [1, 2, 3, 45, 5];
var arr2 = [...arr];
console.log(arr2);
function funoverload(a, b) {
    if (typeof a === 'string' && b === undefined) {
        console.log("hey");
    }
    if (typeof a === 'string' && typeof b === 'number') {
        console.log("123");
        return 123;
    }
    else
        throw new Error("Something is Wrong!");
}
// funoverload("run");
// funoverload("run", 12);
// funoverload("run", '12',123);
//# sourceMappingURL=app.js.map