const score = 100

// console.log(score);

const balance = new Number(100)

// console.log(balance);
// console.log(typeof balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(2));

const anotherNumber = 23.69;
const anotherNumber2 = 123.699;
// console.log(anotherNumber.toPrecision(3));
// console.log(anotherNumber2.toPrecision(3));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-In'));


// -----------------Maths------------------------


// console.log(Math.abs(-4)); 
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(3,7,9,5))
// console.log(Math.max(3,7,9,5))

console.log(Math.random());
console.log(Math.floor(Math.random()*10)+1);

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min);