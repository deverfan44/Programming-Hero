'use strict';

// Write a Function to check a number is odd or even 
// function isEvenOrOdd(num) {
//     // if(num == 0) return "0";
//     // else if(num % 2 == 0) {
//     //     return "Even";
//     // }
//     // else{
//     //     return "Odd";
//     // }

//     // shortcut
//     // let ans;
//     // (num == 0) ? ans = '0': (num%2 == 0) ? ans="Even": ans="Odd";
//     // return ans;

//     // more shortcut 
//     return num == 0 ? '0' : (num % 2 == 0 ? 'Even' : 'Odd');
// };

// console.log(isEvenOrOdd(10));
// console.log(isEvenOrOdd(11));
// console.log(isEvenOrOdd(12));
// console.log(isEvenOrOdd(0));
// console.log(isEvenOrOdd(555));


// function sum(num1, num2, num3) {
//     return num1+num2+num3;
// }

// console.log(sum(10,20,10));
// console.log(sum(10,20));
// console.log(sum(10,20,5,15));



// Array Sum
// function arraySum(arr) {
//     let sum = 0;
//     for(let i=0; i<arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }

// let numbers = [1,2,3,4,5];
// console.log(arraySum(numbers));


// Modify array return
// function arraySum(arr) {
//     for(let i=0; i<arr.length; i++) {
//         arr[i] += 5;
//     }
//     return arr;
// }

// let numbers = [1,2,3,4,5];
// console.log(arraySum(numbers));


// Avg numbers of students and it's a best practice
// function StudentCreate(name, id, chem, bio, math) {
//     let Student = {
//         name, // it's mean name: name,
//         id,
//         marks: {
//             chem,
//             bio,
//             math
//         }
//     }
//     return Student;
// }

// function avgMarks(std1) {
//     let sum = 0;
//     for(let mark of Object.values(std1.marks)) {
//         sum += mark;
//     }

//     let avg = sum / Object.keys(std1.marks).length;
//     return avg;
// }
// let std1 = StudentCreate('Erfan','1001', 88, 90, 85);
// let std2 = StudentCreate('Tanim','1002', 90, 88, 85);
// let std3 = StudentCreate('Karim','1003', 75, 66, 55);

// console.log(avgMarks(std1).toFixed(2));
// console.log(avgMarks(std2));
// console.log(Number(avgMarks(std3).toFixed(2)));




// Return All Even Number from an array by function
function evenNumbers(arr) {
    let newArr = [];
    for(let i=0; i<arr.length; i++) {
        if(arr[i]%2 == 0) {
            newArr.push(arr[i]);
        }
    } 

    return newArr;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(evenNumbers(arr));
