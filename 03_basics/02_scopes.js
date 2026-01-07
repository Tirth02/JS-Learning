let a = 300
if(true)
{
    let a = 10;
    const b = 20;
    var c = 30;

    console.log("Inner :  ",a);
}

// console.log(a);
// console.log(b);
// console.log(c); // that's why don't use var anywhere it shows no error 

// console.log(a);

function one()
{
    const username = "tirth"

    function two()
    {
        const website = "youtube"
        console.log(username);
        
    }
    // console.log((website));

    two();   
}
one();

// ----------------interesting -----------------

console.log(addOne(5));

function addOne(num)
{
    return num + 1;
}
// console.log(addOne(5));

console.log(addTwo(5)); // will show error
const addTwo = function(num){
    return num + 2;
}

// console.log(addTwo(5));



