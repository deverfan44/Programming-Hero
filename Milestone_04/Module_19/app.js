'use strict';
// let myName;
// // const myName; // show an error 

// if(true) {
//     var age = 24;
//     let heigth = 5.7;
//     const weight = 67;
// }
// console.log(age);
// // console.log(heigth); // show an error
// // console.log(weight); // show an error


// constant variable 
// const age = 23;
// const arr = [10,20,30,40];
// console.log(arr);
// arr[1]=255;
// console.log(arr);

// arr = [10,255,34,40]; // show an error
// console.log(arr);


// Looping

//For of Loop

// const arr =[1,2,3,4,5,6];
// for(let x of arr) {
//     console.log(x);
// }

// let sum = 0;
// for(let x of arr){
//     sum = sum + x;
// }
// console.log("The sum is: " + sum);


// const fruits = ['mango', 'apple', 'banana'];
// let concate=fruits[0];
// for(let fruit of fruits){
//     if(fruit != fruits[0]){
//         concate = concate + " " + fruit;
//     }
// }
// console.log(concate);
// console.log(typeof concate);



// While loop
// let number = 1;
// while(number < 10){
//     console.log(number);
//     number++;
// }


// Print Odd Numbers
// let num = 1;
// while(num <= 20){
//     if(num%2 != 0){
//         console.log(num);
//     }
//     num++;
// }

// Display sum of all the odd numbers from 81 to 131.
// let num = 81;
// let sum = 0;
// while(num <= 131) {
//     if(num%2 !=0 ){
//         sum += num;
//     }
//     num++;
// }
// console.log(sum);

// As Ersa is learning now, she wants to explore more and more. Tell Ersa to generate a multiplication table for number 5

// let num = 1;
// while(num <= 10) {
//     console.log(`5 * ${num}` + " = " +  num*5);
//     num++;
// }


// Implement a countdown timer that counts down from 21 to 15.
// let count = 21;
// while(count >= 15){
//     console.log(count);
//     count--;
// }


// For Looping 
// for(let i=1; i<=10; i++) {
//     console.log(i);
// }


// // Trim() function 
// let firstName = "    Md Arfatul Islam Erfan";
// console.log(firstName.trim());

// let myName = prompt("Enter your name: ");
// console.log(myName);
// console.log(myName.trim());

// break 
// check 12 is exists or not 
// let numbers = [1,2,5,7,9,11,17,19];
// let flag = false;
// for(let i=0; i<numbers.length; i++){
//     if(numbers[i]==12){
//         flag=true;
//         break;
//     }
// }

// flag ? console.log("12 is exist") : console.log("12 is not exist");

// console.log(numbers.includes(12)); // shortcut 


// let x = 1;
// let sum = 0;
// while(sum < 100) {
//     sum+=x;
//     x+=10;
// }
// console.log(sum);






// do while loop 
// let i = 5;
// do {
//     console.log(i);
//     i++;
// } while(i<10);

