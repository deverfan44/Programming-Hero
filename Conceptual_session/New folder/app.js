// // Solve a problem by callbace function
// const datas = [
//     {name: "Erfan", profession: 'software engineer'},
//     {name: "karim", profession: 'frontend developer'},
// ]

// function getDatas() {
//     setTimeout(() => {
//         let output = "";
//         datas.forEach((data,idx) => {
//             output += `<li>${data.name}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000);
// }
// function createData(newData, callback) {
//     setTimeout(() => {
//         datas.push(newData);
//         callback();
//     }, 2000);
// }

// createData({name: 'Rabi', profession: 'Driver'},getDatas);
// // getDatas();



// // Solve a problem by promise
// const datas = [
//     {name: "Erfan", profession: 'software engineer'},
//     {name: "karim", profession: 'frontend developer'},
// ]

// function getDatas() {
//     setTimeout(() => {
//         let output = "";
//         datas.forEach((data,idx) => {
//             output += `<li>${data.name}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createData(newData) {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             datas.push(newData);
//             let error = false;
//             // let error = true;
//             if(!error) {
//                 resolve();
//             }
//             else{
//                 reject('Hava some error');
//             }
//         }, 2000);
//     })
// }

// createData({name: 'Rabi', profession: 'Driver'}).then(getDatas).catch(err => console.log(err));
// // getDatas();



// Solve a problem by async await
// const datas = [
//     {name: "Erfan", profession: 'software engineer'},
//     {name: "karim", profession: 'frontend developer'},
// ]

// function getDatas() {
//     setTimeout(() => {
//         let output = "";
//         datas.forEach((data,idx) => {
//             output += `<li>${data.name}</li>`;
//         })
//         document.body.innerHTML = output;
//     }, 1000);
// }

// function createData(newData) {
//         return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             datas.push(newData);
//             let error = false;
//             // let error = true;
//             if(!error) {
//                 resolve();
//             }
//             else{
//                 reject('Hava some error');
//             }
//         }, 2000);
//     })
// }

// async function start() {
//     await createData({name: 'Rabi', profession: 'Driver'});
//     await showData();
//     getDatas();
// }

// start();


// function showData() {
//     return new Promise((resolve, reject) => {
//         console.log(datas);
//         resolve();
//     })
// }


// // sorting 
// let numbers = [20,12,10,4,8,2,5];
// let newArray = numbers.sort((a,b) => a-b);
// console.log(numbers);
// console.log(newArray);

// let newArray2 = numbers.sort((a,b) => b-a);
// console.log(newArray2);
// console.log(numbers);

// Practical use
// let phone = [
//     {name: 'Redmi', price: 12000},
//     {name: 'Samsung', price: 10000},
//     {name: 'Tacno', price: 5000},
// ];

// console.log(phone);
// phone.sort((a,b) => a.price-b.price);
// console.log(phone);


// Set 
// let numbers = [1,2,3,4,4,5,6,7,5];

// let newNumbers = new Set(numbers);
// console.log(numbers); 
// console.log(newNumbers); 

// Practical use
let phone = [
    {name: 'Redmi', price: 12000},
    {name: 'Samsung', price: 10000},
    {name: 'Tecno', price: 5000},
    {name: 'Redmi', price: 12000},
];

let uniqueNames = [];
let uniquePhones = phone.filter(item => {
    if (!uniqueNames.includes(item.name)) {
        uniqueNames.push(item.name);
        return true;
    }
    return false;
});

console.log(phone); // Original array
console.log(uniquePhones); // Array with duplicates removed