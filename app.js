"use strict";
// Type Guards and typeScript Utility
//  using typeof and instanceof
//  Partial, required and readonly
// 1. in Type guards we have used typeof i.e type narrowing
function abcd(arg) {
    // arg. gives the common of both string and number so we can use type narrowing
    if (typeof arg === "number") {
        // arg.   gives the number properties
        // console.log("number");
        return "number";
    }
    else if (typeof arg === "string") {
        // console.log("string");
        return "string";
        // arg. gives the properties of string
    }
    else {
        throw new Error("Error Detect ho gaya");
    }
}
console.log(abcd(12));
console.log(abcd("KEY"));
console.log(abcd(true));
// 2. typeof and instanceof
class TvkaRemote {
    switchTVoff() {
        console.log("Switching Off TV");
    }
}
class carKaRemote {
    switchCaroff() {
        console.log("Switching Off Car");
    }
}
const tv = new TvkaRemote();
const car = new carKaRemote();
function switchoffKaro(device) {
    if (device instanceof TvkaRemote) {
        device.switchTVoff();
    }
    else if (device instanceof carKaRemote) {
        device.switchCaroff();
    }
}
//# sourceMappingURL=app.js.map