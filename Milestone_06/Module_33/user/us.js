// const loadUser = function() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//         .then(res => res.json())
//         .then(data => {
//             displayUser(data);
//         })
// }


// const displayUser = (data) => {
//     for(let user of data) {
//         console.log(user);
//     }
// }

// const loadingUser = async () => {
//     try {
//         const response = await fetch("https://jsonplaceholder.typicode.com/users");
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(error){
//         console.log("Here as a error", error);
//     }
// }

// loadingUser();



// async function sum(num1, num2) {
//     return num1+num2;
// }

// sum(10,20).then(res => console.log(res));


// async function fetchApi() {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await response.json();
//     return data;
// }

// fetchApi().then(data => console.log(data));


// const stuInfo = JSON.stringify({ name: "James", roll: 3 }); 
// console.log(stuInfo.name);


const loadUser = function() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            displayUser(data);
        })
}


const displayUser = (data) => {
    console.log(data);
}

loadUser()