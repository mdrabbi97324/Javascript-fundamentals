const user = {
    username: "Golam Rabbi",
    price : 999,
    welcomeMessage : function(){
        console.log(`${this.username}, welcome to our website`)
        console.log(this)
    }
}

// user.welcomeMessage()
// user.username = "Abdullah"
// user.welcomeMessage()

// console.log(this)

// function cha() {
//     let username = "Abu Ubaida"
//     console.log(this) // this give result as undefined it's work in object
// }

// cha()

// const chai = () => {
//     let username = "Mas-uud"
//     console.log(this)
// }

// chai()


const addTwo = (num1, num2) => {
    return num1 + num2;
}

console.log(addTwo(5, 7));

const addThree = (num1 , num2 , num3) => (num1 + num2 + num3)
console.log(addThree(1,2,3));