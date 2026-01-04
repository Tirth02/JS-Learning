// Dates
let myDate = new Date();
// console.log(myDate);
// console.log(myDate.toString())
// console.log(myDate.toDateString())
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toTimeString());

// let myCreatedDate = new Date(2023,0,23)
// let myCreatedDate = new Date(2023,0,23,5,15,45)
// let myCreatedDate = new Date("2023-1-14");
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000)); // For seconds

let newDate = new Date();
console.log(newDate);
console.log(newDate.getMonth());
// newDate.toLocaleString('default',{
//     weekday: "long",
//     dateStyle: "long",
// })