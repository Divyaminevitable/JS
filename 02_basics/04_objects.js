// const tinderUser = new Object() //singleton object 

const tinderUser = {} // non singleton object

tinderUser.id = "123abc"
tinderUser.name ="sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularuser ={
    email: "some@gmail.com",
    fullname:{
       userfullname:{ 
        firstname: "div",
       lastname: "sharma"
    }
    }
}
// console.log(regularuser.fullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2)

// "..." is spread operator

const obj3 = {...obj1, ...obj2}
// console.log(obj3); 


const users = [
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
    {
        id:1,
        email: "h@gmail.com"
    },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //************************imp syntax ********************/
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));

const course = {
    coursename: "Js",
    price: "999",
    courseInstructor: "hitesh"
}

// console.log(course.courseInstructor);

const {courseInstructor : instructor} = course

console.log(instructor);

// {
//     name: "hitesh",
//     price: "free",
//     coursename: "js"
// }

