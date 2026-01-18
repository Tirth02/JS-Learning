class User{
    constructor(username){
        this.username = username;
    }

    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username);
        this.email = email;
        this.password = password
    }

    addCourse(){
        console.log(`New course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai","chai@gmail.com","chai123");
chai.logMe();
chai.addCourse();

const Tea = new User("Tea");
// Tea.addCourse();
Tea.logMe();

console.log(chai instanceof User);
