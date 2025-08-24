function getInputFieldValueById(id){
    const inputNumber = document.getElementById(id).value;
    const inputNumberValue = parseFloat(inputNumber);
    
    return inputNumberValue;


}

function getTextFieldValueById(id){
    const textNumber = document.getElementById(id).innerText;
    const textNumberValue = parseFloat(textNumber);

    return textNumberValue;
    
}

function showSectionById(id){
     document.getElementById('admony-form').classList.add("hidden");
     document.getElementById('cashout-form').classList.add('hidden');
     document.getElementById('Transaction-Section').classList.add('hidden');
    
     document.getElementById(id).classList.remove("hidden")

}