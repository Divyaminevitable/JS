// singleton
// objject.create

// object literals
const mySym = Symbol("key1")    // for using symbol u have to create a key

const JsUser ={
    name : "Divyam",
    age : 20,
    email: "divyam@gmail.com",
    [mySym] : "mykey1",
    location : "Noida"
}

console.log(JsUser.name);
console.log(JsUser["location"]);
console.log(JsUser.mySym);
console.log(typeof(mySym));

JsUser.email ="div@gmail.com"
// Object.freeze(JsUser)

console.log(JsUser);
JsUser.greeting = function(){
    console.log("Hello Js user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello Js user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());

