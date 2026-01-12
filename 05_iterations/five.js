const coding = ["js","ruby","java","cpp","python"]

// coding.forEach( function (value){console.log(value);
// })

// coding.forEach((value) => {console.log(value);
// })

function printme(item)
{
    console.log(item);
}

// coding.forEach(printme);

// coding.forEach((item,index,arr) => {
//     console.log(item,index,arr);
    
// })

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "c++",
        languageFileName: "cpp"
    },
]

myCoding.forEach((item) => {
    console.log((item.languageName));
    
})