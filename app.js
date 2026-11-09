"use strict";
// Type Assertions
// type Casting
//  non-null assertion operator
// type assertions ka matlab batana ts ko ki particular chiz ka type kya hai, ye aap tab karte hai jab aap ts se jaadaa us value ka type jante hai
// typescript se jyada aap jante hai uske data type ke baare mei that is called type Assertions
// Type Assertion in TypeScript is a mechanism that tells the compiler: "I know more about the type of this value than you do—treat it as this specific type."
let a = 12;
// (a as string). string properties
// (a as number).  number properties
// (<number>a).
// (<string>a).
let b = Number("123");
console.log(typeof b); // number
let c;
c = "hey";
// c! means the value will not be null or undefined
// c!. gives string properties
//# sourceMappingURL=app.js.map