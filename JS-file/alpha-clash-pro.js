function play() {
    getHiddenAdd('home')
    getHiddenRemove('play-ground')
    getHiddenAdd('final-score')
    // score and life resat
    setTextElementByIdAnaValue('current-life',5)
    setTextElementByIdAnaValue('current-score',0)
    StartGame()

}

function StartGame() {
    const alphabet=getARadomeAlphabet()

    // set-alphabet
    const setAlphabet=document.getElementById('set-alphabet');
    setAlphabet.innerText=alphabet
    
    // set background color 
    setBackgroundColorAddById(alphabet)
}

// Keyboard key press ------>
function handlerKeyPressEvent(event) {
    const playerKeyPress=event.key
    console.log(playerKeyPress);

    // skip game 
    if (playerKeyPress==='Escape') {
        gameOver()
    }

    // Display showing alphabet press is alphabet
    const displayAlphabet=document.getElementById('set-alphabet');
    const currentAlphabet=displayAlphabet.innerText;
    const expiatedAlphabet=currentAlphabet.toLowerCase();
    // console.log(playerKeyPress,expiatedAlphabet);
    
    if (playerKeyPress===expiatedAlphabet) {

        const getScore=getTextElementById('current-score')
        const newScore=getScore+1
        setTextElementByIdAnaValue('current-score',newScore)

        setBackgroundColorRemoveById(expiatedAlphabet);
        StartGame();
        
    }
    else{

        const getLIfe=getTextElementById('current-life');
        const newLife=getLIfe-1
        setTextElementByIdAnaValue('current-life',newLife)

        if (newLife===0) {
            gameOver()

        }
    }
    
}
document.addEventListener('keyup',handlerKeyPressEvent);

function gameOver() {
    getHiddenAdd('play-ground')
    getHiddenRemove('final-score')
    
    // final score set 
    const listScore= getTextElementById('current-score')
    const finalScore=setTextElementByIdAnaValue('your-score',listScore)
     
    // clear list alphabet highlight color 
    const listAlphabet=getElementTextById('set-alphabet')
    setBackgroundColorRemoveById(listAlphabet)
}
