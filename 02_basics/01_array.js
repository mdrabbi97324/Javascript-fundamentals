// array

const myArr = [1, 2, 3, 4, 5];
// console.log(myArr) // [ 1, 2, 3, 4, 5 ]

const myHeros = ["Hulk", "Ironman", "Spiderman", true, 10]

const myArr2 = new Array(1, 3, 99, 22); // [ 1, 3, 99, 22 ]


// console.log(myArr[0]) // output : 1 // Access an element by using index number it start 0;

// Array methods

myArr.push(6);
myArr.pop()
myArr.unshift(22, 23)
myArr.shift()
myArr.shift()

// console.log(myArr.includes(9)); // false ?
// console.log(myArr.indexOf(0)); // -1 
// console.log(myArr.indexOf(3)); // 2

const newArr = myArr.join(); // 
// console.log(typeof newArr) // string 


// slice , splice

console.log("A", myArr);

const my1 =  myArr.slice(1, 3)
console.log(my1) // [2, 3]
console.log("B", myArr)

const my2 = myArr.splice(1, 3)
console.log(my2);
console.log("C", myArr);