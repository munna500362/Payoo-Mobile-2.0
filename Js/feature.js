document.getElementById('add-money-button').addEventListener('click', function(event){
    event.preventDefault();
    
    showSectionById('admony-form');
    console.log("addmoney secton")
    
})

document.getElementById('cash-out-button').addEventListener('click',function(event){
    event.preventDefault();

    showSectionById('cashout-form');
})

document.getElementById('transaction-button').addEventListener('click',function(event){
    event.preventDefault();

    showSectionById('Transaction-Section');
})
