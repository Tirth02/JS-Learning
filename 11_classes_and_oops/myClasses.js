// ES6

// class User{
//     constructor(userName,email,password){
//         this.userName = userName;
//         this.email = email;
//         this.password = password;
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }

//     changeUserName(){
//         return  `${this.userName.toUpperCase()}`
//     }
// }

// const chai = new User("coffee","coffee@gmail.com","coffee123");
// console.log(chai.encryptPassword());
// console.log(chai.changeUserName());

// behind the scene

function User(username,email,password)
{
    this.username = username;
    this.email = email;
    this.password = password;
}

User.prototype.encryptPassword = function(){
    return `${this.password}abc`;
}

User.prototype.changeUsername = function(){
    return  `${this.username.toUpperCase()}`;
}

const coffee = new User("coffee1","coffee1@gmail.com","coffee123");
console.log(coffee.encryptPassword());
console.log(coffee.changeUsername());




