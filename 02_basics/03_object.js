// singlton 
// Object.create


// object literals

const mySym = Symbol("Key1")
const myObj = {
    name : "Rabbi",
    "full name" : "Golam Rabbi",
    age : 10,
    [mySym] : "Key2", //  [Symbol(Key1)]: 'Key290'
    location : "Jaipur",
    email : "rabbi@google.com",
    isLoggedIn : false,
    lastLogingDays : ["monday", "saturday"]
}

// console.log(myObj.name);
// console.log(myObj["name"]);
// console.log(myObj["full name"]);
// console.log(myObj[mySym])
// console.log(myObj);

// console.log(myObj.email);
myObj.email = "rabbi@microsoft.com"
// console.log(myObj.email);
// Object.freeze(myObj);
myObj.email = "rabbi@yahoo.com";
// console.log(myObj.email)

myObj.greetings = function() {
    console.log("hello my object")
}
myObj.greetingTwo = function() {
    console.log(`Hello object, ${this["full name"]}`) // String interpolationand also use this keyword to access object properties
}

// console.log(myObj.greetings);
// console.log(myObj.greetings());

console.log(myObj.greetingTwo);
console.log(myObj.greetingTwo());

