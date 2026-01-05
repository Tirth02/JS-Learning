const tinderUser = new Object() // Singleton Object
// const tinderUser = {} // non singleton object

tinderUser.id =  "123abc"
tinderUser.name = "Sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "user@gmail.com",
    fullName: {
        userfullName:{
            firstName: "Tirth",
            lastName: "Patel"
        } 
    }
}
// console.log(regularUser.fullName.userfullName.lastName)

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c",4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2) // (target,source,source)
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 2,
        email: "g@gmail.com"
    },
    {
        id: 3,
        email: "i@gmail.com"
    },
    {
        id: 4,
        email: "j@gmail.com"
    },
]

console.log(users[1].email);

console.log(Object.keys(tinderUser));
console.log((Object.values(tinderUser)));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));



