// function playBtn(){
//     // home page ----->
//     const homeSection=document.getElementById('home')
//     homeSection.classList.add('hidden')

//     // play-ground------>
//     const playGround=document.getElementById('play-ground')
//     playGround.classList.remove('hidden')
// }

function playGame() {
    const alphabet=getARadomeAlphabet()

    // set-alphabet
    const setAlphabet=document.getElementById('set-alphabet');
    setAlphabet.innerText=alphabet
    
    // set background color 
    setBackgroundColorById(alphabet)
}

function enterBtn() {
    getHiddenAdd('home')
    getHiddenRemove('play-ground')
    playGame()
}