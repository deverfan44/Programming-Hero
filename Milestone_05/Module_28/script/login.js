const loginBtn = document.getElementById('login-btn');

loginBtn.addEventListener('click', function(event){
    event.preventDefault();
    const accountNumber = getInputValue('number');
    const pinNumber = parseInt(getInputValue('pin'));

    if(accountNumber.length === 11) {
        if(pinNumber === 1234) {
            window.location.href = './main.html';
        }
        else{
            alert("Your Pin Number is Incorrect");
        }
    }
    else{
        alert("Yout Account Number is Incorrect");
    }
})