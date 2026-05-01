let score = "50abcf"

console.log(score);
console.log(typeof score);

// Now this is a string value,but I want the value in Number :

let valueinNumber = Number(score)          // It converts the string to number data-types
console.log(valueinNumber);
console.log(typeof valueinNumber);

// "33" => 33
// "33abcf" => NaN (Not a Number)
//  true => 1 and false => 0


let isLoggedIn = 1
// now this is in number types, and want it in boolean type:

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(isLoggedIn)
// console.log(typeof(isLoggedIn));
console.log(booleanIsLoggedIn);
console.log(typeof(booleanIsLoggedIn));

// 1 => true and 0 => false 
// "" => false 
// "hitesh" => true 

// number to string conversion :

let number = 33

let stringNumber = String(number)
console.log(stringNumber);
console.log(typeof stringNumber);

// ********************************* Operations **********************************

let value = 3
let Negvalue = -value
console.log(Negvalue);

// console.log(2 + 2);
// console.log(2 - 2);
// console.log(2 * 2);
// console.log(2 ** 3);
// console.log(2 / 3);
// console.log(2 % 3);

let str1 = "Hello"
let str2 = " Brajesh"

console.log(str1 + str2);


console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + "2");
console.log(1 + 2 + "5");



// console.log(+true);   => 1
// console.log(+"");     => 0

// Prefix & Postfix increment

let gameScore = 100
gameScore ++;                   // Postfix
++ gameScore;                   // Prefix
console.log(gameScore);