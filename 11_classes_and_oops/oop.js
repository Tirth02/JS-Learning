const user = {
    username: "Tirth",
    loginCount: 8,
    signedIn: true,
    getUserDetails: function(){
        // console.log("Got user details from database");
        // console.log(`Username: ${this.username}`);
        console.log(this);
        
        
    }
}

// console.log(user.loginCount);
// console.log(user.getUserDetails());
// console.log(this);

function User(username,loginCount,isLoggedIn)
{
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;
    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
        
    }

    return this;
}

const UserOne = new User("Tirth",12,true);
const userTwo = new User("Manoj",9,true);
console.log(UserOne.constructor);
// console.log(userTwo);







