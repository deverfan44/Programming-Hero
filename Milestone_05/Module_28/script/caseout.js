document.getElementById('caseOut').addEventListener('click', function(event){
    event.preventDefault();
    const amount = Number(getInputValue('amountcase'));
    const pinNumber = Number(getInputValue('pinNumbercase'));
    const accountNumber = getInputValue('accountNumbercase');
    const currentBalance = Number(getInnerText('balance'));

    if(accountNumber.length === 11) {
        if(pinNumber === 1234) {
            const newBalance = currentBalance-amount;
            setInnerText(newBalance, 'balance');
            addTransactioinHistory('WithDraw',accountNumber,amount);
        }
        else{
            alert("Your Pin Number is Incorrect");
        }
    }
    else{
        alert("Yout Account Number is Incorrect");
    }
})