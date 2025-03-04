// Return Inside Input Value
function getInputValue(id) {
    return document.getElementById(id).value;
}
//Return InnerText
function getInnerText(id) {
    return document.getElementById(id).innerText;
}
//Set new innerText
function setInnerText(val, id) {
    document.getElementById(id).innerText = val;
}

//Set display Block
function setDisplayBlock(id){
    document.getElementById(id).style.display = 'block';
}
//Set display none
function setDisplayNone(id){
    document.getElementById(id).style.display = 'none';
}
//Toggle
function handleToggle(id, status){
    document.getElementById(id).style.display = status;
}