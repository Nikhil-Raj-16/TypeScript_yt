// Generics
// Generic Functions
//  Generic Interfaces
// Generic Classes

// hume ek function banana hai jo ki accept karega koi bhi value and usse parint karega

function logger(a: string){

}

logger("hey");


// how we can accept any type of data
// we should not use a: any, as typescript ka significance hi khatam hojayega
// therefore, there comes the use of generics
// Generics allow you to create reusable components that can work over a variety of types rather than a single one.

// hum ek function ko use karte waqt bata sakte hai ki function argument ko kis type se treat kare

// <T>  - <T>: This defines a type parameter (where T stands for "Type"). It acts as a placeholder for whatever type you want to pass in.

// Generic Functions


function abcd<T>(a : T){
    console.log(a);
    
}

abcd<string>("xyz")  // now T has now become string
abcd<number>(12)


function abcd1<H>(a: H, b: string, c:number){
    console.log(a,b,c);
    
}   

abcd1<string>("Nikhil", "Raj", 23);
abcd1<number>(16, "Raj", 23);

function log<T>(val : T){
    console.log(val);
}

log<string>("ODISHA");

log<number>(213)
log(216)


// generic Interfaces

// object ka roop hota hai interfaces
interface Halua<T>{
    name: string;
    age : number;
    key : T;
}

function xyz(obj : Halua<string>){
    
}

xyz({name: "Nikhil", age : 23, key : "Nsjjhajd"})


// Generic Classes

class BottleMaker<T>{
    constructor(public key : T){}
}

let b1 = new BottleMaker<string>("Hey");
console.log(b1);

let b2 = new BottleMaker<number>(12);
console.log(b2);


function jkl<T>(a : T,b: T):T{
    // return "HISHI";
    // all are of T type but then also when we are returning the string type then we can see that it fails because it is a string literals, as it should be of generic type so if we write either return a or return b, it gives no error but if we want to return that string literal then we can do like

    return "HISHI" as T;
    // return <T>"hishi";
    // as the intellisense will not work until we do type checking

    // if(typeof a === "string"){
    //     // a. gives us the suggestion
    // }
}

jkl<string>("hi","hello");




