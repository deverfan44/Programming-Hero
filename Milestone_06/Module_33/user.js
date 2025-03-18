const loadUser = function() {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(res => res.json())
        .then(data => {
            displayUser(data);
        })
}


const displayUser = (data) => {
    for(let user of data) {
        console.log(user);
    }
}