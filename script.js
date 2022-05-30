



//-----SECTION 5-----
//RANDOM LETTERS
Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}


//DARK-MODE
const btnMode = document.getElementById('modeSwitch');
btnMode.addEventListener('click',()=>{
    if(document.body.classList.contains('lightMode')){
    document.body.classList.remove('lightMode');
    document.body.classList.add('darkMode')
}else{
    document.body.classList.remove('darkMode');
    document.body.classList.add('lightMode')
}
})