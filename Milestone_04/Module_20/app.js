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