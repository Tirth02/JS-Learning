let myName = "tirth    ";
let myChannel = "coffee     ";
console.log(myName.trueLength);


let myHeros = ["Thor", "spiderman"];

let heroPower = {
    thor: "Hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
        
    }
}

Object.prototype.tirth = function(){
    console.log(`Tirth is present in all object`);
    
}

Array.prototype.heyTirth = function(){
    console.log(`Tirth says Hello`);
    
}

// heroPower.tirth();

// myHeros.tirth();
// myHeros.heyTirth();
// heroPower.heyTirth();

// Inheritance

const User = {
    name: "Tirth",
    email: "tirth@google.com"
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

//modern syntax

Object.setPrototypeOf(TeachingSupport,Teacher)

let anotherUsername = "ChaiAurCode    ";

String.prototype.trueLength = function(){
    console.log(`${this}`);
    // console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}
anotherUsername.trueLength();
"tirth".trueLength();
"icedCoffee".trueLength();





