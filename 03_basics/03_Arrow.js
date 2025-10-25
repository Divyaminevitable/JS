const user ={
    username: "divyam",
    price: 99,

welcomeMessage: function() {
    console.log(this);
    
    console.log(` ${this.username}, welcome to website`);
}
}
// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
    
// }
// chai()

// const chai = function(){
//     let username = "divyam"
//     console.log(this.username);   
// }

// const chai = () => {                   }
//     let username = "divyam"            }--- basic arrow function
//     console.log(this);                 }
// }
// chai()

//              Implicit return
// if u use curly braces then u have to write return but in parenthesis() or without the bracket u don't have to write return in arrow function

// const addTwo = (num1, num2) => num1 + num2

const addTwo = (num1, num2) => {username: "divyam"}
// const addTwo = (num1, num2) => ({username: "divyam"}) 
// object ko return krne ke liye parethesis () mei wrap krna hi hoga

console.log(addTwo(3,4));
