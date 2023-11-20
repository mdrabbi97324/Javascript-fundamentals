// const tinderUser = new Object();
const tinderUser = {}

tinderUser.id = "123abc"
tinderUser.name = "sammy"
tinderUser.isLoggedIn = false
// console.log(tinderUser);


const regularUser = {
    email: "sample@gmail.com",
    fullName: {
        userFullName : {
            firstName : "Golam",
            lastName : "Rabbi"
        }
    }
}

// console.log(regularUser.fullName.userFullName.firstName);

const obj1 = {1:"a", 2:"b"}
const obj2 = {3:"a", 4:"b"}
const obj3 = {5:"a", 6:false}

// const obj4 = {obj1, obj2}
const obj4 = Object.assign({}, obj1, obj2, obj3)
// console.log(obj4)

const obj5 = {...obj1, ...obj3}
// console.log(obj5)


 const user = [
    {
        id: 1,
        email: "r1@yahoo.com"
    },
    {
        id: 2,
        email: "r2@yahoo.com"
    },
    {
        id: 3,
        email: "r3@yahoo.com"
    }
 ]

// console.log(user[2].email)


// console.log(tinderUser)
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'))

const course = {
    courseName : "javascript",
    price: 1000,
    courseUserName : "Golam"
}

console.log(course.courseUserName);

const {courseUserName : userName} = course;
console.log(userName);

// {
//     "name": "hitesh",
//     "coursename": "js in hindi",
//     "price": "free"
// }

[
    {},
    {},
    {}
]


