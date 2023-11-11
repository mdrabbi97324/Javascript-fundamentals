let myDate = new Date()
// console.log(myDate) // 2023-11-09T01:32:05.477Z 
// console.log(myDate.toString()) //Sat Nov 11 2023 02:50:47 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString())  // Sat Nov 11 2023

// console.log(myDate.toLocaleString()) // 11/11/2023, 2:58:04 AM

// console.log(typeof myDate)

// const myCreatedDate = new Date(2023, 0, 23); //2023-01-23T00:00:00.000Z
// const myCreatedDate = new Date(2023, 0, 25, 5, 3) // 2023-01-25T05:03:00.000Z
// console.log(typeof myDate) // object


// let myCreatedDate = new Date("2023-01-14") // 2023-01-14T00:00:00.000Z
let myCreatedDate = new Date("01-14-2023") // 2023-01-14T00:00:00.000Z
// console.log(myCreatedDate.toLocaleString());  //1/14/2023, 12:00:00 AM

let myTimeStamp = Date.now()
console.log(myTimeStamp) //  1699677853398
// console.log(myCreatedDate.getTime()); // 1699678076834
// console.log(Math.floor(Date.now()/1000)) // 1699678207
console.log(Math.floor(Date.now()/1000)) 


let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth() + 1);
// console.log(newDate.getDay())


console.log(`${newDate.getDay()} and the Time`);

console.log(newDate.toLocaleString('default', {
    weekday: "long",
}))

