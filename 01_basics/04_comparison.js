// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 , 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1);
// console.log("02" > 1);


// here equality check == and comparisons > < >= <= works differently, Comparisons convert null to a number, trating it as 0. That's why null >= 0 returns true and null < 0 is
// console.log(null > 0);
// console.log(null == 0);
// console.log(null < 0);
// console.log(null >= 0);
// console.log(null <= 0);

// avoid this type of comparisons
console.log(undefined == 0)
console.log(undefined > 0)
console.log(undefined < 0)
console.log(undefined <= 0)
console.log(undefined >= 0)