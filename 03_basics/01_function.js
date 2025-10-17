function sayMyName(){
    console.log("d");
    console.log("i");
    console.log("v");
    console.log("y");
    console.log("a");
    console.log("m");
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }
 
function addTwoNumbers(number1, number2){
    // let result =
    return  number1 + number2
}

const result =  addTwoNumbers(3,5)

// console.log("Result:", result);

addTwoNumbers(3,4)
addTwoNumbers(3,"5")
addTwoNumbers(3,"a")
addTwoNumbers(3,null)

function logUserMessage(username = "sam"){
    if(username === undefined)
        // console.log("please enter a username  ");
    return
        
    return `${username} just logged in`
}
// console.log(logUserMessage("DIVyam"));
// console.log(logUserMessage());

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,500,200));

const user ={
    username : "divyam",
    price: 199
}
function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);   
}
// handleObject(user)

handleObject({
    username: "sam",
    price: 299
})

const myNewArray = [ 200, 400, 500, 200 ]
function returnSecondValue(getArray){
    return getArray[1]
}
console.log(returnSecondValue(myNewArray));
