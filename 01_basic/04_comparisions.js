// console.log(2 > 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);

console.log("2" > 1);
console.log("02" > 1);

console.log(null > 0);
console.log(null == 0);             // Expected O/p : false
console.log(null >= 0);             // Expected O/P : True (null converted to 0)

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);

// Strict check

console.log("2" === 2);              // false