function setUserName(userName){
    // complex DB calls
    this.userName = userName
    console.log("Called!!");
    
}

function createUser(username,email,password)
{
    setUserName.call(this,username)
    this.email = email;
    this.password = password;
}

const chai = new createUser("chai","chai@fb.com","123");
console.log(chai);

// call help to pass current execution context to another function  means it helps to provide property of one object to another object without getting erased by setting reference
