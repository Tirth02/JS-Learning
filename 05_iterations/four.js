const myObj = {
    js:"javascript",
    cpp:"c++",
    rb:"ruby",
    swift: "swift by apple"
}

for (const key in myObj) {
    console.log(`key is ${key} and its value is ${myObj[key]}`);
    
}

const programming = ["js","java","cpp","rb","py"]

for (const key in programming) {
    console.log(`key is ${key} and its value is ${programming[key]}`);
    
}

const map = new Map()
map.set('IN','India');
map.set('USA','United States of India');
map.set('FR',"France");

// Map is not iterable using forin
// for (const key in map) {
//     console.log(key);
    
// }