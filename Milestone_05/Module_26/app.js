const inputName = document.getElementById('fname');
inputName.addEventListener('focus', function() {
    document.getElementById('ffname').innerText = "Enter your name: ";
    inputName.setAttribute('placeholder', 'Type your name');
})
inputName.addEventListener('focusout', function() {
    document.getElementById('ffname').innerText = "";
    inputName.setAttribute('placeholder', '');
})


const deleteHandel = document.getElementById('delete');
deleteHandel.addEventListener('keyup', function(event) {
    if(event.target.value == 'delete') {
        document.getElementById('btn_delete').removeAttribute('disabled');
        document.getElementById('btn_delete').addEventListener('click', function() {
            console.log('Successfully delete');
            document.getElementById('delete').value = "";
        })
    }
    else{
        document.getElementById('btn_delete').setAttribute('disabled',true);
    }
})

document.getElementById('section_1').style.textAlign = 'center';

document.getElementById('div_1').style.width = '250px';
document.getElementById('div_1').style.height = '200px';
document.getElementById('div_1').style.border = '1px solid black';
document.getElementById('div_1').style.margin = '20px auto';

document.getElementById('btn_div_1').style.cursor = 'pointer';
document.getElementById('btn_div_1').style.padding = '10px';
document.getElementById('inputColor').style.padding = '10px';


document.getElementById('inputColor').addEventListener('keyup', function(event) {
    const colorName = event.target.value;
    document.getElementById('btn_div_1').addEventListener('click', function() {
        document.getElementById('div_1').style.backgroundColor = colorName;
    })
})


const bubbleSection = document.getElementById('bubble_section');
const bubbleDiv = document.getElementById('bubble_div');
const bubbleList = document.getElementById('bubble_list');
const bubbleItem2 = document.getElementById('item_2');
const bubbleItem = document.getElementsByClassName('item');

bubbleSection.style.border = '2px solid red';
bubbleDiv.style.border = '2px solid purple';
bubbleList.style.border = '2px solid orange';

bubbleSection.style.margin = '50px';
bubbleSection.style.padding = '30px';
bubbleDiv.style.padding = '20px';
bubbleList.style.padding = '20px';
bubbleList.style.listStyle = 'none';

for(const item of bubbleItem) {
    item.style.border = '2px solid teal';
    item.style.padding = '10px';
}

for(const item of bubbleItem) {
    item.addEventListener('click', function(event){
        console.log(event.target.innerText);
        event.stopPropagation();
    })
}
bubbleItem2.addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
    event.stopPropagation();
})
bubbleList.addEventListener('click', function(event){
    console.log('bubble list ul clicked');
    event.stopPropagation();
})
bubbleDiv.addEventListener('click', function(event){
    console.log('bubble div clicked');
})



// deleget Selection
const delegetSection = document.getElementById('delget_section');
const delegetList = document.getElementById('delget_list');
const delegeItems = document.getElementsByClassName('itm');

// have a problem
// for(const item of delegeItems) {
//     item.style.fontSize = '25px';
//     item.addEventListener('click', function(event) {
//         event.target.parentNode.removeChild(event.target);
//     })
// }

// solution

delegetList.style.fontSize = '25px';
delegetList.addEventListener('click', function(event){
    event.target.parentNode.removeChild(event.target);
})


document.getElementById('addNew').addEventListener('click', function(event){
    const li = document.createElement('li');
    li.innerText = 'This is a new item';
    delegetList.appendChild(li);
})