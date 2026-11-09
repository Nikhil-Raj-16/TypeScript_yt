declare function logger(a: string): void;
declare function abcd<T>(a: T): void;
declare function abcd1<H>(a: H, b: string, c: number): void;
declare function log<T>(val: T): void;
interface Halua<T> {
    name: string;
    age: number;
    key: T;
}
declare function xyz(obj: Halua<string>): void;
declare class BottleMaker<T> {
    key: T;
    constructor(key: T);
}
declare let b1: BottleMaker<string>;
declare let b2: BottleMaker<number>;
declare function jkl<T>(a: T, b: T): T;
//# sourceMappingURL=app.d.ts.map