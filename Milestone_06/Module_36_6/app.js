// Type of Error 
// 1. SytaxError
// 2. TypeError
// 3. ReferenceError

// SyntaxError

// SyntaxErrror: Invalid or unexpected token
// let name = 'Erfan
// let for = 'Erfan';


// Unexpected identifier
// let person = {
//     name: 'erfan'
//     age: 10
// }

// let my Name = "erfan";

// Let myName = "Erfan";
// 
// let myName = "Er
// fan";

// let person = {
//     name: 'erfan',
//     age: 10

// let person = [1,20,30

// Unexpected number
// let person = [1,20 30]


// TypeError
// const myName = "Erfan";
// myName();

// const person = {
//     name: "Erfam",
// }
// console.log(person.age);

// let number = 34;
// console.log(number.toUpperCase());



// ReferenceError

// function sum() {
//     var result = 10+20;
// }
// sum();
// console.log(result);


// console.log(myName);
// let myName = "Erfan";

// console.log(x);


// // Practice
// const myName = "Arfautl";
// console.log(myName.substring(1,5));
// console.log(myName.substring(5,1)); // javascript automatically swap it

// console.log(myName.substr(2,4));


// let x = 0.1;
// let y = 0.2;
// let z = x + y;
// let w = (x*10+y*10)/10;
// console.log(z);
// console.log(w);


// let myName = 
// "Erfan";
// console.log(myName);

// let myName = "Er\
// fan";
// console.log(myName);


// let myObj = {};
// if(Object.keys(myObj).length == 0) {
//     console.log("object is empty");
// }
// else{
//     console.log("object is not empty");
// }


// let myName = "mom";
// let arrName = Array.from(myName);
// let reverseName = arrName.reverse().join("");

// if(myName == reverseName) {
//     console.log("palindrome");
// }
// else{
//     console.log("not palindrome");
// }

// let myName = "erfan";
// let reverseName = myName.split("").reverse().join("");

// if(myName == reverseName) {
//     console.log("palindrome");
// }
// else{
//     console.log("not palindrome");
// }


// let person = {
//     0: "Erfan",
//     1: 10,
//     length: 2
// }
// console.log(Array.from(person));
// console.log(person);



// coverted real array 
// function test() {
//     console.log(arguments);
//     let realArray = Array.from(arguments);
//     console.log(realArray);
// }

// test(1,2,3,4,5);



// const person = {
//     name: "Erfan",
//     age: 10,
//     isMale: true
// }
// debugger;

// console.log(person);
// console.error(person);
// console.dir(person);

// console.warn(person);

// console.table(person);

// const ans = "abc" + +"def";
// console.log(ans);



let test = function() {
    return "hello";
}
console.log(test());