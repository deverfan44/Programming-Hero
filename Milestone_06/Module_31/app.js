// // Optional Chaning 

// const person = {
//     name: "Md Arfatul Islam",
//     age: 24,
//     friends: ['karim','rahim','jabbar'],
//     details: {
//         isMarried: false,
//         color: 'black',
//         father: {
//             name: "Md Abul Kalam",
//             age: 57
//         }
//     }
// }

// console.log(person.details.father.name);
// console.log(person.details.father.age);

// console.log(person.details.mother); // return undefined
// // console.log(person.details.mother.name); // show error
// console.log(person.details.mother?.name); // return undefined not error
// console.log(person.details.father?.name);

// console.log(person?.friends);
// console.log(person?.friends[1]);
// console.log(person?.friends[6]);



// const user = {
//     name: 'Jamal',
//     age: 24
// }

// console.log(user.name);
// console.log(user.address); // return undefined
// // console.log(user.address.zip); // show error
// console.log(user.address?.zip); // return undefined



// Map in ES6
// const numbers = [1,5,7,9,11];
// let newArray = [];

// for(let i=0; i<numbers.length; i++) {
//     const newVal = numbers[i]+1;
//     newArray.push(newVal);
// }
// console.log(newArray);


// const numbers = [1,5,7,9,11];
// const newArr = numbers.map(item => item+1);
// console.log(newArr);

// const squareArr = numbers.map(item => item*item);
// console.log(squareArr);

// const users = ['Karim','Rahim','Jabbar'];
// const updateUsers = users.map(user => 'Md '+user);
// console.log(updateUsers);



// const users = [
//     {name: 'rahim', age: 23},
//     {name: 'karim', age: 42},
//     {name: 'jasim', age: 32}
// ]

// const userAgeUpdate = users.map(user => {
//     user.age += 1;
//     return user;
// });

// console.log(userAgeUpdate);



// const products = [
//     {name: 'moneybag', price: 1200},
//     {name: 'clock', price: 800},
//     {name: 'calculator', price: 100},
// ]

// products.map(product => {
//     const discount = ((product.price)*10)/100; // calculated 10% discount
//     product.price = product.price - discount;
// })

// console.log(products);

// const productPrice = products.map(product => product.price);
// const productPrice = products.map(({price}) => price); // by distructuring
// console.log(productPrice);


// Default idx in map 
// const fruits = ['mango','banana','orange'];

// fruits.map((item,idx) => {
//     console.log(item);
//     console.log(idx);
// })

// fruits.map((item,idx) => {
//     console.log(fruits[idx]);
// })


// const numbers = [65, 44, 12, 4];
// // const newArr = numbers.map(item => myFunction(item))
// const newArr = numbers.map(myFunction)

// function myFunction(num) {
//   return num * 10;
// }
// console.log(newArr);


// const numbers = [4,9,16];
// const newArr = numbers.map(Math.sqrt);
// console.log(newArr);



// const phones = [
//     {id: 1, name: 'Redmi', color: ['black','red','gold'], price: 1000},
//     {id: 2, name: 'Samsung', color: ['white','pink','red'], price: 1500},
//     {id: 3, name: 'Iphone', color: ['orange','black','yellow'], price: 1800},
//     {id: 4, name: 'Nokia', color: ['black','teal','gold'], price: 800},
// ]

// const lowBudgetPhone = [];
// for(let phone of phones) {
//     if(phone.price <= 1000) {
//         lowBudgetPhone.push(phone);
//     }
// }

// const lowBudgetPhone = phones.map(phone => {
//     if(phone.price <= 1000) return phone;
// })

// console.log(lowBudgetPhone);


// const phones = [
//     {id: 1, name: 'Redmi', color: ['black','red','gold'], price: 1000},
//     {id: 2, name: 'Samsung', color: ['white','pink','red'], price: 1500},
//     {id: 3, name: 'Iphone', color: ['orange','black','yellow'], price: 1800},
//     {id: 4, name: 'Nokia', color: ['black','teal','gold'], price: 800},
// ]

// const lowBudgetPhone = phones.filter(phone => {
//     if(phone.price <= 1000) return phone;
// })

// console.log(lowBudgetPhone);



// const phones = [
//     {id: 1, name: 'Redmi', color: ['black','red','gold'], price: 1000},
//     {id: 2, name: 'Samsung', color: ['white','pink','red'], price: 1500},
//     {id: 3, name: 'Iphone', color: ['orange','black','yellow'], price: 1800},
//     {id: 4, name: 'Nokia', color: ['black','teal','gold'], price: 800},
// ]

// const lowBudgetPhone = [];
// phones.forEach(phone => {
//     if(phone.price <= 1000) {
//         lowBudgetPhone.push(phone);
//     }
// })

// console.log(lowBudgetPhone);



// const numbers = [1,2,3,4,5,6,7,8,9,10];

// const oddNumbers = numbers.filter(num => (num%2!=0));
// const evenNumbers = numbers.filter(num => {
//     if(num%2==0) return num;
// });

// console.log(oddNumbers);
// console.log(evenNumbers);


// const phones = [
//     {id: 1, name: 'Redmi', color: ['black','red','gold'], price: 1000},
//     {id: 2, name: 'Samsung', color: ['white','pink','red'], price: 1500},
//     {id: 3, name: 'Iphone', color: ['orange','black','yellow'], price: 1800},
//     {id: 4, name: 'Nokia', color: ['red','teal','gold'], price: 800},
// ]


// Use nested map
// const updatePrice = phones.map(phone => phone.color.map(colour => {
//     if(colour=='black'){
//         phone.price += 100;
//     }
//     return phone;
// }))

// Use some() method
// const blackPhone = phones.filter(phone => phone.color.some(colour => colour == 'black'));
// // or
// const blackPhone = phones.filter(phone => phone.color.includes('black'));
// console.log(blackPhone);


// const friends = ['Erfan','Tanim','karim'];
// console.log(friends.some(friend => friend=='Erfan'));
// console.log(friends.some(friend => friend=='jasim'));

// console.log(friends.includes("Erfan"));
// console.log(friends.includes("jasim"));




// Class

// class Car {
//     name;
//     model;
//     year;
//     constructor(name, model, year){
//         this.name = name;
//         this.model = model;
//         this.year = year;
//     };

//     starting() {
//         return this.name + " is Start now";
//     }
//     breaking() {
//         return this.name + " is break now";
//     }
// };

// const car1 = new Car('RRT','BMW',2021);
// console.log(car1);
// console.log(car1.name);
// console.log(car1.model);

// console.log(car1.starting());




// function countTotalMarks(marks) {
//     const {physics, chemsitry, math} = marks;
//     let total = physics+chemsitry+math;
//     return total;
// }

// class Student{
//     // name;
//     // age;
//     // fatherName;
//     // marks;
//     // gpa;
//     constructor(name, age, fatherName, marks, gpa){
//         this.name = name;
//         this.age = age;
//         this.fatherName = fatherName;
//         this.marks = marks;
//         this.gpa = gpa;
//     }

//     totalMarks() {
//         return countTotalMarks(this.marks);
//     }

//     details() {
//         const info = `Your name is: ${this.name}\nYour father name is: ${this.fatherName}\nYour gpa is: ${this.gpa}`;
//         return info;
//     }
// }

// const student1 = new Student('Karim', 23, 'Toskir', {'physics': 88, 'chemsitry': 66, 'math': 70}, 3.88);

// // console.log(student1);
// console.log(student1.totalMarks());
// console.log(student1.details());



// function createUsers(name, age, isMarried) {
//     const user = {
//         name,
//         age,
//         isMarried,
//     }
//     return user;
// }

// let user1 = createUsers('Erfan', 23, false);
// let user2 = createUsers('Karim', 30, true);
// console.log(user1);
// console.log(user2);




// class Vehical{
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }

//     starting() {
//         console.log(`The ${this.name} is start now`);
//     }
//     breaking() {
//         console.log(`The ${this.name} is break now`);
//     }
// }

// class Bus extends Vehical{
//     constructor(name, price, tvName, slipperSeat){
//         super(name,price);
//         this.tvName = tvName;
//         this.slipperSeat = slipperSeat;
//     }
//     slipperUp() {
//         console.log(`Now Slipper seat up`);
//     }
//     slipperDown() {
//         console.log(`Now Slipper seat down`);
//     }
// }

// class Bike extends Vehical{
//     constructor(name, price, isthreeseat){
//         super(name,price);
//         this.isthreeseat = isthreeseat;
//     }
//     absOpen() {
//         console.log(`Abs Breaking is open now`);
//     }
//     absOff() {
//         console.log(`Abs Breaking is close now`);
//     }
// }

// const bus1 = new Bus('Green Line', 120000, 'Sony', 12);
// console.log(bus1);
// bus1.starting();
// bus1.breaking();
// bus1.slipperDown();


// const bike1 = new Bike('Suzuki fi', 250000, false);
// const bike2 = new Bike('Yamaha FZ', 280000, true);
// console.log(bike1);
// bike1.absOpen();
// bike1.absOff();

// console.log(bike2);




// class Animal{
//     constructor(name,color){
//         this.name = name;
//         this.color = color;
//     }
//     sleeping() {
//         console.log(`This ${this.name} is now sleeping in beding`);
//     }
//     getup() {
//         console.log(`This ${this.name} is now getup`);
//     }
// }

// class Horse extends Animal{
//     constructor(name,color,runningHP){
//         super(name, color);
//         this.runningHP = runningHP;
//     }
//     sleeping(){
//         console.log(`This ${this.name} is sleeping in standing`);
//     }
// }

// const horse1 = new Horse('Kalamama', 'black', 746);
// console.log(horse1);
// horse1.getup();
// horse1.sleeping();




// this keyword 
// const person = {
//     myName: 'Erfan',
//     getName: function(){
//         console.log(this.myName);
//     },
// }

// person.getName();



// const myAge = 23;
// console.log(this);
// console.log(this.myAge);


// Encapsulation 
class User{
    name;
    phoneNumber;
    #password; // "#" used for Encapsulation
    constructor(name, phoneNumber, password) {
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.#password = password;
    }

    getPassWord() {
        console.log(this.#password);
    }
}

const user1 = new User('Erfan', '01705323117', 'deverfan44#');
console.log(user1);
console.log(user1.password); // it's show undefined because password insulated by encapsulation

user1.getPassWord(); // it's show because it's called in class body