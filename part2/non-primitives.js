let username = {
    "firstName" : 'Bharat',
    isLoggedIn : true,
} // {} uses to define the objects

console.log(username)
console.log(typeof username)

const user1 = {
    "first Name" : "Rohit",
}

user1.lastName = "Sharma" ;  //you maybe confused that how const value mutate. user1 refrence to perticular value place cant be change 
// the values inside it are mutable
console.log(user1['first Name'])
console.log(user1)

let today = new Date();
console.log(today)


// Arrays

let anotheruser = ["KL Rahul",23];
console.log(anotheruser[0])