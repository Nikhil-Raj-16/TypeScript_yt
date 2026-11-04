"use strict";
// Introduction to Interfaces in TypeScript and Type Aliases    
Object.defineProperty(exports, "__esModule", { value: true });
// 1. Defining Interfaces
// 2. using interfaces to define object shapes
// 3. Extending Interfaces
// 4. Type Aliases
// 5. Intersection Types
function abcd(a, b) {
    // a. gives number related methods and properties
    // b. gives string related methods and properties
}
function getUserDetails(obj) {
}
// so for an object we have to create a interface and define the shape of the object using that interface. And then we can use that interface as a type for the parameter of the function.
// when we call the getUserDetails function and pass an object as an argument, TypeScript will give suggestions for the properties of the object based on the User interface.
// but it wasn't needed in JavaScript because it is a dynamically typed language and we can pass any object as an argument to the function without defining its shape. But in TypeScript, we have to define the shape of the object using interface or type alias.
//  2. using interfaces to define object shapes
getUserDetails({
    name: 'Nikhil',
    email: 'nikhil@gmail.com',
    password: 'password123'
});
// so we used the user like interface of User so it doesn't give any error because the object passed as an argument has the same shape as the User interface. But if we pass an object with a different shape, TypeScript will throw an error.
// getUserDetails({
//     name: 'Nikhil',
//     email: 'nikhil@gmail.com',
//     password: 'password123',
//     gender: 'male' // this will give an error because the object passed as an argument has a different shape than the User interface. The User interface doesn't have a gender property.
// });
// there are some property that one don't want ot share so we can make that property optional by using '?' after the property name in the interface.
getUserDetails({
    name: 'Nikhil',
    email: 'nikhil@gmail.com',
    password: 'password123',
    age: 25
});
function gef(obj) {
    // obj. can access all the properties of the User interface and the admin property of the Admin interface.
}
function ght(obj) {
}
// ght(null); // valid because null is a valid value for the arg type
// ght('hello'); // valid because string is a valid value for the arg type
// 5. Intersection Types
// intersection types are used to combine multiple types into a single type. 
// union and intersection types are different. Union types are used to define a type that can be one of multiple types, whereas intersection types are used to define a type that combines multiple types into a single type.
// union types are denoted by the '|' symbol.
let a; // a can be either a string or a 
function func2(a) {
    // a. can access all the properties of the User2 type and the getDetails method of the Admin2 type.
}
// similar to interface, type also extending like interface but key difference is
// 1.
// type func2 = number;
// type func2 = string;
// gives an error but in interfaces they are merged
// for eg interface abcd of name and email 
// 2.
// type ka kamm hai datatype create karna like number, string
// whereas interface ka kam hai object ka shape banana
//# sourceMappingURL=app.js.map