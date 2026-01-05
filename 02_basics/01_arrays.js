// array
const myArr = [0,1,2,3,4,5,6,7];
const myHeros = ["haktiman","naagraj"];

const myArr1 = new Array(1,2,3,4);
// console.log(myArr1.length);

myArr.push(8);
myArr.push(9);
myArr.pop();

myArr.unshift(-1);

myArr.shift();

// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(6));

const newArr = myArr.join("-");
// console.log(newArr);


// Slice, Splice

const myn1 = myArr.slice(1,3); // In slice method it doesn't make changes in original element makes changes in copy and does not include ramge ie 3 in current example
console.log(myn1);
console.log("B ",myArr); 

const myn2 = myArr.splice(1,3); // In splice method it make changes in original element and also add range ie 3 in current example
console.log("C ",myArr);
console.log(myn2);

