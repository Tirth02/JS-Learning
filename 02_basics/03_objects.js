// singleton - it is returned when object is created by constructor and not returned when object is created explicilty
// Object.create // returns singleton


// object literals

const mySym = Symbol("key1");


const JsUser = {
    name: "Tirth",
    "Full Name": "Tirth Patel",
    [mySym]: "myKey1", // this is way how to declare Symbol in object
    age: 18,
    location: "Jaipur",
    email: "tirth@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday","Saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full Name"]);
// console.log(JsUser[mySym]);

JsUser.email = "tirth@microsoft@gmail.com"
// console.log(JsUser)
//Object.freeze(JsUser);
JsUser.email = "tirth@amazon.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user")
}

JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting())
console.log(JsUser.greetingTwo());




