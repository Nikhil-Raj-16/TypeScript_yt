declare class Device {
    name: string;
    price: number;
    category: string;
}
declare let d1: Device;
declare let d2: Device;
declare class BottleMaker {
    name: string;
    price: number;
    constructor(name: string, price: number);
}
declare let b1: BottleMaker;
declare let b2: BottleMaker;
declare class HumanMaker {
    name: string;
    isHandsome: boolean;
    age: number;
    constructor(name: string, isHandsome: boolean);
}
declare let h1: HumanMaker;
declare class Music {
    name: string;
    artist: string;
    thumbnail: string;
    length: number;
    free: boolean;
    constructor(name: string, artist: string, thumbnail: string | undefined, length: number, free: boolean);
}
declare let m1: Music;
declare class Abcd {
    name: string;
    changeFirstName(): void;
    changeLastName(): void;
}
//# sourceMappingURL=app.d.ts.map