// function playGame() {
//     const alphabet=getRandomAlphabet()

//     const setDisplay=document.getElementById('set-alphabet')
//     setDisplay.innerText=alphabet 

//     setKeyboardColor(alphabet);
// }

// function enterBtn() {
//     getAddHidden('home')
//     getRemoveHidden('play-ground')
//     playGame()
// }

// function playBtn(){
//     // home page ----->
//     const homeSection=document.getElementById('home')
//     homeSection.classList.add('hidden')

//     // play-ground------>
//     const playGround=document.getElementById('play-ground')
//     playGround.classList.remove('hidden')
// }

// function getAddHidden(elementId) {
//     const inputId=document.getElementById(elementId);
//     inputId.classList.add('hidden')
// }

// function getRemoveHidden(elementId) {
//     const inputId=document.getElementById(elementId);
//     inputId.classList.remove('hidden')
// }

// function getRandomAlphabet() {
//     const alphabetStr='abcdefghijklmnopqrstuvwxyz';
//     const alphabets=alphabetStr.split('');

//     const randomNum=Math.random()*25;
//     const indexNum=Math.round(randomNum);

//     const alphabet=alphabets[indexNum];
//      return alphabet;
// }

// function setKeyboardColor(elementId) {
//     const keyColor=document.getElementById(elementId);
//     keyColor.classList.add('bg-lime-600');
// }

// -------------------------------------->
 // const currentScoreElement=document.getElementById('current-score');
// const currentScoreText=currentScoreElement.innerText;
// const currentScore=parseInt(currentScoreText);
// const newScore=currentScore+1;
// currentScoreElement.innerText=newScore;

// ----------------------------------->
// const currentLifeElement=document.getElementById('current-life');
// const currentLifeText=currentLifeElement.innerText;

// const currentLife=parseInt(currentLifeText);
// const newLife=currentLife-1;
// currentLifeElement.innerText=newLife;