// const friends = ['elon','bill','waren','joker'];
// for(let friend of friends) {
//     console.log(friend);
// }
// console.log('\n');
// for(let idx in friends) {
//     console.log(friends[idx]);
// }


// Reverse array 

// const number = [10,20,30,40,50];
// number.reverse();
// console.log(number);

// without reverse function 
// const number = [10,20,30,40,50];
// let l=0, r=number.length-1;
// while(l<r) {
//     let tmp = number[l];
//     number[l] = number[r];
//     number[r] = tmp;
//     l++; r--;
// }
// console.log(number);


// const number = [10,20,30,40,50];
// const reverse_number = [];
// for(let val of number) {
//     reverse_number.unshift(val);
// }
// console.log(reverse_number);


// const myname = 'erfan';
// const rev_name = myname.split("").reverse().join("");
// console.log(rev_name);

// const myname = 'erfan';
// let rev_name = "";
// for(let x of myname) {
//     rev_name = x+rev_name;
// }
// console.log(rev_name.length);
// console.log(rev_name);
// console.log(typeof rev_name);


// const myname = 'I am Erfan';
// const rev_sentence = myname.split(" ").reverse().join(" ");
// console.log(rev_sentence);



// sorting Array 
// const numbers = [2,6,3,1,4];
// numbers.sort();
// console.log(numbers);

// const numbers = [2,6,3,1,4];
// numbers.sort().reverse();
// console.log(numbers);


// const numbers = [2,6,3,1,4];

// for(let i=0; i<numbers.length; i++) {
//     for(let j=i; j<numbers.length; j++) {
//         if(numbers[i]>numbers[j]) {
//             let tmp = numbers[i];
//             numbers[i] = numbers[j];
//             numbers[j] = tmp;
//         }
//     }
// }
// console.log(numbers);
// console.log(numbers.reverse());


// const numbers = [2,6,3,1,4];
// console.log(numbers.toSorted());
// console.log(numbers);

// console.log(numbers.toReversed());
// console.log(numbers);


// const numbers = [2,6,23,11,4];

// console.log(numbers.toSorted());
// console.log(numbers.sort());


// task 
// const friends = ['Tom', 'Tim', 'Tin', 'Tik']
// let singleStr = "";
// for(let fri of friends) {
//     singleStr = singleStr.concat(fri);
// }
// console.log(singleStr);


// task 
// const statement = 'I am a hard working person';
// const newState = statement.split(" ");
// for(let i=newState.length-1; i>=0; i--) {
//     console.log(newState[i]);
// }

// console.log(newState.reverse().join(" "));
