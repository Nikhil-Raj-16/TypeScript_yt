// •Access modifiers (public, private, protected)
// •Readonly properties
// •Optional properties
// •Parameter properties
// •Getters and setters
// •Static members
// •Abstract classes and methods


class BottleMaker{
    constructor(public name : string){

    }

    changing(){
        this.name = "borosil"
    }
}

// let b1 = new BottleMaker("Milton");
// b1.changing()   

// private only accessible inside class and not in the inherited class
// public everywhere
// 

// by this we can change the value without any issues
// b1.name = "cello"


// to prevent this, we can use access modifiers if we write private name: string then we can't change it gives error but typescript still compiles it and it changes but error is given which we can ignore as it compiles the code

// Error: Property 'name' is private and only accessible within class 'BottleMaker'.


class MetalBottleMaker extends BottleMaker{
    constructor(name : string){
        super(name);  // parent class is passed
    }

    // used if public
    getValue(){
        console.log(this.name);
        
    }
}


let b2 = new MetalBottleMaker("Borosil");

// b2.getValue();


// Protected can be used in that class and inherited class

class BottleMaker1 {
  protected name = "milton";
}

class MetalBottleMaker1 extends BottleMaker1 {
  public material = "metal";

  changeName(){
    this.name = "case";
  }
}

let b3 = new MetalBottleMaker1();
b3.changeName()

// b3.name = ""  protected so can't use outside


// Readonly Properties

// class User {
//   constructor(public readonly name: string) { }

//   when readonly it gives error Cannot assign to 'name' because it is a read-only property.
//   changeName() {
//     this.name = "hellyow";
//   }
// }

// let u1 = new User("Harsh");
// u1.changeName()

// Optional Properties  - gender?:string

// class User1 {
//   constructor(public name: string, public age: number, public gender?: string) { }
// }

// let u2 = new User1("Harsh", 25, "male");
// let u3 = new User1("LagBataq", 18);


// Parameter Properties 
// means we can initilize and declare in the constructor and when the properties are created like this is called parameter prop.

// class User2 {
//   constructor(public name: string, public age: number) { }
// }



// Getters and Setters

// getters is a method that give value from the class 
// setters is a method that sets value inside class

class User{
    constructor(public _name: string, public _age: number){}

    get name(){
        return this._name;
    }
    set name(value : string){
        this._name = value;
    }
    get age(){
        return this._age;
    }
}

let u1 = new User("Nikhil", 23);


// output

// u1
// User {_name: 'Nikhil', age: 23}
// getter
// u1.name 
// 'Nikhil'
// setter
// u1.name = "Keshav"
// 'Keshav'

// u1
// User {_name: 'Keshav', age: 23}




// Static Members
// when static is used we can access the value without creating instance of class
// NOTE: static members are not included in the instance

class Shery {
  static version = 1.0;

  static getRandomNumber() {
    return Math.random();
  }
}

// we can directly use Shery.version



// Abstract Classes and methods

// we don't create instance of a base class e.g pedh is base class and mango,apple tree are its instances

class CookingEssentials {
    constructor(protected gas: number, public gasKaName: string) { }
}

class Sabji extends CookingEssentials{
}

class Cake extends CookingEssentials{
}

