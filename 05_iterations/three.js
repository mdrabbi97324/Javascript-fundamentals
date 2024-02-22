// for of loop

const numbers = [1, 2, 3, 4, 5]
for (const number of numbers) {
    // console.log(`Value is : ` + number)
}

const greetings = "Hello World!";
for (const greet of greetings) {

    // console.log('Each character is : ' + greet);
}

const map = new Map;
map.set('BD', 'Bangladesh')
map.set('PK', 'Pakistan')
map.set('USA', 'United states of America')

for (const [key, value] of map) {
    // console.log(key,  value)
}

const myObj = {
    'BD' : 'Bangladesh',
    'Fr' : 'Franch',
    'Dh' : 'Dhol'
};

for (const key of myObj) {
    console.log(key);
}