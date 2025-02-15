'use strict';

// Problem 1 - Inch to Feet
// function inchToFeet(inch) {
//     const feetFraction = inch/12;
//     const intFeet = parseInt(feetFraction);
//     const floatFeet = feetFraction-intFeet;
//     const inc = floatFeet*12;
//     if(inc !== 0) {
//         return intFeet + " feet " + inc + " inch"
//     }
//     else return intFeet + " feet";
// }

// or and standard
// function inchToFeet(inch) {
//     const feetFraction = inch/12;
//     const intFeet = parseInt(feetFraction);
//     const inc = inch%12;
//     if(inc !== 0) {
//         return intFeet + " feet " + inc + " inch"
//     }
//     else return intFeet + " feet";
// }

// console.log(inchToFeet(75));
// console.log(inchToFeet(76));
// console.log(inchToFeet(60));
// console.log(inchToFeet(66));



// Problem - 2 Miles to km
//simple
// function milesToKm(mile){
//     return mile * 1.60934;
// }
// function milesToKm(mile){
//     const km = mile * 1.60934;
//     const intKm = parseInt(km);
//     const floatKm = km - intKm;
//     const meter = floatKm * 1000;
//     return intKm + " km " + meter.toFixed(2) + " meter.";
// }

// console.log(milesToKm(12));
// console.log(milesToKm(15));
// console.log(milesToKm(20));
// console.log(milesToKm(24));



// Problem 3 - Leap Year Check
// function isLeapYear(year) {
//     if((year%4==0 && year%100!=0) || (year%400==0)) {
//         return true;
//     }
//     else {
//         return false;
//     }
// }

// console.log(isLeapYear(1900));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(2021));
// console.log(isLeapYear(2022));
// console.log(isLeapYear(2023));
// console.log(isLeapYear(2024));
// console.log(isLeapYear(2025));
// console.log(isLeapYear(2026));
// console.log(isLeapYear(2027));
// console.log(isLeapYear(2028));


// Math Object
// const min = Math.min(10,20,12,15);
// console.log(min);

// const max = Math.max(10,20,12,15);
// console.log(max);

// console.log(Math.PI);
// console.log(Math.pow(2,4));
// console.log(Math.pow(5,3));
// console.log(Math.abs(-10));
// console.log(Math.abs(100));

// console.log('\n');
// console.log(Math.round(11.4));
// console.log(Math.round(11.3));
// console.log(Math.round(11.5));
// console.log(Math.round(11.6));

// console.log('\n');
// console.log(Math.floor(11.3));
// console.log(Math.floor(11.4));
// console.log(Math.floor(11.5));
// console.log(Math.floor(11.6));

// console.log('\n');
// console.log(Math.ceil(11.3));
// console.log(Math.ceil(11.4));
// console.log(Math.ceil(11.5));
// console.log(Math.ceil(11.6));
// console.log(Math.ceil(-4.2));


// console.log('\n');
// console.log(Math.sqrt(36));
// console.log(Math.sqrt(25));
// console.log(Math.sqrt(22));
// console.log(Math.round(Math.sqrt(22)));

// console.log('\n');
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random());
// console.log(Math.random()*10);
// console.log(Math.random()*20);

// console.log('\n');
// console.log(Math.trunc(10.1));
// console.log(Math.trunc(10.11));
// console.log(Math.trunc(10.11));
// console.log(Math.trunc(-55.99));
// console.log(Math.trunc(-5.10));

// console.log('\n');
// console.log(Math.sign(10));
// console.log(Math.sign(-10));
// console.log(Math.sign(-12));
// console.log(Math.sign(12));
// console.log(Math.sign(0));


// Date and Time 

// const today = new Date(2001, 10, 9);
// console.log(today);
// console.log(today.getDay());
// console.log(today.getMonth());
// console.log(today.getFullYear());

// today.setMonth(8);
// console.log(today);


// let x = 'a';
// let y = 20;
// [x,y] = [y,x];
// console.log(x, y);

// for (var i = 0; i < 5; i++) {
//     setTimeout(function () {
//     console.log(i);
// }, 100);
// }

function test(x,y) {
    console.log(typeof x);
    console.log(typeof y);
}

test(10);