const name = "Golam Rabbi";
const repoCount = 27;


  // It's not recomend nowadays because this code is not readable properly.
// console.log(name + repoCount + " Value");


// Use backTicks is preferable because it gives better readability and
// also easy to use some method inside string interpolation.
console.log(`My name is ${name.toUpperCase()}. I have ${repoCount} github repository`);


const gameName = new String('Bubble shooter');
const gameNameTwo = gameName + " Two";
console.log(gameNameTwo)
console.log(gameNameTwo.__proto__);
console.log(gameName.charAt(2));
console.log(gameName)