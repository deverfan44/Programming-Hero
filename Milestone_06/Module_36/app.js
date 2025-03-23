// console.log("Hello Locale");

// let name = "Md Arfatul Islam";
// let age = 24;

// localStorage.setItem('myName', name);
// localStorage.setItem('myAge',age);
// localStorage.setItem('isStudent',true);


// console.log(localStorage.getItem('myName'));

// localStorage.removeItem('myAge');

// const arr = [1,2,3];
// localStorage.setItem('numbers',arr);
// console.log(localStorage.getItem('numbers'));
// console.log(typeof localStorage.getItem('numbers'));


// localStorage.clear();
// const person = {
//     'name':"Tanim",
//     'address': 'hathazari',
//     'post-code': 3553
// }
// // stringify 
// const covertPerson = JSON.stringify(person);

// localStorage.setItem('user',covertPerson);
// console.log(localStorage.getItem('user'));
// // parse
// console.log(JSON.parse(localStorage.getItem('user')).name);



// const numbers = [1,2,3,4,5];
// localStorage.setItem('num',JSON.stringify(numbers));

// console.log(localStorage.getItem('num'));
// JSON.parse(localStorage.getItem('num')).forEach(element => {
//     console.log(element);    
// });





// Add to cart 
// if(localStorage.getItem('addToCart') === null) {
//     localStorage.setItem('addToCart',JSON.stringify({}));
// }

// // Add localstorage
// function addLocalStorage(pName, pQuan) {
//     const parseCart = JSON.parse(localStorage.getItem('addToCart'));
//     parseCart[pName] = pQuan;
//     localStorage.setItem('addToCart',JSON.stringify(parseCart));
// }
// // ADD Button 
// document.getElementById('addBtn').addEventListener('click', (event) => {
//     const productName = document.getElementById('productName').value;
//     const productQuantity = document.getElementById('productQuantity').value;
//     addLocalStorage(productName,productQuantity);
    
//     document.getElementById('productName').value = "";
//     document.getElementById('productQuantity').value = "";
// })

// // display in UI
// function displayCart() {
//     const cartContainer = document.getElementById('cartContainer');
//     // checking
//     if(!cartContainer) {
//         console.error('Cartcontainer not found');
//         return;
//     }

//     const products = JSON.parse(localStorage.getItem('addToCart'));
//     console.log(products);
//     for(let key of Object.keys(products)) {
//         const li = document.createElement('li');
//         li.innerText = key + " " + products[key];
//         cartContainer.appendChild(li);
//     }
// }
// displayCart();




// Again Practice Add to Cart with more readable
const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', (event) => {
    const productName = document.getElementById('productName');
    const productQuantity = document.getElementById('productQuantity');
    const pName = productName.value;
    const pQuan = productQuantity.value;
    if (!pName || !pQuan) {
        alert('Please fill in both fields');
        return;
    }
    setToLocalStorage(pName,pQuan);
    displayProduct();

    productName.value = "";
    productQuantity.value = "";
})

const setToLocalStorage = (pName,pQuan) => {
    const previousProducts = getProductFromLocalStorage();
    console.log(previousProducts);
    previousProducts[pName]=pQuan;
    localStorage.setItem('cart',JSON.stringify(previousProducts));
    
}
const getProductFromLocalStorage = () => {
    let cart = {};
    const getProduct = localStorage.getItem('cart');
    if(getProduct) {
        cart = JSON.parse(getProduct);
    }

    return cart;
}

function displayProduct() {
    const products = getProductFromLocalStorage();
    const cartContainer = document.getElementById('cartContainer');
    cartContainer.innerHTML = '';
    console.log(products);
    // checking
    if(!cartContainer) {
        console.error('Cartcontainer not found');
        return;
    }
    for(let key of Object.keys(products)) {
        const li = document.createElement('li');
        li.innerText = key + " " + products[key];
        cartContainer.appendChild(li);
    }
}