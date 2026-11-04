"use strict";
// Basic Types 
// 1.Primitve Types (string, number, boolean)
// 2.Arrays
// 3.Tuples
// 4.Enums
// 5.Any, unknown, void, null, undefined, never
Object.defineProperty(exports, "__esModule", { value: true });
// Primitives and reference
// a = [1,2,3,4,5]
// b=a
// b ka aakhri member hata do then b = [1,2,3,4] and
//  a = [1,2,3,4,5]  but, this don't happen in reference types, if we change b then a will also change because both are pointing to the same memory location.
// so a will also be [1,2,3,4] if we change b to [1,2,3,4] because both are pointing to the same memory location.
// if [], {} ,() are used then they are called reference means any change in reflect in the parent also.
// e.g of reference: var a = {} , [] , ()
// var a = [1,2,3,4,5]
// var b = a
//  and if no brackets are used then they are called primitive.
// primitives ex- var a = 12, true
// primitive can be copied directly but reference types can't be copied directly because they are pointing to the same memory location. So, if we change one then the other will also change.
// var a = 12;
// var b = a;
// 2.Arrays
var arr = [1, 2, 3];
var arr2 = [1, 2, 3, { name: 'Nikhil' }, { name: 12 }];
// so if we want to store different types of data in an array then we can use any type in array like this
// but if we want to store only one type of data in an array then we can use the type of that data in array like this
let arr3 = [1, 2, 3, 4, 5];
// let arr4: number[] = [1,2,3,'Nikhil']; // this will give an error because we are trying to store a string in a number array
// let arr5: string[] = ['Nikhil', 'Kumar', 'Singh', 56]; // this will give an error because we are trying to store a number in a string array
// 3.Tuples
// Tuples are used to store multiple values of different types in a single variable. 
// Tuples are similar to arrays but they have a fixed size and the types of the elements are known at compile time. 
let tuple = ['Nikhil', 12, true];
// let tuple2: [string, number, boolean] = ['Nikhil', 12, true, 'Kumar']; // this will give an error because we are trying to store 4 elements in a tuple of size 3
// 4.Enums
// Enums are used to define a predefined set of named constants. 
// Enums can be numeric or string based.
// it is like a key value pair and important thing is that we use '=' instead of ':' to assign value to the key in enum.
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
UserRoles.ADMIN; // 'admin'
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 404";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.ABANDONED; // 'abandoned status code 500'
//  5. Any, unknown, void, null, undefined, never
// Any type is used when we don't know the type of the variable at compile time. 
// It can be assigned any type of value. 
// But it is not recommended to use any type because it defeats the purpose of using TypeScript.
let a; // type is any because we didn't specify any type and we didn't assign any value to it. So, it is of type any.
let c; // type is any because we specified the type as any.
let b; // type is number because we specified the type as number.
// NOTE- make sure that you don't use any type because it defeats the purpose of using TypeScript. It is better to use unknown type instead of any type because unknown type is safer than any type.
let d; // type is unknown because we specified the type as unknown. It can be assigned any type of value but we can't perform any operations on it until we check its type.
d = 12; // valid
d = 'Nikhil'; // valid
if (typeof d === 'string') {
    console.log(d.toUpperCase()); // valid because we checked the type of d before performing any operations on it.
}
// Void type is used when a function doesn't return any value. It is used to indicate that a function doesn't return anything.
function printName(name) {
    console.log(name);
}
// printName("Nikhil"); // valid
function abcd() {
    return 12; // valid because the function is returning a number.
}
// let e = null; 
//  e value is assiged to null but its type is any because we didn't specify any type and we didn't assign any value to it. So, it is of type any.
// but if we specify the type as null then it can be assigned only null value.
// let e: null = null;
// type is null because we assigned null to it. It can be assigned only null value. 
// let e = undefined; // type is undefined because we assigned undefined to it. It can be assigned only undefined value.
// Union 
// type is used when a variable can have multiple types. It is used to indicate that a variable can have multiple types.
let f; // type is string or null because we specified the type as string or null. It can be assigned either string or null value.
f = 'Nikhil'; // valid
f = null; // valid
// Undefined type is used when a variable can have undefined value. It is used to indicate that a variable can have undefined value.
let v;
// Never type is used when a function never returns anything. It is used to indicate that a function never returns anything.
function abc() {
    while (true) {
    }
}
abc();
console.log("Hey"); // if used never means not return so this line will never be executed because the function abc() never returns anything and it will keep running forever. So, the console.log("Hey") will never be executed.
// if we use void instead of never then the function will return undefined and the console.log("Hey") will be executed after the function abc() is executed.
// Never type is used in infinite loop or in function which throws an error and never returns anything.
//# sourceMappingURL=BasicTypes.js.map