// Functions
// Function Types
// optional and default parameters
// Rest parameters
// Overloads




// Function Types

function abcd1(name : string, cb: (value: string)=>void){

}

abcd1("Nikhil", (value : string) =>{
    console.log(value);
    
})

function abcdef(name : string,age : number,cb:(arg : string) => void){
    cb("heyss")
}

abcdef("Nikhil", 23,(arg: string)=>{
    console.log(arg);
    
})


// optional and default parameters

// optional parameters
function user(name: string, age: number, gender ?: string){

}

user("Nikhil", 23, "male");
user("Labshda", 25);

// Default parameters

function user1(name: string, age: number, gender : string = "Don't want to say"){
    console.log(name,age,gender);
    
}

user1("Nikhil", 23, "male");
user1("Labshda", 25);

// Rest parameters


//  ... rest/spread 
// func ke parameter mei agar, ... lagaye toh aap waha saare diye gaye argument ko ek hi variable as an array rakh rahe ho

// function abcde(...args : number[]){

// }

// abcde(1,2,3,3,32,4,54,5,4,6,7);

function sum(...arr: number[]){
    console.log(arr);
}

sum(1,2,3,4,5,6,7,8,9,10);

function candy(...arr: string[]){
    console.log(arr[5]);
    // if out of range then undefined
}

candy("Dairymilk","kitkat", "5Star")



// spread operator makes a copy of that array

var arr = [1,2,3,45,5]
var arr2 = [...arr]

console.log(arr2);


// Function Overloading

// typescript func signature

function funoverload(a : string): void;
function funoverload(a : string, b : number): number;

function funoverload(a : any, b?: any){
    if(typeof a === 'string' && b === undefined){
        console.log("hey");
    }
    if(typeof a === 'string' && typeof b === 'number'){
        console.log("123");
        return 123;
        
    }
    else throw new Error("Something is Wrong!");
}

// funoverload("run");
// funoverload("run", 12);
// funoverload("run", '12',123);
