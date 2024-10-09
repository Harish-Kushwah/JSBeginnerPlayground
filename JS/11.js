// undefined

let firstName;
console.log(typeof firstName)  //undefined

firstName = "Harish"
console.log(typeof firstName , firstName)

// null
let a = null;
console.log(typeof a);
console.log(a);

console.log(typeof null);
// bug ,error


// BigInt
let myNumber = BigInt(123120102923929329392932932392323);

let myNumber1 = 123120102923929329392932932392323n;

console.log(myNumber1 ** 2n);

console.log(myNumber);
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)