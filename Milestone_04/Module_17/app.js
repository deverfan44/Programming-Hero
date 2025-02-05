let age = 23;
var friensNumbers = 12;

// let age = 120;
age = 120;

console.log("The age is:",age, "\nThe friends number is:", friensNumbers);

var brotherWeight = 80;
var sisterWeight = 60;
var fatherWeight = 70;
var myWeight = 95;

var totalWeight = brotherWeight+sisterWeight+fatherWeight+myWeight;
console.log("The total weight is:", totalWeight);

console.log(typeof totalWeight);

let name;
console.log(typeof name);

let fractionNum = 0.1;
console.log(fractionNum);
console.log(typeof fractionNum);

let char = 'A';
console.log(char);
console.log(typeof char);

let isTrue = true;
console.log(isTrue);
console.log(typeof isTrue);


let empty = null;
console.log(empty);
console.log(typeof empty);


// Check typeof 
console.log("\n\nCheck Typeof")
console.log(typeof 0)
console.log(typeof 10)
console.log(typeof "E")
console.log(typeof "Erfan")
console.log(typeof true)
console.log(typeof false)
console.log(typeof null)
console.log(typeof 10.2)
console.log(typeof 0.2)
console.log(typeof "")
console.log(typeof "10")


// Practice type 
console.log("\n\n");
let firstNum = 10;
let secondNum = 20;
let totalNum = firstNum + secondNum;

console.log("The total number is:", totalNum);
console.log("Typeof totalNum is:", typeof totalNum);

firstNum = "10";
secondNum = "20";
totalNum = firstNum + secondNum;
console.log("The total number is:", totalNum);
console.log("Typeof totalNum is:", typeof totalNum);


let firstName = "Md Arfatul Islam";
let lastName = "Erfan";
let fullName = firstName + " " + lastName;
console.log("The full name is:", fullName);
console.log("Typeof fullName is:", typeof fullName);

console.log("\n\n");

let num1 = "10";
let num2 = 20;
console.log(num2+num1); // type coercion
console.log(typeof (num2+num1));

console.log("10"+true);
console.log(typeof ("10"+true));

console.log("e"+true);
console.log(typeof ("e"+true));

console.log("e"+10.2);
console.log(typeof ("e"+10.2));


console.log(true);
console.log(typeof true);
console.log(true+true);
console.log(typeof (true+true));
console.log(false);
console.log(typeof false);
console.log(false+false);
console.log(typeof (false+false));


console.log(null+null);
console.log(typeof (null+null));

console.log(true+null);
console.log(typeof (true+null));
console.log(false+null);
console.log(typeof (false+null));

console.log(10+true);
console.log(typeof (10+true));

console.log(10.5+true);
console.log(typeof (10.5+true));


let check = null;
console.log(check);
console.log(typeof check);

console.log(10+20);

console.log("E"+"T");

console.log(10+"E");

console.log(undefined+undefined);
console.log(typeof (undefined+undefined));

console.log(10+undefined);
console.log(typeof (10+undefined));

console.log(10+null);
console.log(typeof (10+null));

console.log("Erfan" + undefined);
console.log(typeof ("Erfan" + undefined));

let test1 = 10;
let test2;
console.log(test1+test2);
console.log(typeof (test1+test2));

let para1 = "Karim";
let para2;
console.log(para1+para2);
console.log(typeof (para1+para2));

console.log(NaN + 10);
console.log(NaN + "er");

console.log(true + undefined);


console.log(20+15);
console.log(20+'15');
console.log(20+parseInt('15'));


let toost = "10";
console.log(typeof toost);
console.log(typeof parseInt(toost));

console.log(10+parseInt('10'));
console.log(10+parseInt('10.5'));
console.log(10+parseFloat('10.5'));

console.log(parseInt('12.5'));

console.log(parseFloat(10));



let float1 = 0.1;
let float2 = 0.2;
let totalFloat = float1+float2;
console.log(totalFloat);

console.log(0.1+0.2);
console.log((0.1+0.2).toFixed(2));
console.log(typeof (0.1+0.2).toFixed(2));
console.log(typeof parseInt((0.1+0.2).toFixed(2)));


console.log("\n\n");
let nmb1 = 0.1;
let nmb2 = 0.2;
let totalNmb = nmb1+nmb2;
console.log(totalNmb);
console.log(typeof totalNmb);

console.log(totalNmb.toFixed(2));
console.log(totalNmb.toFixed(4));
console.log(typeof totalNmb.toFixed(2)); // toFixed convert the number to string
console.log(typeof parseInt(totalNmb.toFixed(2)));


console.log("\n\n");
const diffNum = 5/0;
console.log(diffNum);
console.log(typeof diffNum);

console.log(50/0); // Positive Infinity
console.log(-50/0); // Negative Infinity


console.log("\n\n");

console.log("E");
console.log(parseInt('20.5'));
console.log(parseInt('E'));
console.log("Erfan");
console.log(parseInt(true));


console.log("\n\n");

console.log('20');
console.log(parseInt('20'));
console.log(Number('20'));
console.log(Number('20.3'));

console.log(parseInt(true));
console.log(Number(true));
console.log(Number(undefined));
console.log(parseInt(undefined));
console.log(parseInt(20.55));
console.log(Number(20.55));
console.log(Number('42px'));
console.log(parseInt('42px'));
console.log(parseInt(101,2));
console.log(Number(101,2));


console.log(parseInt(null));
console.log(Number(null));
console.log(Number(undefined));



console.log("\n\n");

console.log(20-10);
console.log(20-'10');
console.log('20'-'10');

console.log(parseInt('42px')-'10');

console.log(parseInt(''));
console.log(Number(''));
console.log(Number(null));
console.log(parseInt(null));
console.log(Number(undefined));
console.log(parseInt(undefined));

console.log(Number('0xFF'));
console.log(parseInt('0xFF'));

console.log(typeof null);
console.log(typeof 0);


console.log(isNaN(10));
console.log(isNaN('10'));
console.log(isNaN(parseInt('10')));
console.log(isNaN(parseInt('10ab')));
console.log(isNaN(parseInt('ab10')));
console.log(isNaN(Number('10ab')));

console.log(isNaN(4+'erfan'));


console.log("\n\n");

let biology = 75.25;
let chemistry = 65;
let physics = 80;
let math = 35.45;
let bangla = 99.50;

let average = (biology+chemistry+physics+math+bangla)/5;
console.log("The average is:", parseFloat(average.toFixed(2)));

console.log(isNaN('11'));
console.log(isNaN(2-10));