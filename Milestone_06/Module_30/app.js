//Default Parameter
// function fullName(firstName, lastName="") {
//     const fullname = firstName + " " + lastName;
//     console.log(fullname);
//     console.log(fullname.length);
// }

// fullName("Md Arfatul Islam", "Erfan");
// fullName("Kamal", "Hasan");
// fullName("Jasim");


// function fullName(firstName, lastName) {
//     if(lastName == undefined) {
//         console.log(firstName);
//         console.log(firstName.length);
//     }
//     else{
//         const fullname = firstName + " " + lastName;
//         console.log(fullname);
//         console.log(fullname.length);
//     }
// }
    
    // fullName("Md Arfatul Islam", "Erfan");
    // fullName("Kamal", "Hasan");
    // fullName("Jasim");



// Templates Literal 
// let firstName = "Kamal";
// let lastName = "Hasan";
// // let fullName = firstName + " " + lastName;
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);


// let firstPara = "This is Bangladesh";
// let secondPara = "This is Australia";
// // let fullPara = firstPara + "\n" + secondPara;
// let fullPara = `${firstPara}
// ${secondPara}
// `
// console.log(fullPara);


// let para = `Hello This is Md Arfatul Islam
// My hobby is coding`;
// console.log(para);


// Arrow Function 
// function sum(num1, num2) {
//     return num1+num2;
// }

// const ans = sum(10,20);
// console.log(ans);

// const ans = (a,b) => a+b;
// console.log(ans(10,20));
// console.log(ans(30,20));

// const fullName = (firstName, lastName) => `${firstName} ${lastName}`;
// console.log(fullName("Kamal","Uddin"));
// console.log(fullName("Md Arfatul Islam","Erfan"));

// const nameWithAge = (name, age) => {
//     const result = `Your name is ${name} and age is ${age}`;
//     return result;
// } 
// console.log(nameWithAge("Md Arfatul Islam",23));


// Normal Function
// let showMyName = function() {
//     console.log("Md Arfatul Islam");
// }
// or 
// function showMyName(){
//     console.log("Md Arfatul Islam");
// }
// showMyName();

// Arrow Function 
// let showMyName = () => console.log("Md Arfatul Islam");
// showMyName();
// let showMyName = () => "Md Arfatul Islam";
// console.log(showMyName());


// Arrow functin with default parameter 
// let sum = (num1=0, num2=0) => num1+num2;
// console.log(sum(10,20));
// console.log(sum(10));


// Arrow Function with one parameter 
// let sum = a => a+50;
// console.log(sum(10));

//Argument not exist in arrow function
// let test = function(){
//     console.log(arguments);
// }

// test(10,20,40,50);


// let test = () => console.log(arguments);
// test(); // show an error

// Use of arrow function 
// document.getElementById('titles').addEventListener("click", ()=>{
//     console.log("Hello Javascript");
// })

// const friends = ["Rakib","Sakib","Jabbar","Halim"];
// console.log(friends);
// console.log(...friends);


// function countFriends(...friends){ // it's received by an array
//     console.log(...friends);
//     console.log(friends);
// }
// countFriends("Rakib","Sakib","Jabbar","Halim");


// const friends = ["Rakib","Sakib","Jabbar","Halim"];
// const newArray = ["Hero Alom", friends];
// // console.log(newArray);
// for(let item of newArray){
//     console.log(item);
// }

// const friends = ["Rakib","Sakib","Jabbar","Halim"];
// const newArray = ["Hero Alom", ...friends];
// console.log(newArray);

// for(let item of newArray){
//     console.log(item);
// }



// const numbers = [22,54,12,76,33,67];
// const mxNumber = Math.max(...numbers);
// console.log(mxNumber);
// const mnNumber = Math.min(...numbers);
// console.log(mnNumber);


// Concate two array 
// const arr1 = [2,3,4,5];
// const arr2 = [6,7,8,9];
// // const newArr = [...arr1, ...arr2];
// // console.log(newArr);

// const newArr = [arr1,arr2];
// console.log(newArr);


let student = {
    name: "Erfan",
    age: 24,
    isMale: true
}
let info = {
    nationality: "Bangladeshi",
    religion: "Islam"
}

let newStu = {...student, ...info};
console.log(newStu);


