const myNums = [1,2,3];

// const myTotal = myNums.reduce(function(acc,currval) {
//     console.log(`acc: ${acc} and currVal: ${currval} `);
    
//     return acc + currval;
// },0);

const myTotal = myNums.reduce((acc,currVal) => acc+currVal,0)

console.log(myTotal);

const shoppingCart = [
    {
        itemName: "JS",
        price: 2999
    },
    {
        itemName: "Python",
        price: 999
    },
    {
        itemName: "Mobile Dev",
        price: 5999
    },
    {
        itemName: "Data Science",
        price: 12999
    },
]

const sum = shoppingCart.reduce((acc,item) => acc+item.price,0)
console.log(sum);

