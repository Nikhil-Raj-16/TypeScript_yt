

// for more than one functions to export we use independent exports

// export function addPayment(val : number){
//     console.log(val);
    
// }
// export function getDetails() {}

//  for exporting a class we use default export

export default class Payment{
    constructor(public price : number){}
}