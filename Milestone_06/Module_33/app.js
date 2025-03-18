// const person = {
//     name: 'Erfan',
//     age: 10,
//     isMarried: false,
//     marks: 45.5,
//     friends: ['rahim','jabbar','karim'],
//     details: {
//         'father-name': "Md Abul Kalam",
//         "address": "Hathazari"
//         }
// }


// console.log(person);

// // Convert Object to Json formet 
// const convertPerson = JSON.stringify(person);
// console.log(convertPerson);

// console.log(typeof convertPerson);
// console.log(typeof person);


// const againConvert = JSON.parse(convertPerson);
// console.log(againConvert);



// Json Placeholder 

// syntax 
// fetch("Api").then(res => res.json()).then(data => console.log(data));


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(userData => {
//         passData(userData);
//     })
//     .catch(error => console.error('Error:', error)); // use for error handeling


//     let users = [];
//     function passData(userData) {
//         for(const user of userData) {
//             let obj = {'name': user.name, 'email': user.email};
//             users.push(obj);
//         }
//     }
//     console.log(users);


// // what is responsive
// fetch("https://jsonplaceholder.typicode.com/users")
//     .then(res => {
//         console.log(res);
//         return res.json();
//     })
//     .then(data => console.log(data));



// Prototype 
// class Vehicals{
//     constructor(name, year) {
//         this.name = name;
//         this.year = year;
//     }

//     start() {
//         console.log("Engine start now");
//     }
// }

// class Bike extends Vehicals{
//     constructor(name, year, isAbs) {
//         super(name, year);
//         this.isAbs = isAbs
//     }
//     absStart() {
//         console.log("Abs break working");
//     }
// }


// const myBike = new Bike("Suzuki", 2021, false);

// console.log(myBike);

// console.log("name" in myBike);
// console.log("year" in myBike);
// console.log("isAbs" in myBike);

// console.log(myBike.hasOwnProperty("name"));
// console.log(myBike.hasOwnProperty("year"));
// console.log(myBike.hasOwnProperty("isAbs"));


// const bike = {
//     name: "suzuki",
//     age: 3
// }

// const myBike = Object.create(bike);
// myBike.color = "black";

// console.log("name" in myBike);
// console.log(myBike.hasOwnProperty("name"));
// console.log(myBike.hasOwnProperty("color"));

// console.log(myBike);




// fetch("https://jsonplaceholder.typicod.com/users")
//     .then(res => {
//         console.log(res);
//         console.log(res.json());
//         return res.json();
//     })
//     .then(data => data)
//     .catch(error => console.error('Error:', error));



// const loadData = () => {
//     fetch("https://jsonplaceholder.typicode.com/users").then(res => res.json()).then(data => console.log(data));
// }