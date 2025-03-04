document.getElementById('addMoney').addEventListener('click', function(event){
    event.preventDefault();
    const amount = Number(getInputValue('amount'));
    const pinNumber = Number(getInputValue('pinNumber'));
    const accountNumber = getInputValue('accountNumber');
    const currentBalance = Number(getInnerText('balance'));
    const SelectedBank = document.getElementById('bank').value;

    if(accountNumber.length === 11) {
        if(pinNumber === 1234) {
            const newBalance = currentBalance+amount;
            setInnerText(newBalance, 'balance');
            addTransactioinHistory('Deposite',accountNumber,amount,SelectedBank);
        }
        else{
            alert("Your Pin Number is Incorrect");
        }
    }
    else{
        alert("Yout Account Number is Incorrect");
    }
})