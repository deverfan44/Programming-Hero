// String 

// const myName = "Erfan";
// const country = 'Bangladesh';
// const district = `Bramanbaria`;
// const friut = new String("mango");

// console.log(myName)
// console.log(country)
// console.log(district)
// console.log(friut)
// console.log(typeof friut)


// const fullName = ['e','r','f','a','n'];
// console.log(fullName.length);
// console.log(fullName[0]);
// console.log(fullName[3]);
// fullName[3] = 'k';
// console.log(fullName);

// const myName = 'erfan';
// console.log(myName.length);
// console.log(myName[0]);
// console.log(myName[3]);
// myName[3]='k';
// console.log(myName);


// let fristFriut = 'Mango';
// let secondFriut = 'mango';
// console.log(fristFriut == secondFriut);
// console.log(fristFriut.toLowerCase() == secondFriut.toLowerCase());

// console.log(fristFriut.toLowerCase());


// let username = prompt("Enter your username: ");
// if(username !== null && username!==""){
//     console.log("Hello " + username);
// }
// else{
//     console.log("Please enter your username");
// }


// let firstName = 'erfan  ';
// let lastName = 'erfan';
// console.log(firstName===lastName);
// console.log(firstName.trim()===lastName.trim());


// let firstName = 'Erfan  ';
// let lastName = 'erfan';
// console.log(firstName===lastName);
// console.log(firstName.trim().toLowerCase()===lastName.trim().toLowerCase());


// let country = 'Bangladesh';
// console.log(country.slice(1,5));
// console.log(country.slice(0,3));
// console.log(country.substring(1,5));
// console.log(country.slice(1,5) === country.substring(1,5))


// let wordArea = "South Pahartoli";
// let district = "Hathazari";

// let address = wordArea.concat(" ",district);
// console.log(address);


// const info = "My name is Erfan";
// console.log(info.split(" "));

// let tmp = info.split(" ");
// console.log(tmp);
// for(let i=0; i<tmp.length; i++){
//     console.log(tmp[i]);
// }



// const country = "Bangladesh";
// let arrCountry = country.split("");
// console.log(arrCountry);

// const fruits = 'mango,banana,jackfruit,papaya';
// const fruitArr = fruits.split(',');
// console.log(fruitArr);
// for(let fruit of fruitArr){
//     console.log(fruit);
// }


// const fruitArr = ['mango','banana','tomato'];
// let tmp = fruitArr.join();
// console.log(tmp);
// tmp = fruitArr.join(" ");
// console.log(tmp);
// tmp = fruitArr.join("-");
// console.log(tmp);


// Reverse 
// const country = 'Bangladesh';
// for(let i=country.length-1; i>=0; i--){
//     console.log(country.at(i));
// }
// console.log(country.replaceAll('a','k'));
// console.log(country);

// let reverseStr = "";
// for(let x of country) {
//     reverseStr = x + reverseStr;
// }
// console.log(reverseStr.trim());



// const country = 'Bangladesh';
// const reverseCountry = country.split('').reverse();
// console.log(reverseCountry);

// const result = reverseCountry.join('');
// console.log(result);

// let country = "bangladesh";
// // console.log(country.slice(-2,5));
// // console.log(country.substring(-2,5));
// console.log(country.substr(-3));


// let country = "bangladesh";
// let district = "chattogram";
// let address = country.concat(" ",district);
// console.log(address);

// // reverse string 
// let reverseCountry = country.split("").reverse().join("");
// console.log(reverseCountry);


// count ok 
// let str = "I am ok. And This is ok. But ok is cool";
// let newStr = str.split("ok").length-1;
// console.log(newStr);


// let text = "HELLO WORLD";
// console.log(text.charCodeAt(0))
// console.log(text.charCodeAt(2))
// console.log(text.at(0))
// console.log(text.at(2))


// let info = "My Name is Erfan. This is Erfan";
// let newInfo = info.replaceAll("Erfan","Tanim");
// console.log(info);
// console.log(newInfo);




// Object 
const Student = {
    'name': 'Erfan',
    id: 'CSE032 08215',
    habit: 'Coding',
    marks: 80.5,
    bodyColor: 'black',
    subject: ['Biology','Chemistry','Physics'],
    'body-height': 5.7,
}

// console.log(Student);
// console.log(typeof Student);

// console.log("\n");
// console.log(Student.name);
// console.log(Student.name.length);
// console.log(typeof Student.name);
// console.log(Student.subject);
// console.log(typeof Student.subject);

// console.log("\n");
// console.log(Student.subject.length);
// for(let sub of Student.subject){
//     console.log(sub);
// }

// console.log(Student.body-height); // error 
// console.log(Student["body-height"]);

// Student.marks = 90.5;
// Student.subject.push('Higher Math');
// console.log(Student);



// const MotorCycle = {
//     'brands': 'Suzuki',
//     'color': 'black',
//     'price':'225k',
//     'model': 2020,
//     'ridingTime': {
//         'day': 'monday',
//         'time': '10am to 12pm',
//     }
// }
// console.log(MotorCycle);

// const motorKeys = Object.keys(MotorCycle);
// console.log(motorKeys);
// const motorValues = Object.values(MotorCycle);
// console.log(motorValues);

// for(let key of Object.keys(MotorCycle)) {
//     console.log(MotorCycle[key]);
// }


// console.log(MotorCycle.ridingTime.day)
// console.log(MotorCycle.ridingTime.time)
// console.log(Object.values(MotorCycle.ridingTime))

// console.log('\n');
// console.log(MotorCycle);
// delete MotorCycle.ridingTime.time;
// console.log(MotorCycle);



// const person = {
//     firstName : "John",
//     lastName : "Doe",
//     age : 50,
//     eyeColor : "blue"
// };

// let text = Object.entries(person);
// console.log(text);
// console.log(text[0][0], " ", text[0][1]);

// for(let prop in person){
//     console.log(prop);
//     console.log(person[prop]);
// }

// Different way of object creation 
// const cat = new Object();
// console.log(cat);
// console.log(Object.keys(cat));
// console.log(Object.values(cat));

// cat.name = 'Meow';
// cat.age = 4;
// cat.color = 'white';
// console.log(cat);
// console.log(Object.keys(cat));
// console.log(Object.values(cat));


// const car = {
//     make: "Toyota",
//     model: "Corolla",
//     year: 2020
// };
// console.log(car);
// car.color = 'black';
// console.log(car);


// property count 
// let student = {
//     name: 'Ariana Grande',
//     age: 21,
//     city: 'Gaibandha',
//     isStudent: true
// };

// let count = 0;
// for(let x in student) {
//     console.log(x);
//     count++;
// }
// console.log(count);



// let student = {
//     name: 'John Doe',
//     age: 25,
//     city: 'Example City',
//     isStudent: true
// };
// for(let x in student){
//     console.log(x + ': ' + student[x] + ' | ' + 'type: ' + typeof student[x]);
// }

// Primitive Data type vs Non primitive Data type 
// 1) Primitivi Data type is Immutable and Non Primitive Data type is mutable 
// 2) Primitive data type is fixed size and Non primitive data type is dynamic size 
// 3) primitive cannot hold methods or properties but Non primitive hold 


// primitive examples 
// let a = 10
// let b = a; console.log(b);
// b = 20; console.log(b);
// console.log(a);


// non primitive examples 
// let obj1 = {
//     name: 'karim',
//     age: 23,
// }

// let obj2 = obj1;
// obj2.name = 'rahim';
// console.log(obj2);
// console.log(obj1);





// // count a 
// let country = "bangladesh";
// console.log(country.split('a').length-1);


// indexof operator 
// let str = "Mississippi";
// console.log(str.indexOf("i", 4)); // 4 means to start check in position 4

// let text = "Hello world, welcome to the universe.";
// let result = text.indexOf("e",20);
// console.log(result);


// last index of 
// let text = "Hello planet earth, you are a great planet.";
// console.log(text.lastIndexOf("planet"));
// console.log(text.indexOf("planet"));






// Web Ground Objects 
// let Student1 = {
//     name: "Erfan",
//     age: 24,
//     hasKnowHtml: true,
//     subject: ['chemistry','physics','math'],
//     "is-std": true,
// }

// console.log(Student1);
// console.log(typeof Student1);
// console.log(Student1.name);
// console.log(Student1['name']);
// console.log(Student1["is-std"]);


// let student2 = Student1;
// student2.name = 'karim';
// console.log(Student1.name); // it's changed because object work with reference, not value

// console.log(Object.keys(student2));
// delete student2.name;
// console.log(Object.keys(student2));

// let cat = {
//     'name': 'catty',
//     age: 4,
//     makesound: function() {
//         console.log("Meow Meow Meow")
//     },
// }

// console.log(cat);
// console.log(Object.keys(cat));
// console.log(Object.values(cat));

// cat.makesound();

// let cat2 = Object.create(cat);
// console.log(Object.keys(cat2));



// const car = {
//     brand: 'Toyato',
//     start: function() {
//         console.log("Starting the " + this.brand + " car");
//     }
// };

// console.log(car);
// car.start();

// for(let key in car) {
//     console.log(key + " - " + car[key]);
// }

// console.log(Object.keys(car));
// console.log(Object.values(car));
// console.log(Object.entries(car));






// Best Example
// const user = {
//     'firstname': 'Md Arfatul Islam',
//     'lastname': 'Erfan',
//     'fullname': function() {
//         return this.firstname + " " + this.lastname;
//     },

//     'isMale': true,
//     'nationality': 'bangladeshi',

//     'address': {
//         'post-code': 4335,
//         'upzila': 'Hathazari',
//         'division': 'Chattogram'
//     },
//     'updateaddress': function(pCode) {
//         this.address["post-code"]=pCode;
//     },

//     'passportAcess': ['Pakistan','Australia','New-Zealand'],
//     'passportAcessUpdate': function(newCountry) {
//         this.passportAcess.push(newCountry);
//     }
// }

// console.log(user.address["post-code"]);
// user.updateaddress(1221);
// console.log(user.address["post-code"]);

// console.log(user.fullname());
// console.log(user.passportAcess);
// user.passportAcessUpdate('Germany');
// console.log(user.passportAcess);





// Next Example Created by me and This is the best Example in the world for practiceing
// const car = {
//     brand: 'Toyota',
//     owner: 'Toyoda family',
//     established: 1937,
//     model: ['Camry','RAVA','Sequoia','Land Cruiser'],
//     color: ['black','red','gray','blue'],
//     extrainfo: {
//         'produced-car': '300 million',
//         'Subsidiary-Institutions': 533,
//         'headquarter': 'Toyata city, Japan',
//     },

//     // Functionality of car 
//     start: function() {
//         return "Starting " + this.brand + " car";
//     },
//     brake: function(brakeType) {
//         return "Brakeing " + brakeType;
//     },
//     light: function(type) {
//         return "Light is " + (type ? "on":"off");
//     },
//     stop: function() {
//         return "Stoping " + this.brand + " car";
//     },

    
//     // Updating Data 
//     addModel: function(newModel) {
//         this.model.push(newModel);
//     },
//     addColor: function(newColor) {
//         this.color.push(newColor);
//     },
//     addExtrainfo: function(newkey, newvalue){
//         this.extrainfo[newkey] = newvalue;
//     }
// }


// console.log(car);

// Functionality of car 
// console.log(car.start());
// console.log(car.brake("slowly"));
// console.log(car.brake("Immediately"));
// console.log(car.light(true));
// console.log(car.light(false));
// console.log(car.stop());

// // Updating Data 
// console.log(car.model);
// car.addModel('Corolla');
// console.log(car.model);
// console.log(car.model.sort()); // sorting car models

// console.log(car.extrainfo);
// car.addExtrainfo('employee', 313224);
// console.log(car.extrainfo);


// console.log(car);





// Dynamic Object Property

// let userNameKey = prompt("Enter a userkey: ");
// let userNameValue = prompt("Enter your username: ");

// const user = {
//     [userNameKey]: userNameValue, // user [] bracket for dynamic creation
//     age: 24,
// }
// console.log(user.username);

// let testkey = "color";
// let obj = {
//     [testkey]: 'black',
// }

// console.log(obj.color);
// // or
// // obj[testkey] = 'red';





// Object in Function

// 1
// function createUser() {
//     let user = {
//         firstname: 'Md Arfatul Islam',
//         lastname: 'Erfan',
//     }

//     console.log(user.firstname);
// }
// createUser();


// 2
// function createUser(fName, lName, age) {
//     let user = {
//         firstname: fName,
//         lastname: lName,
//         // age: age 
//         age, // If Property name and Property Value Variable is same 
//         fullname: function() {
//             return this.firstname + " " + this.lastname;
//         }
//     }
//     console.log(user.fullname() + " Age is: " + user.age);
// }
// createUser('Karim','Uddin',24);


// 3 -- How ot Acces in outside
// one Way 
// let user;
// function createUser(fName, lName, age) {
//     user = {
//         firstname: fName,
//         lastname: lName,
//         // age: age 
//         age, // If Property name and Property Value Variable is same 
//         fullname: function() {
//             return this.firstname + " " + this.lastname;
//         }
//     }
//     // console.log(user.fullname() + " Age is: " + user.age);
// }
// createUser('Karim','Uddin',24);
// console.log(user.fullname() + " Age is: " + user.age);

// 2nd way
// function createUser(fName, lName, age) {
//     let user = {
//         firstname: fName,
//         lastname: lName,
//         // age: age 
//         age, // If Property name and Property Value Variable is same 
//         fullname: function() {
//             return this.firstname + " " + this.lastname;
//         }
//     }
//     // console.log(user.fullname() + " Age is: " + user.age);
//     return user.fullname() + " Age is: " + user.age;
// }

// console.log(createUser('Karim','Uddin',24));


// 4 
// function CreateUser(fname, lname, height) {
//     let user = {
//         firstname: fname,
//         lastname: lname,
//         height, // it's means height: height,

//         fullname: function() {
//             return this.firstname + " " + this.lastname;
//         }
//     }

//     return user;
// }

// let user1 = CreateUser('Md Arfatul Islam', 'Erfan', 5.7);
// let user2 = CreateUser('Karim', 'Uddin', 5.5);
// let user3 = CreateUser('Rahim', 'Ali', 5);
// // console.log(user1);
// // console.log(user2);
// // console.log(user3);

// console.log(user1.fullname());
// console.log(user1.height);
// console.log(user1.lastname);





// property name rule
// let user = {
//     1: 'Md Arfatul Islam',
//     2: 'Erfan',
//     3: 5.7,
//     true: 'Yes',
//     // 1check: 'test', // error 
// }
// console.log(user['1']);
// console.log(user['2']);
// console.log(user['3']);
// console.log(user['true']);
// console.log(user[true]);
// console.log(user);




// IN Operator 
let booklist = {
    firstbook: 'book1',
    secondbook: 'book2',
}

// if(booklist.firstbook !== undefined) {
//     console.log(booklist.firstbook);
// }
// else {
//     console.log("firstbook not exist")
// }

// if(booklist.thirdbook !== undefined) {
//     console.log(booklist.firstbook);
// }
// else {
//     console.log("thirdbook not exist")
// }

// console.log('firstbook' in booklist);
// console.log('thirdbook' in booklist);

// for(let key in booklist) {
//     console.log(key);
// }


let myObj = {
    test: undefined,
}

// difference between in and raw code 
// console.log('test' in myObj);
// if(booklist.test === undefined) {
//     console.log("test not exist")
// }
// else {
//     console.log(booklist.test);
// }



// object Ordering 
// let marks = {
//     80: 'Erfan',
//     65: 'Rabbi',
//     70: 'Karim',
//     97: 'Jamal',
//     55: 'Sadab',
// }

// for(let mark in marks) {
//     console.log(mark);
// }

// solve this problem
// let marks = {
//     "80.0": 'Erfan',
//     "65.0": 'Rabbi',
//     "70.0": 'Karim',
//     "97.0": 'Jamal',
//     "55.0": 'Sadab',
// }

// for(let mark in marks) {
//     console.log(mark);
// }
// for(let mark in marks) {
//     console.log(Number(mark));
// }


// let countrycode = {
//     93: 'Afganistan',
//     91: 'Indai',
//     880: 'Bangladesh',
//     41: 'Austria'
// }
// console.log(countrycode);


// let countrycode = {
//     "+93": 'Afganistan',
//     "+91": 'Indai',
//     "+880": 'Bangladesh',
//     "+41": 'Austria'
// }
// console.log(countrycode);

// console.log(Number("+54"));
// console.log(Number("a54"));


// Object comparison 
// let obj1 = {
//     myname: "Erfan",
// }
// let obj2 = {
//     myname: "Erfan",
// }

// let obj3 = obj1;
// console.log(obj1==obj2);
// console.log(obj1==obj2);
// console.log(obj1==obj3);

// console.log(obj1.myname == obj2.myname);



// Object Clone 
let productsDetails1 = {
    produntName: 'Laptop',
    serialNo: '125562',
    price: 45000,
}

// let productsDetails2 = productsDetails1;
// console.log(productsDetails2);

// // System 1 for clone
// let productsDetails2 = {}
// for(let key in productsDetails1) {
//     productsDetails2[key] = productsDetails1[key];
// }

// productsDetails1.produntName = 'Clock';
// console.log(productsDetails1);
// console.log(productsDetails2);

// Shortcut way of cloneing
// let companyDetails = {
//     companyName: 'IIT',
//     established: '28 feb, 2002',
// };

// let productsDetails3 = {}
// for(let key in productsDetails1) {
//     productsDetails3[key] = productsDetails1[key];
// }
// for(let key in companyDetails) {
//     productsDetails3[key] = companyDetails[key];
// }

// console.log(productsDetails3);

// shortcut 
let companyDetails = {
    companyName: 'IIT',
    established: '28 feb, 2002',
};

let productsDetails3 = {}

Object.assign(productsDetails3, productsDetails1, companyDetails);

console.log(productsDetails3);
productsDetails3.produntName = 'clock';
console.log(productsDetails3);
console.log(productsDetails1);













// Delete duplicate from array // problem 1
// const products = ['Laptop','phone','camera','laptop','phone','clock'];
// const singleProducts = [];

// for(let product of products) {
//     if(!singleProducts.includes(product.toLowerCase())) {
//         singleProducts.push(product.toLowerCase());
//     }
// }
// console.log(singleProducts);



// problem 2
// const products = [
//     {name: "Laptop", category: "Electronics"},
//     {name: "T-Shirt", category: "Clothing"},
//     {name: "Headphone", category: "Electronics"},
//     {name: "Hoddy", category: "Clothing"},
//     {name: "Clock", category: "Electronics"},
// ]

// const categroyWish = {
//     electronics: [],
//     clothing: [],
// }
// for(let item of products) {
//     if(item.category == 'Electronics') {
//         categroyWish.electronics.push(item.name);
//     }
//     else {
//         categroyWish.clothing.push(item.name);
//     }
// }

// console.log(categroyWish);



// Problem 3

// const str = "$24 9";
// let sum = 0;
// for(let val of str) {
//     if( !(isNaN(val)) ) { //  && val !== " "
//         sum += Number(val);
//     }
// }

// console.log(sum);
