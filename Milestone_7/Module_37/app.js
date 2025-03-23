// const numbers = [1,2,3,4,5,6];

// const sum = numbers.reduce((initial,current)=> {
//     return initial+current;
// });
// console.log(sum);

// const fullName = ['Md','Arfatul','Islam','Erfan'];

// const addName = fullName.reduce((initial, current) => initial+" "+current);
// console.log(addName);


//with initial value
// const fullName = ['Arfatul','Islam','Erfan'];

// const addName = fullName.reduce((initial, current) => {
//     return initial+" "+current;
// },'Md');
// console.log(addName);


// find max number by reduce method
// const numbers = [2,3,6,8,12,9,7];
// const mx = numbers.reduce((initial, current)=>{
//     return (initial<current) ? current:initial; 
// },-Infinity);

// console.log(mx);


// {
//     let a = 10;
//     const b = 20;
//     var c = 33;
// }

// console.log(a);


// let arr1 = [1,2,3,2,4,5];
// let arr2 = [5,2,8,7,2,3];

// let newArr1 =  arr1.filter(num => num!=2);
// let newArr2 =  arr2.filter(num => num!=2);
// let newArr = [...newArr1,...newArr2];
// console.log(newArr);


// let person = {
//     name: 'erfan',
//     age: 24,
//     isMarried: false
// }

// let {name,isMarried,age} = person;
// console.log(name);
// console.log(age);
// console.log(isMarried);


// let friends = ['erfan','tanim','karim'];
// let [frd1, ,frd3] = friends;
// console.log(frd1);
// console.log(frd3);


// let person = {
//     name: 'erfan',
//     age: 24,
//     fatherDetails: {
//         fName: 'Md Abul Kalam',
//         age: 57
//     }
// }
// let animal={};

// console.log(person?.fatherDetails?.fName);
// console.log(person?.motherDetails?.mName);
// console.log(animal?.name);


// let numbers = [1,2,3,4,5,6,7]
// console.log(numbers.slice(0,4));
// console.log(numbers.slice(1,4));

// console.log(numbers.toSpliced(1,4));
// console.log(numbers);


// let fruits = ['orange','mango','gauva'];
// // fruits.splice(1,0,'banana','katbadam');
// // console.log(fruits);

// // let addFruits = fruits.toSpliced(fruits.length,0,'banana');
// // console.log(addFruits);

// fruits.splice(1,1);
// console.log(fruits);



// let nums = [1,2,3,4,5,3];
// let ans = nums.lastIndexOf(3);
// console.log(ans);

// let arr = Array.from({0:10,1:11,2:12,length:3});
// console.log(arr);


// function test() {
//     console.log(arguments);
//     let arr1 = [...arguments];
//     let arr2 = Array.from(arguments);
//     console.log(arr1);
//     console.log(arr2);
// }

// test(1,2,3,4);


let nums = [1,2,3,4,5,6,7,8,9];
// nums.splice(2,5);
// console.log(nums);

// nums.splice(-4,2);
// console.log(nums);

// nums.splice(2,0,10,12);
// console.log(nums);

// let person = {
//     name: 'erfan',
//     age: 24,
//     isMarried: false
// }
// console.log(person);

// let player = {
//     name: 'erfan',
//     age: 23,
//     nums: [1,2,3]
// }

// let player2 = {};
// Object.assign(player2,player)

// let player2 = structuredClone(player);
// console.log(player2);

// player2.age = 40;
// player2.nums[1] = 11;
// console.log(player2);
// console.log(player)



// let player1 = {
//     name: 'erfan',
//     age: 23,
//     nums: [1,2,3],
//     showName: function() {
//         console.log(this.name);
//     }
// }

// let player2 = {...player1};
// let player2 = JSON.parse(JSON.stringify(player1));
// console.log(player2);

// player2.age = 40;
// player2.nums[1] = 11;
// console.log(player2);
// console.log(player1);

// player2.showName();

// function testing(name,age) {
//     console.log(this.name);
// }

// testing('erfan',23);

// const test = () => {
//     console.log();
// }

// let person = {
//     name: 'erfan',
//     age: 24,
//     showName: function() {
//         console.log(this.name);
//     }
// }

// person.showName();

// let person = {
//     name: 'erfan',
//     age: 24,
//     showName: () => {
//         console.log(this.name);
//     }
// }

// person.showName();


// let products = [
//     {name: 'redmi10', color: 'black', price: 12000},
//     {name: 'iphonexs', color: 'gold', price: 10000},
//     {name: 'redmi12', color: 'black', price: 11000},
//     {name: 'samsung', color: 'yellow', price: 12000},
//     {name: 'samsung', color: 'sliver'},
// ];

// let result = products.map(product => {
//     if(product.price) {
//         product.price += 1000;
//     }
//     return product;
// })

// console.log(result);

// let totalPrice = products.reduce((total, product) => {
//     if(product.price) {
//         return total += product.price;
//     }
//     else {
//         return total;
//     }
// },0)
// console.log(totalPrice);

// let totalPrice = 0;
// products.forEach(product => {
//     if(product.price) {
//         totalPrice += product.price;
//     }
// })
// console.log(totalPrice);



// Falsy value 
// console.log(Boolean(""));
// console.log(Boolean(''));
// console.log(Boolean(0));
// console.log(Boolean(false));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(0n));
// console.log(Boolean(NaN));
// console.log(Boolean(Number('aa')));



// const showUser = () => console.log("show user");
// const hideUser = () => console.log("hide user");

// let isActive = true;

// // isActive ? showUser() : null;

// isActive && showUser();

// isActive && console.log("Hello is true");

// isActive || hideUser();


// isActive = false;
// isActive || hideUser();


let num = "10";
console.log(num);
console.log(typeof num);
console.log(+num);
console.log(typeof num);
console.log(num);

console.log(Number(1.2e5));
console.log(parseInt(1.2e5));
console.log(parseFloat(1.2e5));


console.log(parseInt(null));
console.log(Number(null));
console.log(parseInt(undefined));
console.log(Number(undefined));