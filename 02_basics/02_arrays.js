const marvel_heros = ["thor","Ironman","Spiderman"]
const dc_heros = ["superman","flash","batman"];

// marvel_heros.push(dc_heros);

// console.log(marvel_heros)

const dummy = marvel_heros.concat(dc_heros);
// console.log(dummy);

const all_newHeros = [...marvel_heros,...dc_heros]

console.log(all_newHeros);

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];

const real_another_array = another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Tirth"));
console.log(Array.from("Tirth"));
console.log(Array.from({name: "Tirth"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))

