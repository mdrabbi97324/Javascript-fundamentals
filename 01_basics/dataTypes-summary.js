// # Primitive Data Type or call by value type

// 7 types : string, number, boolean, null, undefined, symbol, BigIng

const name = "Rabbi";
const score = 33;
const isLoggedIn = false;
let outsideTemp = null;
let season;// undefined

let id = Symbol('123');
console.log(typeof id);
let userId = Symbol('123')
// console.log(id == userId);
console.log(typeof userId);

const bigNumber = 92341241241242424124n;
console.log(typeof bigNumber)



// # Reference ( Non Premitive)

// 3 types : Array, object, Function

const heros = ['Spiderman', 'Batman', 'Ironman', 'Hulk'];
const myObj = {
    name : "Anwar",
    age : 45
}
const myFunction = function(){
    console.log("Hello World!")
}

console.log(typeof myFunction);
console.log('Type of null is an : ',typeof null)
console.log('Type of undefined is an : ',typeof undefined)



// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack(Primitive) It's give a copy that's why it doesn't change main once only change copy's variable


let myName = "Md.Rabbi";
let anotherName = myName;
anotherName = "Golam Rabbi"

console.log(myName);
console.log(anotherName);


// heap(Non-Primitive) It's give reference from heap that's why it will change the main object also

let userOne = {
    email: "rabbi@google.com",
    upi: "userone@ybl"
}

let userTwo = userOne;
userTwo.email = "golamrabbi@google.com";
console.log(userOne)
console.log(userTwo)

