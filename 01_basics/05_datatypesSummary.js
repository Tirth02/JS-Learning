

    // # Types of Datatype
    // 1) Primitive 2) Non Primitive

    // 1) Primitive 
    // -> This are category which uses call by value means the value is copied and then make changes, changes are not made in the original component, changes are made to copy of that component.

    // -> 7 types: String, Number , Boolean, null, undefined, Symbol, BigInt

    // 2) Non-Primitive (Reference type) (call by reference)

    // -> Types: Arrays, Objects, Functions
    const heros = ["shaktiman","naagraj","doga"]

    let myObj = {
        name: "Tirth",
        age: 22,
    }

    const myFunction = function() {
        console.log("Hello world");
    }

    console.log(typeof myFunction);
    console.log(typeof heros)
    console.log(typeof myObj)



    // 3) Javascript is Dynamically typed language as we don't have to specifically give data types to a variable like int, float, boolean, string 
         const outsideTemp = null;
         let userEmail; // this will be undefined if we didn't assign any value it assigns undefined. 
         console.log(typeof outsideTemp);
         console.log(typeof userEmail);

    // 4) Symbols
    // -> It is used to store the variable in such a way that it is identified as unique
        const id = Symbol('123');
        const anotherId = Symbol('123');
        //console.log(id === anotherId) // returns false
        console.log(typeof id)
    



