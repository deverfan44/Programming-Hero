// function createCar(brand, color, price) {
//     let Car = {
//         brand,
//         color,
//         price,
//         starting: function() {
//             console.log("Start the " + this.brand + " Car and " + "Price is " + this.price);
//         },
//         breaking: function() {
//             console.log("Break the " + this.brand + " Car and " + "Price is " + this.price);
//         }
//     }

//     return Car;
// }

// let car1 = createCar("Toyota", "White", 120000);
// let car2 = createCar("Tesla", "Black", 500000);

// let car3 = Object.assign({}, car2);

// car3.brand = "BMW";

// car2.starting();
// car3.starting();



// Arguments 
// function sum(num1, num2) {
//     console.log(num1 + num2);
//     console.log(arguments);
//     // console.log(arguments[1]);

//     for(let item of Object.values(arguments)) {
//         console.log(item);
//     }
// }

// sum(1,3,4,7,9);



// Products Search 
// let products = [
//     {name: "Hp Laptop", price: 45000, color: ['black','white','blue']},
//     {name: "Xaomi Phone", price: 270000, color: ['black','white','blue']},
//     {name: "iphone", price: 120000, color: ['gold','sliver','black']},
//     {name: "Asos Laptop", price: 45000, color: ['black','white','blue']},
//     {name: "Acerlaptop", price: 45000, color: ['black','white','blue']},
// ]

// function searchProducts(products, search) {
//     let searchItem = [];
//     for(const product of products) {
//         if(product.name.toLowerCase().includes(search.toLowerCase())) {
//             searchItem.push(product);
//         }
//     }

//     return searchItem;
// }

// console.log(searchProducts(products, 'laptop'));



// Function 

// Arguments
// function create() {
//     for(let item of arguments) {
//         console.log(item);
//     }
//     console.log(arguments);
//     console.log(arguments[0]);
// }

// create("Erfan","Tanim","Karim");



// function test(x,y) {
//     console.log(typeof x);
//     console.log(typeof y);
// }

// test(10);


// Rest Parameter 
// function sum(...args) {
//     console.log(args);
//     args.push(100);
//     console.log(args);
// }

// function test(x, y, ...args) {
//     console.log(args);
// }

// test(1,20,40,2,4);

// sum(1,2,3,4,8);


// The Argument Object 
// function findMax() {
//     let max = -Infinity
//     for(let val of arguments) {
//         max = Math.max(max, val);
//     }

//     return max;
// }

// console.log(findMax(1,10,5,56,9,2));


// function fullName(lastName, firstName = 'Md') {
//     let fullname = `${firstName} ${lastName}`;
//     return fullname;
// }

// console.log(fullName("Erfan"));



// class Car {
//     constructor(name, price) {
//         this.name = name;
//         this.price = price;
//     }
// }

// const car1 = new Car("BMW", 1200000);
// const car2 = new Car("Toyota", 450000);
// console.log(typeof car1)
// console.log(typeof car2)

// for(let item of Object.values(car1)) {
//     console.log(item);
// }

// for(let item in car2) {
//     console.log(car2[item]);
// }

// let car3  = car1;
// console.log(car3);
// console.log(car1);
// car3.name = "Erfan";
// console.log(car1);


// let Student = {
//     name: "Erfan",
//     age: 24,
//     marks: 66.6,
//     writing: function() {
//         console.log("Writing " + this.name + " now");
//     }
// }

// Student.writing();
// console.log(Student);



// class CreateStudent {
//     constructor(name, age, marks) {
//         this.name = name;
//         this.age = age;
//         this.marks = marks;
//     }
//     wrinting() {
//         console.log("Writing " + this.name + " now");
//     }
// }

// const std1 = new CreateStudent("Erfan", 24, 66.6);
// const std2 = new CreateStudent("Tanim", 23, 80.0);
// console.log(std1);
// console.log(std2);

// std1.wrinting();
// std2.wrinting();

// for(let x in std1) {
//     console.log(x);
// }




// class Car {
//         constructor(name, year) {
//         this.name = name;
//         this.year = year;
//         }
//         age(x) {
//             return x - this.year;
//         }
//     }
    
//     const date = new Date();
//     let year = date.getFullYear();
    
//     const myCar = new Car("Ford", 2014);
//     console.log( "My car is " + myCar.age(year) + " years old.");




// Mobile with age and discount price method -- Best Xample 
class Mobile {
    constructor(brand, model, price, buyingYear) {
        this.brand = brand;
        this.model = model;
        this.price = price;
        this.buyingYear = buyingYear;
    }

    age(currentYear) {
        return currentYear - this.buyingYear;
    }
    discountPrice(discount) {
        let lessPrice = this.price * (discount/100);
        return this.price - lessPrice;
    }
}

const myMobile = new Mobile('Xaomi', 'S10', 12000, 2018);

console.log(myMobile);

const data = new Date();
let currentYear = data.getFullYear();
console.log(myMobile.age(currentYear));
console.log(myMobile.discountPrice(10));