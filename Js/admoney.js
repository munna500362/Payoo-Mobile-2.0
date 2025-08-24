document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    admoneyNumber = getInputFieldValueById("input-add-money");
    pinNumber = getInputFieldValueById('input-pin-admoney');

    console.log("Addmoney Number is: ",admoneyNumber,"Pin Number is: ", pinNumber);

    if( pinNumber = 12345){
        textAddMoney = getTextFieldValueById('available-money');
        console.log(textAddMoney)
        
        NewMoney = textAddMoney + admoneyNumber;

        document.getElementById('available-money').innerText = NewMoney;
        console.log("hellow")
    }

    else{
        alert("Add Money Faild");
    }
})