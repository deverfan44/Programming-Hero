'use strict';

// Type casting 
// let age = 23;
// console.log(age);
// console.log(typeof age);

// age = age.toString();
// console.log(age);
// console.log(typeof age);

// console.log(age + 12);
// console.log(parseInt(age) + 12);


// Array

let info = ['apple', 23, 'orange', 102];
// console.log(info);
// console.log(typeof info);
// console.log(info[0]);
// console.log(typeof info[0]);
// console.log(typeof info[1]);

// console.log(info.length);

// info.push('banana');
// console.log(info);
// console.log(info.length);
// info.pop();
// console.log(info.length);
// console.log(info);


let numbers = [10,20,30,40];
// console.log(numbers);
// console.log(numbers.length);

// numbers.unshift(100);
// numbers.unshift(220);
// console.log(numbers);
// console.log(numbers.length);

// numbers.pop();
// console.log(numbers);
// console.log(numbers.length);

// numbers.shift();
// console.log(numbers);
// console.log(numbers.length);


// console.log(numbers);
// numbers.push(55,66,77);
// console.log(numbers);
// console.log(numbers.length);


// console.log(numbers);
// let store = numbers.pop();
// console.log(numbers);
// console.log(store);


let arr = [1, 3, 6, 7, 9, 11, 10.5];

// console.log(arr);
// // Checking
// console.log(arr.includes(20));
// console.log(arr.includes(10));
// console.log(arr.includes(10.5));
// console.log(arr.includes(1));

// let friends = ['karim','rahim','jamal','kamal'];

// if(friends.includes('jabbar')){
//     console.log("Yes we can enjoy party");
// }
// else{
//     console.log("Opps! we cannot enjoy");
// }


// let test = [10,20,30,40,10,50];
// console.log(test.indexOf(20));
// console.log(test.indexOf(50));
// console.log(test.indexOf(10));
// console.log(test.indexOf(100));

// let practice = [10,20,30];
// let testing = []
// let nums = "Erfan";
// let toster = null;
// console.log(Array.isArray(practice));
// console.log(Array.isArray(testing));
// console.log(Array.isArray(nums));
// console.log(Array.isArray(toster));

// calculate BMI 

// let info1 = ['Erfan',67,1.7018];

// let bmi = info1[1] / (info1[2]**2);

// if(bmi <= 18.4) {
//     console.log(`Your bmi is ${bmi} and your condition is underweight`);
// }
// else if((bmi >= 18.5) && (bmi <= 24.9)) {
//     console.log(`Your bmi is ${bmi} and your condition is normal`);
// }
// else if((bmi >= 25) && (bmi <= 39.9)) {
//     console.log(`Your bmi is ${bmi} and your condition is overweight`);
// }
// else {
//     console.log(`Your bmi is ${bmi} and your condition is obese`);
// }


// let names = ['Md', 'Arfatul', 'Islam', 'Erfan'];
// let fullName = names.join('-');
// console.log(names);
// console.log(fullName);
// console.log(typeof fullName);

// let firstArr = [10,20,30];
// let secondArr = [40,50,60];

// let concateArr = firstArr.concat(secondArr);
// console.log(concateArr);
// console.log(concateArr.length);

// let sliceArr = concateArr.slice(2,5);
// console.log(sliceArr);

// let diffconcate = secondArr.concat(firstArr);
// console.log(diffconcate);


// console.log(Number(null));
// console.log(Number(undefined));

// console.log(null == undefined);
// console.log(null == 0);
// console.log(null == "");
// console.log(Number(""));

// console.log(null === undefined);
// console.log(null == undefined);


// console.log("10"==10);
// console.log("10"===10);


// comma operator 

// let number = (5+2,7+1,9+10);
// console.log(number);

// let myName = ('Erfan','Karim');
// console.log(myName);


// nulish operator ?? 
// let testFood = "apple" ?? "orange";
// console.log(testFood);

// testFood = null ?? "tomato";
// console.log(testFood);

// testFood = null ?? "papaya" ?? "banana";
// console.log(testFood);

// testFood = null ?? null ?? "banana";
// console.log(testFood);

// let test1 = "erfan";
// let test2 = "erfan";
// console.log(test1==test2);

// test1 = Symbol("erfan");
// test2 = Symbol("erfan");
// console.log(test1==test2);

// let test = Symbol();
// console.log(test);
// console.log(typeof test);

// let firstName = Symbol("Arfatul");
// console.log(firstName);
// console.log(typeof firstName);
// console.log(firstName.description);
// console.log(typeof firstName.description);


// let myName = "Erfanss";
// console.log(myName);
// console.log(myName.length);

let userName = prompt("Enter a unique username: ");
let userLength = userName.length;

if(userName==""){
    console.log("Please enter username");
}
else{
    if(!(userLength < 3 || userLength > 5)){
        console.log(`Successfully add your username ${userName}`);
    }
    else{
        console.log(`Your userName is Invalid`);
    }
}