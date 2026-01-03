const myName = "tirth-hc"
const repoCount = 22

console.log("My name is "+myName + " and My repocount is "+repoCount);



// this preferred way to use string in current industry
console.log(`Hello my name is ${myName} and my repo Count is ${repoCount}`)

const gameName = new String('tirth-tp-stu');

console.log(gameName[0]);
console.log(gameName.length)
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,4);
console.log(newString);

const anotherString = gameName.slice(-7,4); // you can use negative index as well here
console.log(anotherString);

const newStringOne = "    hitesh.    "
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://tirth.com/tirth%20patel";
console.log(url.replace('%20','-'));

console.log(url.includes('tirth'))

console.log(gameName.split('-'));
