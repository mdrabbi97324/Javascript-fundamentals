const myNumers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map( num => num + 10)
const newNums = myNumers
                        .map(num => num * 2)
                        .filter(num => num > 16)
                        .map(num => num + 1)
// console.log(newNums);

const myTotal = myNumers.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);

