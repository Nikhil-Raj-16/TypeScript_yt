declare class BottleMaker {
    name: string;
    constructor(name: string);
    changing(): void;
}
declare class MetalBottleMaker extends BottleMaker {
    constructor(name: string);
    getValue(): void;
}
declare let b2: MetalBottleMaker;
declare class BottleMaker1 {
    protected name: string;
}
declare class MetalBottleMaker1 extends BottleMaker1 {
    material: string;
    changeName(): void;
}
declare let b3: MetalBottleMaker1;
declare class User {
    _name: string;
    _age: number;
    constructor(_name: string, _age: number);
    get name(): string;
    set name(value: string);
    get age(): number;
}
declare let u1: User;
declare class Shery {
    static version: number;
    static getRandomNumber(): number;
}
declare class CookingEssentials {
    protected gas: number;
    gasKaName: string;
    constructor(gas: number, gasKaName: string);
}
declare class Sabji extends CookingEssentials {
}
declare class Cake extends CookingEssentials {
}
//# sourceMappingURL=app.d.ts.map