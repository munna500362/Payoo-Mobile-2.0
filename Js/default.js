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