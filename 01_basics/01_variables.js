/*
1. Constant variable are not changable 
2. let declare variable are changable
3. var declare variable are changable. It's not preferable
    to use var because if we declare a variable same name 
    using var keyword it will change previous all var declare variables.
    It also create issues in block scope and funtional scope.
4.Don't decalare a variable without using const, let or var keyword ;
5. If you declare a variable without assinging a value it will show undefined;
 */
const accountId = 140;
let accountEmail = 'golamrabbi@google.com';
var accountPassword = '123456';
accountCity = 'Dhaka';

let accountState;

console.log(accountId);
// accountId = 144; // It's not allowed to change a const variable

console.table([accountId, accountEmail, accountPassword, accountCity]);

accountEmail = 'gr@yahoo.com'
accountPassword = '2222'
accountCity = 'Rajshahi'

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);



