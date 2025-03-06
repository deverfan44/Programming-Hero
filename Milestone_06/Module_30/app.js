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


// let student = {
//     name: "Erfan",
//     age: 24,
//     isMale: true
// }
// let info = {
//     nationality: "Bangladeshi",
//     religion: "Islam"
// }

// let newStu = {...student, ...info};
// console.log(newStu);


// Distructuring 
// let student = {
//     name: "Md Arfatul Islam",
//     age: 24,
//     nationality: "Bangladesh",
//     isMale: true
// }

// const stdName = student.name;
// const stdAge = student.age;
// const stdNationality = student.nationality;
// const stdIsMale = student.isMale;
// console.log(stdName);
// console.log(stdIsMale);

// const {name, age, isMale, nationality} = student;
// console.log(name);
// console.log(nationality);
// console.log(isMale);


// Array Distructuring
// const friends = ["Erfan","Jamil","Kamal",{info:"Different type of friends", number: 3}];
// const [scientice, doctor, pilot, details] = friends;
// console.log(scientice);
// console.log(doctor);
// console.log(pilot);
// console.log(details);


const vehicles = ['BMW','Suzuki','Mahindra Truck'];
// const [car, motorbike, truck] = vehicles;

// console.log(vehicles[0]);
// console.log(vehicles[1]);
// console.log(vehicles[2]);

// console.log(car);
// console.log(motorbike);
// console.log(truck);

// if we need only car and truck 
// const [car, ,truck] = vehicles;
// console.log(car);
// console.log(truck);


// UseCase of Distructuring 
// function calculate(num1, num2) {
//     const add = num1+num2;
//     const mul = num1*num2;
//     const sub = num1-num2;
//     const division = num1/num2;

//     return [add, mul, sub, division];
// }

// const result = calculate(10,5);
// console.log(result);

// const [addition, multiflication, subtraction, division] = calculate(10,5);
// console.log(addition);
// console.log(multiflication);
// console.log(subtraction);
// console.log(division);




// function bmiCalculate({height,age}){
//     return height*(age*age);
// }

// const student = {
//     name: "Md Arfatul Islam",
//     height: 5.7,
//     age: 23,
//     religion: "Islam"
// }

// const result = bmiCalculate(student);
// console.log(result);


// Object entries
// let car = {
//     model: "BMW",
//     year: 2021,
//     color: ['black','yellow','red']
// }

// console.log(Object.entries(car));
// for(let arr of Object.entries(car)) {
//     console.log(car[arr[0]]);
// }


// object seal

// let student = {
//     name: "Md Arfatul Islam",
//     age: 24,
// }
// delete student.age;
// console.log(student);

// student.nationality = "Bangladeshi";
// console.log(student);

// console.log(Object.isSealed(student)); // it's checked object is seal or not

// Object.seal(student); // Object is sealed in this line
// student.color = 'Choklet'; // it's not add in object because this object is already seal
// delete student.name; // it's not delete because this object is already seal
// console.log(student);

// console.log(Object.isSealed(student));

// student.name = "tanim";
// console.log(student); // After sealed modifications is allowed



// object preventExtension
// let student = {
//     name: "Md Arfatul Islam",
//     age: 24,
// }
// Object.preventExtensions(student);
// student.name = "Karim";
// console.log(student); // Afted preventExtension modifications is allowed

// student.height = 5.7;
// console.log(student); // After preventExtension addition is not allowed

// delete student.age;
// console.log(student); // After preventExtention deletion is allowed


// Object freeze 
// let student = {
//     name: "Md Arfatul Islam",
//     age: 24,
// }
// Object.freeze(student);
// student.name = "Rahim"; // After freeze modifcation, addition, deletion not allowed
// console.log(student);


// Object seal in array 
// const  fruits = ['orange', 'mango','banana'];
// Object.seal(fruits);
// fruits[1] = 'Jackfruits';
// console.log(fruits); // After sealed modification is allowed but addition and deletion is not allowed

// fruits.push("Gauva"); // it's show an error
// console.log(fruits);


// Object freeze in array 

// const  fruits = ['orange', 'mango','banana'];
// Object.freeze(fruits);

// fruits[1] = "jackfruits"; // it's not work because array is already freeze
// console.log(fruits);