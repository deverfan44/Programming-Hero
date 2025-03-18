// function person1() {
//     console.log("Jalmori Ready");
// }

// function person2() {
//     console.log("Jalmori Ready");
// }

// function person3() {
//     setTimeout(() => {console.log("Waiting for fosca")},1000);
// }
// function person4() {
//     setTimeout(() => {console.log("Waiting for fosca")},2000);
// }
// function person5() {
//     console.log("Jalmori Ready");
// }

// person1();
// person2();
// person3();
// person4();
// person5();



// function test1() {
//     console.log("I am first");
// }

// function test2() {
//     console.log("I am second");
// }
// setTimeout(test2,2000);

// function test3() {
//     console.log("I am third");
// }


// test1();
// test3();



// const fetchData = () => {
//     return new Promise((reslove, reject) => {
//         let status = true;
//         if(status) {
//             const data = {
//                 name:"Erfan",
//                 age: 23
//             }

//             reslove(JSON.stringify(data))
//         } else {
//             reject("Server Error")
//         }
//     })
// }


// fetchData().then(res => res,json()).then(data => console.log(data));

// function test() {
//     console.log("Testing Purpose");
// }

// const loadData = () => {
//     console.log("Ami Protom");
//     console.log("Ami Second");
//     const ans = 10+20;
//     console.log(ans);
//     // test();
//     setTimeout(test, 1000);
//     console.log("Ami Third");
// }

// loadData();



// // Asyncronas 
// const loadData = () => {
//     console.log("Hello This is first");
    
//     fetch('https://jsonplaceholder.typicode.com/todos/1')
//         .then(response => response.json())
//         .then(data => console.log(data))
//         .catch(error => console.log("The error is: ",error))
    
//     console.log("Hello This is Second");
// }


// loadData();


// Syncronas 
// const loadData = async () => {
//     console.log("Hello This is first");
    
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     console.log(response);
    
//     console.log("Hello This is Second");
// }


// loadData();



// const loadData = async () => {
//     console.log("Hello This is first");
    
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const data = await response.json();
//     console.log(data);
    
//     console.log("Hello This is Second");
// }


// loadData();



// // Asyncrones 
// const loadData = function() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//     .then(res => res.json())
//     .then(users => {
//         // console.log(users);
//         userData(users);
//     })
//     .catch(error => console.log("The error is: ",error))
    
// }

// loadData();

// let myUsers = [];
// function userData(users) {
//     for(let user of users) {
//         myUsers.push(user['name']);
//     }
//     console.log(myUsers);
// }



// Syncronas 
// const loadData = async function () {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         userData(data);
//     } catch (error) {
//         console.log("The error is: ", error);
//     }
// };

// loadData();

// let myUsers = [];

// function userData(users) {
//     for (let user of users) {
//         myUsers.push(user['name']);
//     }
//     console.log(myUsers);
// }



// console.log("I am Zero");
// const loadData = async function () {
//     try {
//         console.log("tops");
//         const response = await fetch('https://jsonplaceholder.typicode.com/users');
//         const data = await response.json();
//         console.log("Inside");
//         console.log(data);
//         console.log("Outside");
//     } catch (error) {
//         console.log("The error is: ", error);
//     }
// };

// console.log("I am First");
// loadData();
// console.log("I am Second");



// async function orderFood() {
//     const food = await cookFood();

//     console.log("Food is ready: ");
//     console.log(food);
// }

// function cookFood(){
//     return new Promise((resolve, reject) => {
//         setTimeout(()=> {
//             resolve("Noodles")
//         },2000)
//     })
// }

// orderFood();


// function delay(ms) {
//     return new Promise((resolve) => setTimeout(resolve, ms));
// }

// async function test() {
//     console.log(1);
//     console.log(2);
//     console.log(3);
//     await delay(2000); // Wait for 2 seconds
//     console.log(300);
//     console.log(4);
//     console.log(5);
//     console.log(6);
// }

// test();


// let count = 0;

// const clockId = setInterval(()=>{
//     count++;
//     console.log(count);
//     if(count == 5) clearInterval(clockId);
// },2000);



// function a() {
//     b();
//     console.log("a");
// }
// setTimeout(()=>{
//     console.log("I am setTimeOut 1");
// },5000);

// setTimeout(()=>{
//     console.log("I am setTimeOut 2");
// },2000);

// function b() {
//     c();
//     console.log("b");
// }
// function c() {
//     console.log("c");
// }

// a();


// function test() {
//     console.log("This is Erfan");
// }

// setTimeout(test,2000);



// function delayGreeting(name, delayTime){
//     setTimeout(()=>{
//         console.log(`Hello ${name}`);
//     },delayTime)
// }

// delayGreeting('Erfan',2000);


// function message() {
//     console.log("Hello I am this message");
// }

// const stopMessage = setInterval(message,2000);

// setTimeout(() => {
//     clearInterval(stopMessage);
// }, 10000);

// let x = 1;
// let intervalId = setInterval(() => {
//     console.log(x++);
//     if (x > 3) clearInterval(intervalId);
// }, 1000);
// try {
//     console.log("Start");
//     throw new Error("Error occurred");
// } catch (err) {
//     console.log(err.message);
// } finally {
//     console.log("End");
// }


console.log("A");
Promise.resolve().then(() => console.log("B"));
setTimeout(() => console.log("C"), 0);
console.log("D");