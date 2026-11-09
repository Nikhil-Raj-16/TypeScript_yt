declare function abcd(arg: string | number | any): "number" | "string";
declare class TvkaRemote {
    switchTVoff(): void;
}
declare class carKaRemote {
    switchCaroff(): void;
}
declare const tv: TvkaRemote;
declare const car: carKaRemote;
declare function switchoffKaro(device: TvkaRemote | carKaRemote): void;
//# sourceMappingURL=app.d.ts.map