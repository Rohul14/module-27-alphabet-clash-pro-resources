function getHiddenAdd(inputId) {
    const inputElement=document.getElementById(inputId);
    const input= inputElement.classList.add('hidden');
    return input;
}
function getHiddenRemove(inputId) {
    const inputElement=document.getElementById(inputId);
    const input=inputElement.classList.remove('hidden');
    return input;
}

// function create background color ----->

function setBackgroundColorById(elementId) {
    const element=document.getElementById(elementId);
    element.classList.add('bg-orange-600')
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