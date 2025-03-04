document.getElementById('caseOutSection').style.display = 'none';
document.getElementById('transactionSection').style.display = 'none';

document.getElementById('addMoneyBtn').addEventListener('click', function(event){
    // setDisplayBlock('addMoneySection');
    // setDisplayNone('caseOutSection');
    handleToggle('addMoneySection','block');
    handleToggle('caseOutSection','none');
    handleToggle('transactionSection','none');
})
document.getElementById('caseOutBtn').addEventListener('click', function(event){
    // setDisplayBlock('caseOutSection');
    // setDisplayNone('addMoneySection');
    handleToggle('addMoneySection','none');
    handleToggle('caseOutSection','block');
    handleToggle('transactionSection','none');
})
document.getElementById('transactionBtn').addEventListener('click', function(event){
    // setDisplayBlock('caseOutSection');
    // setDisplayNone('addMoneySection');
    handleToggle('addMoneySection','none');
    handleToggle('caseOutSection','none');
    handleToggle('transactionSection','block');
})

