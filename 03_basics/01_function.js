function sayMyName()
{
    console.log("Tirth");
}

// sayMyName();

// function addTwoNos( a,  b) // here a and b are parameters
// {       
//     console.log(a+b);
// }


// addTwoNos(3,4); // this 3 and 4 are arguments 

function addTwoNos( a,  b) // here a and b are parameters
{       
    let result = a + b;
    return result;
}
const result = addTwoNos(3,5);
// console.log(result);

function loginUserMessage(username="Sam") // default value
{
    return `${username} just logged in`
}

// console.log(loginUserMessage()); if i  didn't pass anything it will show underfined just logged in

// console.log(loginUserMessage());

function calculateCartPrice(val1, val2,...num1)
{
    return num1;
}
// console.log(calculateCartPrice(1,200,300,400));

const user = {
    username: "Tirth",
    price: 199,
}

function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}
// handleObject(user);
handleObject({
    username: "Sam",
    price: 699
})


