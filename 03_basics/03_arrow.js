const user = {
    username: "Tirth",
    price: 999,

    welcomemessage: function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);
    }
}

// user.welcomemessage()
// user.username = "sam";
// user.welcomemessage();

function chai()
{
    // console.log(this);
    let username = "Tirth"
    console.log(this.username);
    
}

// chai();


//// -------------Arrow Function -------------

const arrowChai = () =>{
    console.log(this);
}
arrowChai()

// explicit return
const addTwo = (num1,num2) => {
    return num1 + num2;
}

// implicit return 
// const addTwo = (num1,num2) => num1 + num2;

// const addTwo = (num1, num2) => (num1 + num2) // no need when uses () instead of {}

// const addTwo = (num1,num2) => ({username: "Tirth"}) // this is how you return object
console.log(addTwo(4,5));

// console.log(add)