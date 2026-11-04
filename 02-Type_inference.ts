// Type Inference
// understanding Type Inference
// Type annotations


// type inference is a feature of TypeScript that allows the compiler to automatically determine the type of a variable based on its value.
// This means that you don't always have to explicitly specify the type of a variable, as TypeScript can infer it for you.

let a = 5
let b = '12'

let c: number; // is called type annotation, we are explicitly specifying the type of the variable c as number. This means that c can only hold values of type number, and if we try to assign a value of a different type to c, TypeScript will throw an error.

// type annotation can use union 
let d : number | string | boolean; // this means that d can hold values of type number, string, or boolean. This is useful when you want to allow a variable to hold multiple types of values.


// we can also use type inference with functions. TypeScript can infer the return type of a function based on the values returned from it.

function add(x: number, y: number) {
    return x + y; // TypeScript infers the return type of this function as number
}
function add1(x: number, y: number) :void {
    console.log(x + y); 
}


