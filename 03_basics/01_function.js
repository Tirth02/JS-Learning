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

console.log(loginUserMessage());

