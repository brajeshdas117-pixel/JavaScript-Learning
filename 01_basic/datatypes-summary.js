// Primitive : Number, String, Boolean, Undefined, Null, Big-int, Symbol\

// Number :

let age = 15;
let price = 99.99

// String :

let name = "Brajesh"

// Boolean :

let isloggedIn = true;

// Undefined :

let x; // or
let y = undefined ;
console.log(y)

// null(Empty) 

let value = null

// Bigint :

const bigNumber = 1234567891234056789n

// Symbol :

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId);

// Non-premitive data types : Array, Object, Functions

// Array :

const heros = ["Spiderman","Superman","Batman","Ironman"];

// Objects :

let myObj = {
    name: "Brajesh",
    age: 23,
    sex: "Male"
}

// Function 

const myFunction = function(){
    console.log("Hello World")
}

console.log(typeof myFunction);