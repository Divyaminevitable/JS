// array

const myArr = [1,2,3,4,5]
const myHeros = ["ironman", "thor"]

const myArr2 = new Array(1,2,3,4,5)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop(7)

// myArr.unshift(9) // add the number in front of the array

// myArr.shift()    // remove the first number of the array

// console.log(myArr.includes(9)); // checks if the number is in the array
// console.log(myArr.indexOf(2));  // check the index of no. 

// const newArr = myArr.join()
// console.log(typeof newArr);

// console.log(myArr);

// slice, splice
console.log("A", myArr);

const myn1 = myArr.slice(1,3)

console.log(myn1);
console.log("B",myArr);         // Slice can not change the real array

const myn2 = myArr.splice(1,3)
console.log("C",myArr);         // Splice can manipluate the real array
console.log(myn2);
