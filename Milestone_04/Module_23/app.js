'use strict';

// Problem 1 -- Max value in an array
// function getMaxHeight(height) {
//     let maxheight = height[0];
//     for(let val of height) {
//         maxheight = Math.max(maxheight,val);
//     }
//     return maxheight;
// }

// let height = [10,32,55,66,12,25];
// console.log("MaxHeight is: ",getMaxHeight(height));


// Problem - 2  Buy Cheapest Phone
// function developPhone(brand, model, price) {
//     const phone =  {
//         brand, // it's mean brand = brand;
//         model,
//         price
//     }
//     return phone;
// }
// function buyCheapPhone(allPhone) {
//     let buyPhone = allPhone[0];
//     for(let obj of allPhone) {
//         if(obj.price < buyPhone.price) {
//             buyPhone = obj;
//         }
//     }

//     return buyPhone;
// }

// const phone1 = developPhone('Redmi','10s', 22000);
// const phone2 = developPhone('Infinix','30pro', 28000);
// const phone3 = developPhone('Redmi','12+', 28000);
// const phone4 = developPhone('Samsung','SS', 12000);
// const phone5 = developPhone('Apple','12pro', 70000);

// const allPhone = [phone1, phone2, phone3, phone4, phone5];

// console.log(buyCheapPhone(allPhone));



// Problem 3 -- TotalCost of Products
// function addToCart(productName, price, quantity) {
//     let product = {
//         productName,
//         price,
//         quantity
//     }
//     return product;
// }
// function totalCartCost(products) {
//     let totalAmout = 0;
//     for(let product of products) {
//         let amount = product.price * product.quantity;
//         totalAmout += amount;
//     }
//     return totalAmout;
// }


// let product1 = addToCart('Comic Book', 1200, 2);
// let product2 = addToCart('Pen', 15, 6);
// let product3 = addToCart('Shoes', 1800, 1);
// let product4 = addToCart('T-shirts', 600, 3);

// const products = [product1, product2, product3, product4];
// let totalAmout = totalCartCost(products);
// console.log("Your total amount is: ", totalAmout);




// Write a function to convert temperature from Celsius to Fahrenheit. 
// function celciusToFeren(celcius) {
//     let ferenheight = (celcius * (9/5)) + 32;
//     return ferenheight;
// }

// console.log(celciusToFeren(32));
// console.log(celciusToFeren(20));




// You are given an array of numbers. Count how many times the a number is repeated in the array.
// function findNumbers(arr, k) {
//     let count = 0;
//     for(let val of arr) {
//         if(val == k) count++;
//     }
//     return count;
// }


// let arr = [10,20,5,10,22,10,5];
// console.log(findNumbers(arr,5));
// console.log(findNumbers(arr,10));
// console.log(findNumbers(arr,22));
// console.log(findNumbers(arr,25));




// Write a function to count the number of vowels in a string.
// function vowelCount(str) {
//     let count = 0;
//     str = str.toLowerCase();
//     for(let ch of str) {
//         if(ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u') {
//             count++;
//         }
//     }

//     return count;
// }

// let str = 'Erfaan';
// console.log(vowelCount(str));



// Write a function to find the longest word in a given string. 
// function longestWord(str) {
//     let arr = str.split(" ");
//     let longWord = arr[0];
//     for(let x of arr) {
//         if(x.length > longWord.length) {
//             longWord = x;
//         }
//     }

//     return longWord;
// }


// let str = "I am learning Programming to become a programmer";
// console.log(longestWord(str));




// Generate a random number between 10 to 20.
// console.log(Math.random());
// console.log((Math.random()*10)+10);



// Explore Array 

// let numbers = [10,20,30,40];
// let leng = numbers.length;
// console.log(Array.isArray(numbers));
// console.log(Array.isArray(leng));

// console.log(numbers[6]); // it's return undefined 


// Array join 
// let fruits = ['apple','mango'];

// console.log(fruits.join());
// console.log(fruits.join(" "));
// console.log(fruits.join("-"));
// console.log(fruits.toString());

// Delete
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// delete fruits[1];
// console.log(fruits);
// console.log(fruits.length);
// console.log(fruits.length);
// console.log(fruits[1]);


// slice 
// let numbers = [10,20,30,40,50,60];
// console.log(numbers.slice(2));
// console.log(numbers.slice(1));
// console.log(numbers.slice(2,4));
// console.log(numbers.slice(0,-3));
// console.log(numbers.slice(-1,-4));
// console.log(numbers.slice(-1));
// console.log(numbers.slice(-2));
// console.log(numbers.slice(-3));


// splice
// let numbers = [10,20,30,40,50,60,70];
// console.log(numbers.splice(1,3));
// console.log(numbers);

// let numbers = [10,20,30,40,50,60,70];
// numbers.splice(2,1);
// console.log(numbers);


// toSpliced()
// let numbers = [10,20,30,40,50,60,70];
// console.log(numbers.toSpliced(2,3));
// console.log(numbers);


// indexof 
// let numbers = [10,20,30,40,50,60,30,70,30];
// console.log(numbers.indexOf(30));
// console.log(numbers.indexOf(30,2));

// Last index of
// let numbers = [10,20,30,10,40];
// console.log(numbers.lastIndexOf(10));
// let idx = numbers.lastIndexOf(10);
// console.log(numbers);
// numbers.splice(idx,1);
// console.log(numbers);

// Form 
// let str = "Hello Erfan";
// let arr = Array.from(str);
// console.log(arr);

// reverse 
// let numbers = [10,20,30,40];
// console.log(numbers.reverse());
// console.log(numbers);



// Problem Practice 2
// Find the friend with the smallest name. if same size more, print last one
// function smallestName(heights) {
//     let count = heights.at(0).length; // height[0].length
//     let small = heights.at(0);
//     for(let item of heights) {
//         if(count >= item.length) {
//             small = item;
//             count = item.length;
//         }
//     }
//     return small;
// }

// const heights = ['rahim', 'robin','ran', 'rafi', 'ron', 'rashed'];
// console.log(smallestName(heights));

// Your task is to calculate the total budget required to buy electronic
// let laptopPrice = 35000;
// let tabletPrice = 15000;
// let mobilePrice = 20000;
// function calculateElectronicsBudget(laptop, tablet, mobile) {
//     let forlaptop = laptop*laptopPrice;
//     let fortablet = tablet*tabletPrice;
//     let formobile = mobile*mobilePrice;
    
//     return forlaptop+fortablet+formobile;
// }

// console.log("Your total price is:", calculateElectronicsBudget(3,2,1));
// console.log("Your total price is:", calculateElectronicsBudget(2,2,2));



// You are given an array of phone objects, each containing information about the model, brand, and price. Your task is to write a JavaScript function named findAveragePhonePrice that takes this array as input and returns the average price of phone.

// function findAveragePhonePrice(phones) {
//     let sum = 0;
//     let leng = phones.length;
//     for(let item of phones) {
//         sum += item.price;
//     }
//     return sum/leng;
// }

// const phones = [
//     { model: "PhoneA", brand: "Iphone", price: 95000 },
//     { model: "PhoneB", brand: "Samsung", price: 40000 },
//     { model: "PhoneC", brand: "Oppo", price: 26000 },
//     { model: "PhoneD", brand: "Nokia", price: 35000 },
//     { model: "PhoneE", brand: "Iphone", price: 105000 },
//     { model: "PhoneF", brand: "HTC", price: 48000 },
// ];

// console.log("Average is: ", findAveragePhonePrice(phones).toFixed(2));


// For each employee their current salary is calculated by multiplying yearly increment with experience then adding the result to the starting salary. Now calculate is the total salary has to be provided by the company in a month.

// function totalSalary(employees) {
//     let total = 0;
//     for(let employee of employees) {
//         total += (employee.starting + (employee.increment * employee.experience));
//     }

//     return total;
// }

// const employees = [
//     { name: "shahin", experience: 5, starting: 20000, increment: 5000 },
//     { name: "shihab", experience: 3, starting: 15000, increment: 7000 },
//     { name: "shikot", experience: 9, starting: 30000, increment: 1000 },
//     { name: "shohel", experience: 0, starting: 29000, increment: 4000 },
// ];

// console.log("Provided total salary in one month is: ", totalSalary(employees));