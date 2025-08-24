document.getElementById('btn-login-cashout').addEventListener('click', function(event){
    event.preventDefault();

    const cashoutNumber = getInputFieldValueById('input-Cash-Out');
    const cashoutPin = getInputFieldValueById('input-Cashout-Pin');

    console.log("Cashout Amount :", cashoutNumber, "CashoutPin :", cashoutPin);

    if(cashoutPin === 1234){
        AvailableBalance = getTextFieldValueById('available-money');
        NewBalance = AvailableBalance-cashoutNumber;
        // console.log(NewBalance)
        document.getElementById('available-money').innerText = NewBalance;
        
        const div = document.createElement('div');
        div.classList.add('bg-green-500', 'text-white', 'text-xl');
        div.innerHTML = `
        <h4>Cashout Histroy</h4>
        <p>Cashout Balance: ${cashoutNumber}, New Balance: ${NewBalance}</p>
        `
        document.getElementById('Transaction-Section').appendChild(div);
    }
    
    else{
        alert("Plase try again");
    }


})