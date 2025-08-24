document.getElementById('btn-login').addEventListener('click', function(event){
    event.preventDefault();

    admoneyNumber = getInputFieldValueById("input-add-money");
    pinNumber = getInputFieldValueById('input-pin-admoney');

    console.log("Addmoney Number is: ",admoneyNumber,"Pin Number is: ", pinNumber);

    if(isNaN(admoneyNumber)){
        alert('Please wright the right number.');
        return;
    }
 

    if( pinNumber === 12345){
        textAddMoney = getTextFieldValueById('available-money');
        console.log(textAddMoney)
        
       
        NewMoney = textAddMoney + admoneyNumber;

        document.getElementById("available-money").innerText = NewMoney;

        const p = document.createElement('p');
        p.classList.add('text-xl');
        p.innerText = `Admoney : ${admoneyNumber} tk. New Balance : ${NewMoney}`;

        document.getElementById('Transaction-Section').appendChild(p);
        
        console.log(p)
    }

    else{
        alert("Add Money Faild");
    }
})