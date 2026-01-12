// for of

// ["","",""]
//[{}, {}, {}]
const arr = [1,2,3,4,5];

for (const ele of arr) {
    // console.log(ele);
}

const greetings = "Hello World!!";

for (const str of greetings) {
    if(str == " ") continue;
    // console.log(str);   
}

// Maps
const map = new Map()
map.set('IN','India');
map.set('USA','United States of India');
map.set('FR',"France");

// console.log(map);

for(const [key,value] of map)
{
    console.log(key, ':-',value);
    
}

const myObj = {
    'game1': 'NFS',
    'game2': 'Spiderman'
}

//Objects are not iterable using this
// for (const [key,value] of myObj) {
//     console.log(key);
// }

