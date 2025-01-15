function getHiddenAdd(inputId) {
    const inputElement=document.getElementById(inputId);
    inputElement.classList.add('hidden');
}

function getHiddenRemove(inputId) {
    const inputElement=document.getElementById(inputId);
    inputElement.classList.remove('hidden');
}

// function create background color ----->

function setBackgroundColorAddById(elementId) {
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-600')
}
function setBackgroundColorRemoveById(elementId) {
    const element=document.getElementById(elementId);
    element.classList.remove('bg-orange-600')
}
// Create random alphabet 
function getARadomeAlphabet() {
    const alphabetStr='abcdefghijklmnopqrstuvwxyz'
    const alphabets=alphabetStr.slice('')

    // random number create 
    const randomNumber=Math.random()*25
    const index=Math.round(randomNumber)
    
    // random alphabet
    const alphabet=alphabets[index]
    return alphabet;
    
}

function getTextElementById(elementId) {
    const element=document.getElementById(elementId);
    const elementText=element.innerText;
    const value=parseInt(elementText)
    return value;
}
function getElementTextById(elementId) {
    const element=document.getElementById(elementId)
    const text=element.innerText;
    return text;
}
function setTextElementByIdAnaValue(elementId,value) {
    const element=document.getElementById(elementId)
    element.innerText=value;
}

