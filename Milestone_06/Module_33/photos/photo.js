const photoLoad = () => {
    fetch("https://jsonplaceholder.typicode.com/photos")
        .then(res => res.json())
        .then(data => {
            displayPhoto(data);
        })
}

function displayPhoto(photos) {
    // const photoContainer = document.getElementById('photoContainer');
    // for(let i=0; i<10; i++) {
    //     const element = photos[i];
    //     const div = document.createElement("div");
    //     div.innerHTML = `<img src="${element.url}" alt="">`;
    //     photoContainer.appendChild(div);
    // }

    console.log(photos);
}
photoLoad()