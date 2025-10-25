// Immediately Invoke Function Expression (IIFE)

(function chai(){                          // named IIFE
    console.log(`DB CONNECTED`);
    
}())
// iife -- global scope ke polution problem hoti hnn kai baar toh uss global scope ke jo variable hn yah jo bhi vha pollution hn usko htane ke liye hmne iife ka use kiya 
// jo function immedatiely exicute ho jaye  

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);        // unnamed IIFE
} ) ('divyam')