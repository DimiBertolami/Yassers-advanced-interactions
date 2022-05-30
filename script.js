/*****************************************************************************************************
 * EXERCISE ONE - PARRALAX CAROUSEL
 *****************************************************************************************************/





/*****************************************************************************************************
 * EXERCISE TWO - COLLAGE
 *****************************************************************************************************/





/*****************************************************************************************************
 * EXERCISE THREE - POKEMON IMAGE TOOLTIPS
 *****************************************************************************************************/





/*****************************************************************************************************
 * EXERCISE FOUR - CHASER GAME
 *****************************************************************************************************/





/*****************************************************************************************************
 * EXERCISE FIVE - RUNNER GAME
 *****************************************************************************************************/





/*****************************************************************************************************
 * EXERCISE SIX - BE CREATIVE - USE KEY/MOUSE INPUTS
 *****************************************************************************************************/





/*****************************************************************************************************
 * DARK MODE
 *****************************************************************************************************/
const themeToggler = document.getElementById('theme-toggler');
//DARK MODE ON START <3
changeTheme();
themeToggler.addEventListener('click',changeTheme);
function changeTheme(){
    try{
    if (document.body.classList.contains('lightMode')){
        document.body.classList.remove('lightMode');
        document.body.classList.add('darkMode');
    }else{
        document.body.classList.remove('darkMode');
        document.body.classList.add('lightMode');
    }
    }catch(error){
        console.error('There was an error changing the Theme');
        console.log(`function: changeTheme`)
        console.log(`error:${error}`)
    }
}
/*****************************************************************************************************
 * JS BELOW CAME WITH INITIAL PROJECT
 * SELECTS ALL SPANNS WITH CLASS LETTER
 * FILLS IT WITH A RANDOM LETTER FROM THE ALPHABET
 *****************************************************************************************************/
Array.from(document.querySelectorAll(".letter")).forEach(el => {
   el.innerText = randomLetter();
});

function randomLetter(){
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
