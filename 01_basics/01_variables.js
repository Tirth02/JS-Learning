const accountId = 1334556;
let accountEmail = "tirth@gmail.com";
var accountPassword = "12345";
accountCity = "Ahmedabad"
let accountState;

accountEmail = "hc@hc.com"
accountPassword = "212121"
accountCity = "Bengaluru"

/*
    Prefer not to use var because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);