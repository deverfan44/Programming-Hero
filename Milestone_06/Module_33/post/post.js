const loadPosts = () => {
    fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => res.json())
        .then(data => {
            displayDataUi(data);
        })
}


const displayDataUi = (posts) => {
    const postContainer = document.getElementById('postContainer');
    
    for(const post of posts) {
        const div = document.createElement("div");
        div.classList.add("text-center", "border", "border-black", "p-5", "bg-orange-300");
        div.innerHTML = `
            <h2 class="text-xl font-semibold mb-2">${post.title}</h2>
            <p class="text-justify">${post.body}</p>
        `
        postContainer.appendChild(div);
    }
}

loadPosts();