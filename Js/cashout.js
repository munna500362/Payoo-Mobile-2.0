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
        
    }
    
    else{
        alert("Plase try again");
    }


})