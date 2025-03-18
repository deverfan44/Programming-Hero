const loadBtn = document.getElementById("loadUserBtn");

loadBtn.addEventListener('click', (event)=> {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => {
            displayUser(data);
        })
})


const displayUser = (users) => {
    for(let user of users) {
        const div = document.createElement("div");
        div.classList.add('divcolor');
        console.log(user);
        div.innerHTML = `<h3 class="test">${user.name}</h3>
            <p>${user.email}</p>
        `;

        document.getElementById("usersContainer").appendChild(div);
    }
}