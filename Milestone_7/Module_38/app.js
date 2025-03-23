
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => {
//     showData(data);
// })
async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    showData(data);
}

let username = [];
function showData(users) {
    users.forEach(user => {
        username.push(user.name);
    })
}

(async ()=> {
    await fetchData();
    console.log(username);
})();