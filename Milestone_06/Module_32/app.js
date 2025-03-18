// Primitive and Non Primitive Data Type

// Example of Primitive
// function changeName(myName) {
//     console.log(myName);
//     myName = "Tanim";
//     console.log(myName);
// }

// const myName = "Erfan";

// changeName(myName);

// console.log(myName);


//Example of reference

// function change(arr) {
//     arr[0]=100;
// }

// const arr = [20,30,40];
// change(arr);

// console.log(arr);



// const myName = ['Md','Arfatul','Islam','Erfan'];
// console.log(myName);

// const concatName = myName.join(" ");
// console.log(concatName);

// const divideName = concatName.split(" ");
// console.log(divideName);


// const myName = "Erfan";
// const reversedName = myName.split("").reverse().join("");
// console.log(reversedName);
// console.log(typeof reversedName);



// null vs undefined 
// let myName;
// let myAge = null;

// console.log(myAge)
// console.log(myName)

// console.log(null == undefined);
// console.log(Number(null));
// console.log(Number(undefined));

// console.log(null==null);
// console.log(undefined==undefined);
// console.log(null==undefined);

// console.log(null == false);
// console.log(null == 0);
// console.log("" == 0);


// console.log(Number(false));


// Truty vs Falsy 

// if(false) {
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }

// if(0) {
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }

// if(null) {
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }

// if("") {
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }

// if(undefined) {
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }

// if(undefined) {
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }

// if(NaN) {
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }

// if("0"==0) {
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }
// if("0"===0) {
//     console.log("This is true");
// }
// else{
//     console.log("This is false");
// }


// function myName(){
//     return 2;
// }

// console.log(typeof myName);




// == vs === 
// console.log(2 == "2");
// console.log(2 === "2");

// console.log(null == undefined);
// console.log(null === undefined);

// console.log(1 == true);
// console.log(1 === true);

// console.log(2 == true);

// console.log(0 == false);
// console.log(0 === false);


// console.log([]==[]); // it's return false because it's check their reference
// console.log({}=={});


// console.log(5 * "2");
// console.log("5" * "2");
// console.log("5" * "2a");


// Hosting 

// function sum(num1, num2) {
//     // var automatically defined variable to the top of the function
//     // var result2; 

//     console.log(result2);
//     // console.log(result1); // it's show an error 
//     const result1 = num1+num2;
//     if(true) {
//         var result2 = num1*num2;
//     }
    
//     console.log(result2);

// }


// sum(10,20);




// console.log(myName); // Show an error
// const myName = "Erfan";
// console.log(myName);


// console.log(myName);
// var myName = "Erfan";
// console.log(myName);



// console.log(myName);
// let myName = "Erfan";
// console.log(myName);



// closure 

// function sum() {
//     let  counter = 0;
//     return function () {
//         counter += 1;
//         console.log(counter);
//     }
// }

// // // sum()(); // it's not work properly
// // // sum()(); // it's not work properly

// const result = sum();
// result();
// result();
// result();
// result();

// const result2 = sum();
// result2();
// result2();

// result();



// CallBack Function 

// function test(newFun, name) {
//     newFun(name);
// }

// function newFun(name) {
//     console.log("This is my name: ", name);
// }

// test(newFun, "Md Arfatul Islam");



// Function Arguments
// function sum(a,b,c) {
//     let sum = 0;
//     for(let val of arguments) {
//         sum += val;
//     }
//     console.log(sum);
// }

// sum(10,20,30,40,50,60,70);



// function sum(a,b,c, ...args) {
//     console.log(a,b,c);
//     console.log(args);
//     console.log(...args);
// }

// sum(10,20,30,40,50,60,70);


// function sum() {
//     // We don't apply map , filter etc in arguments because it's not a direct array, it's array like object
//     // Solution
//     let newArr = [];
//     for(let val of arguments) {
//         newArr.push(val);
//     }

//     newArr.map(val => console.log(val));
//     const resutl = newArr.find(val => val==30);
//     console.log(resutl);
// }

// sum(10,20,30,40,50,60,70);


// function sum() {
//     // We don't apply map , filter etc in arguments because it's not a direct array, it's array like object
//     // Solution
//     let newArr = [...arguments];
//     console.log(arguments);
//     console.log(newArr);
// }

// sum(10,20,30,40,50,60,70);



// let a = 0;
// let b = 2 + ++a;

// console.log(b);
// console.log(a);








