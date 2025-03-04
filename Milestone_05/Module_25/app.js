
function changeColor(){
    const cards = document.getElementsByClassName('card');
    for(const card of cards) {
        card.style.backgroundColor = 'rgb(122, 183, 236)';
    }

    const cardTitle = document.querySelectorAll('.card_title h3');
    for(const title of cardTitle) {
        title.innerText = 'JavaScript';
    }

    document.getElementById("header").classList.add('hide');
}

function changeText() {
    let text = document.getElementById('headBtn').innerText;
    if(text.toLowerCase() === 'sign up') {
        document.getElementById('headBtn').innerText = 'SignIn';
    }
    else {
        document.getElementById('headBtn').innerText = 'Logout';
    }
}

// const backChange = document.getElementById('backColor');
// backChange.onclick = function(){
//     document.body.style.background = 'black';
// }
function bgBlack(){
    document.body.style.background = 'black';
}
const backChange = document.getElementById('backColor');
backChange.onclick = bgBlack;


// Using AddEventListener 
document.getElementById('purpleColor').addEventListener('click', function() {
    document.body.style.background = 'purple';
}
);

document.getElementById('greenColor').addEventListener('mouseover', ChangeGreen);
function ChangeGreen() {
    document.body.style.background = 'green';
}

document.getElementById('greenColor').addEventListener('mouseout', function ChangeDefault() {
    document.body.style.background = 'white';
});
document.getElementById('greenColor').addEventListener('click', function ChangeDefault() {
    document.body.style.background = 'red';
});


const titleChange = document.querySelector('#service_section button');
console.log(titleChange);

titleChange.addEventListener('click', function() {
    document.querySelector('.service_title h1').innerText = 'Best Products'

})

document.getElementById('inputBtn').addEventListener('click', function() {
    const updateP = document.getElementById('updateName');
    let inputname = document.getElementById('inputName');
    updateP.innerText = inputname.value;
})


// System 1 
document.getElementById('postBtn').addEventListener('click', function() {
    if(document.getElementById('newCmnt').value != "") {
        const newComment = document.getElementById('newCmnt').value;
        const div = document.createElement('div');
        const p = document.createElement('p');
        p.innerText = newComment;
        div.appendChild(p);
        div.classList.add('commnet');

        document.getElementById('commnet_box').appendChild(div);

        // clean the text
        document.getElementById('newCmnt').value = "";
    }
})


// System 2 
// document.getElementById('postBtn').addEventListener('click', function() {
//     const newComment = document.getElementById('newCmnt').value;
//     let test = `<div>
//                     <p>${newComment}</p>
//                 </div>`;

//     document.getElementById('commnet_box').appendChild(test);
// })