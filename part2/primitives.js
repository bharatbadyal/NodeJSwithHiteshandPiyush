// permitives in Javascript
// string, booleans, Numbers, null, undefined, symbol
// non-primitive (or functional or object): array, functions, objects

//Number

let sum = 10 + 40;

console.log(typeof sum);

// another way

let balence = new Number("120")
console.log(balence)
console.log(typeof balence)  // this means every single primitive can be converted into non-primitive types

// null and undefined

let firstName;
console.log(firstName)  //will give undefined. it is like the placeholder till the real value came

let null_holder = null;
console.log(null_holder)  //explicitly given the null value. 

//string

let mystring = "Ola";
console.log(typeof mystring)

//using backticks ``
let mystring1 = `Lets greet with ${mystring}`;
console.log(mystring1)

// symbol : give unique value

let mySim1 = Symbol(); // this is how you create symbol
console.log(mySim1)
