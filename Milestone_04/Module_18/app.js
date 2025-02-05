// // Revision 

// console.log(10*2);
// console.log('10'*2);
// console.log('10'*'2');
// console.log('10'*'2a');
// console.log('10'*parseInt('2a'));
// console.log('10'+2);

// console.log(10/2);
// console.log(10%2);
// console.log(11%2);
// console.log(10**2);



// Comparison Operators

// console.log(10==10);
// console.log(10=='10');
// console.log(10==='10');
// console.log(10===10);
// console.log('10'==='10');
// console.log('10'==='10a');
// console.log(10 === parseInt('10a'));


// Discount Calculation
// const buyPrice = 5300;

// if(buyPrice >= 5000) {
//     console.log('You got 10% discount');
//     const discount = buyPrice * (10/100);
//     const payAmount =  buyPrice - discount;
//     console.log('You have to pay: ' + payAmount);
// }
// else if (buyPrice >= 3000) {
//     console.log('You got 5% discount');
//     const discount = buyPrice * (5/100);
//     const payAmount =  buyPrice - discount;
//     console.log('You have to pay: ' + payAmount);
// }
// else {
//     console.log('No discount');
//     console.log('You have to pay: ' + buyPrice);
// }



// Ternary Operator 

// Are you Passed
let marks = 45;
let result = (marks >= 33) ? "pass":"Fail";
console.log(result);

// Can voteing 
let age = 11;
console.log((age >= 18) ? "You can vote":"You cannot attend voteing");
age = 19;
age >= 18 ? console.log("You can attend voteing"):console.log("You cannot attend voteing");

// Nested Ternary 
let amount = 2800;
(amount >= 2500) ? console.log((amount>=3000) ? "Can go Cox's and Inani": "Can go only cox's") :  console.log("Cannot go cox's");