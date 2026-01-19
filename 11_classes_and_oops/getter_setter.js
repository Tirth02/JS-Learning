class User{
    constructor(email,password)
    {
        this.email = email;
        this.password = password
    }
    get email(){
        return this._email.toUpperCase();
    }

    set email(value){
        this._email = value;
    }

    get password(){
        return `${this._password}tirth`
    }


    set password(value){
        this._password = value;
    }
}

const tirth = new User("tirth@gmail.ai","abc");
console.log(tirth.email);
