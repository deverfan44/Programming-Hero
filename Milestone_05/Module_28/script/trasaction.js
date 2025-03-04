function addTransactioinHistory(status,accountNumber,amount,banktype) {
    const div = document.createElement('div');
    div.classList.add("flex","items-center","gap-x-5","border","border-gray-400","rounded","p-2","mt-2");
    div.innerHTML = `
        <div><img src=${"./images/wallet1.png"} alt=""></div>
        <div>
            <h2 class="text-xl">${status}</h2>
            <p>from ${accountNumber} in ${banktype}</p>
            <p>Today <time datetime="">01:44 AM</time></p>
        </div>
        <div class="ml-auto">
            <p>$<span id="depoite_amount">${amount}</span></p>
        </div>
    `
    document.getElementById('transaction_container').appendChild(div);
}