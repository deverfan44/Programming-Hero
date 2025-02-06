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
// let marks = 45;
// let result = (marks >= 33) ? "pass":"Fail";
// console.log(result);

// // Can voteing 
// let age = 11;
// console.log((age >= 18) ? "You can vote":"You cannot attend voteing");
// age = 19;
// age >= 18 ? console.log("You can attend voteing"):console.log("You cannot attend voteing");

// // Nested Ternary 
// let amount = 2800;
// (amount >= 2500) ? console.log((amount>=3000) ? "Can go Cox's and Inani": "Can go only cox's") :  console.log("Cannot go cox's");


// String and Backtic 

// let  myName = 'Erfan';
// console.log(myName);

// myName = "Erfan";
// console.log(myName);

// myName = "Erfaan's";
// console.log(myName);

// myName = 'Erf"aa"n';
// console.log(myName);

// myName = 'Erfaan's'; // show an error
// console.log(myName);

// myName = 'Erfaan\'s';
// console.log(myName);

// myName = "Erfaan\"s";
// console.log(myName);

// Backtic 

// let fullName = `Arfatul Islam`;
// console.log(fullName);

// let age = 23;
// let myName = `Erfan ${age}`;
// console.log(myName);

// let firstName = "Arfatul";
// let lastName = "Erfaan";
// let fullName = `${firstName} ${lastName}`;
// console.log(fullName);

// let myName = "Erfan";
// let age = 23;
// let height = 5.7;
// let food = "Burger";

// // let details = "My name is " + myName + " My age is " + age + " My heigth is " + height + "In My favorite fodo is " + food;

// // use backtick 
// let details = `My name is ${myName} My age is ${age} My height is ${height}IN My favorite food is ${food}`;
// console.log(details);



// Null Data Type 

// let user = prompt("Enter your name:");
// if(user == ""){
//     user = null;
// }

// if(user === null){
//     console.log("No user is logged in");
// }
// else{
//     console.log(user + " User is logged in");
// }


// undefined 
// let myName = "Erfaan";
// myName = undefined;

// console.log(myName);
// console.log(typeof myName);


// switch case 
// let theme = null;
// theme = prompt("Enter your theme: ");

// switch(theme){
//     case "dark":
//         console.log("Active dark theme");
//         break;
//     case "light":
//         console.log("Active light theme");
//         break;
//     case "blue":
//         console.log("Active blue theme");
//         break;
//     default:
//         console.log("Active system theme");
// }

