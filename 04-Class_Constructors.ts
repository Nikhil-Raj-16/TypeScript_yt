// Classes and Objects
// •Class definition
// •Constructors
// •Access modifiers (public, private, protected)
// •Readonly properties
// •Optional properties
// •Parameter properties
// •Getters and setters
// •Static members
// •Abstract classes and methods



class Device{
    name = "lg";
    price = 12000;
    category = "digital";
}

let d1 = new Device();
let d2 = new Device();

// Constructors

// this is like bottle,biscuit maker

class BottleMaker{
    constructor(public name: string, public price : number){

    }
}

let b1 = new BottleMaker("Milton" , 1200);
let b2 = new BottleMaker("Cello" , 1500);

class HumanMaker{
    age = 0;
    constructor(public name : string, public isHandsome : boolean){
        
    }
}

let h1 = new HumanMaker('Nikhil' , true);


class Music{
    constructor(public name : string,public artist : string, public thumbnail : string = "somethumbnail.jpg", public length : number, public free : boolean){
        if(!thumbnail){
            // as '' is falsy value so it runs
            this.thumbnail = "somethumbnail.jpg"
        }
    }
}

 
// same class can be made in another way which is more lengthy than above or first one 

// class Music1{
//     public name;
//     public artist;
//     public thumbnail;
//     public length;
//     public free;

//     constructor( name : string, artist : string,  thumbnail : string = "somethumbnail.jpg",  length : number,  free : boolean){
//         this.name = name;
//         this.artist = artist;
//         this.thumbnail = thumbnail;
//         this.length = length;
//         this.free = free;
//     }
// }

// this is less used as there is type inference in TypeScript

let m1 = new Music('Chupke Chupke Raat din', 'Ghulam Ali','',480, false)

// this is bad thing that we can change everything from here, so we have to solve using 'this' keyword
m1.name = 'Hungama kyu hai Barpa'

// this Keyword is used to give reference to that object

// class ke andar kisi ko use karna hai toh this ka reference use karna hoga

class Abcd{
    name = "Nikhil";

    changeFirstName(){
        this.name
        this.changeLastName
        // if a variable is created inside a method it is accessible inside the method
        let a = 12
        console.log(a);
        
    }

    changeLastName(){

    }


}



