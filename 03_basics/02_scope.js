var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);
    
}

// run console one by one and see the problem a,b cannot give output but c can bcz of var 
// never use var , this can create an issue 

// console.log(a);
// console.log(b);
//  console.log(c);


function one(){
    const username = "hitesh"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    // console.log(website);

     two()

}

// one()

if (true) {
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
        // console.log(username + website);
    }
    // console.log(website);
}

// console.log(username);


// ++++++++++++++++++ interesting ++++++++++++++++++


console.log(addone(5))

function addone(num){
    return num + 1
}


// addTwo(5)
const addTwo = function(num){    // this is a function expression, not a function declaration.
    return num + 2
}
//Function expressions are not hoisted (i.e., they are not available before their definition).
// Function declarations are hoisted.
//So at the time you call addTwo(5), JavaScript has not yet created the function — the variable addTwo exists (due to hoisting of const), but it’s in a “temporal dead zone”, so it cannot be accessed before initialization.