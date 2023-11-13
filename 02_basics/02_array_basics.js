const marvelHeros = ["Hulk", "Ironman", "Captain America"];
const dcHeros = ["Flash", "Batman", "Superman"];

// marvelHeros.push(dcHeros);
// console.log(marvelHeros);
// console.log(marvelHeros[3][1]) // Batman 

const allHeros = marvelHeros.concat(dcHeros);
// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...dcHeros];
// console.log(allNewHeros)

const nestedArr = [1, 2, 3, 4, [5, 6, 7, 8], 9, 10, [11, 12, [13, 14, 15, [16, 17]]]]
// console.log(nestedArr.flat(Infinity));

const nestedArrInOneArr = nestedArr.flat(Infinity);
// console.log(nestedArrInOneArr)


console.log(Array.isArray("Golam"));
console.log(Array.from("Golam"));
console.log(Array.from({name : "Golam"})); // interesting because which one keys or values make array

const score1 = 100;
const score2 = 200;
const score3 = 300;

console.log(Array.of(score1, score2, score3));
