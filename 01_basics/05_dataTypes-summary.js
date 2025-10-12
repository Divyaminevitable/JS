//  Primitive
// 7 types : String , number , boolean, null, undefined, Symbol, BigInt

// type of null is Object
// 1) Primitive Datatypes
//        Number => number
//        String  => string
//        Boolean  => boolean
//        null  => object
//        undefined  =>  undefined
//        Symbol  =>  symbol
//        BigInt  =>  bigint

// 2) Non-primitive Datatypes
//        Arrays  =>  object
//        Function  =>  function
//        Object  =>  object

// const score = 100
const scoreValue = 100.3

// const isLoggedIn = 100.3
const outsideTemp = null
// let userEmail;
  
// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

const bigNumber = 3445644919243934n
// if you add n in the end of a large number it will automatically convert the datatype into BigInt

// Reference (typeof Non Primitive datatype gives out "object")
// Array, Objects, Functions

const hero =["shaktiman","naagraj", "doga"];
let myObj = {
    name : "Divyam",
    age: 22
    }

const myFunction = function(){
    console.log("Helloworld");
}
console.log(typeof bigNumber);
console.log(typeof outsideTemp);
console.log(typeof myFunction);

