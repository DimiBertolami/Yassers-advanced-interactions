const mouse = {
    position: {
        x: 0,
        y: 0,
    }
}
/*****************************************************************************************************
 * EXERCISE ONE - PARRALAX CAROUSEL
 *****************************************************************************************************/
const carousel = {
    container: document.getElementById('carouselContainer'),
    position: {
        top: document.getElementById('carouselContainer').getBoundingClientRect().top,
        right: document.getElementById('carouselContainer').getBoundingClientRect().right,
        left: document.getElementById('carouselContainer').getBoundingClientRect().left,
        bottom: document.getElementById('carouselContainer').getBoundingClientRect().bottom,
    }
    ,
    backgroundImageIndex: 0,
    updateInterval: 1,
    lastTimeSinceImageUpdate: 0,
    images: [
        image1 = {
            url: './assets/carousel/image1.webp'
        },
        image2 = {
            url: './assets/carousel/image2.jpg'
        },
        image3 = {
            url: './assets/carousel/image3.webp'
        },
        image4 = {
            url: './assets/carousel/image4.jpg'
        }],
    nextImage(delta) {
        const secondsSinceLastRan = (delta - this.lastTimeSinceImageUpdate) / 1000;
        if (secondsSinceLastRan < 1 * this.updateInterval) return;
        if (this.backgroundImageIndex < this.images.length - 1) {
            this.backgroundImageIndex++
            this.container.style.backgroundImage = `url(${this.images[this.backgroundImageIndex].url})`
        } else {
            this.backgroundImageIndex = 0;
            this.container.style.backgroundImage = `url(${this.images[this.backgroundImageIndex].url})`
        }
        this.lastTimeSinceImageUpdate = delta;
    }
}
/*****************************************************************************************************
 * EXERCISE TWO - COLLAGE
 *****************************************************************************************************/
const collage = {

}




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
themeToggler.addEventListener('click', changeTheme);
function changeTheme() {
    try {
        if (document.body.classList.contains('lightMode')) {
            document.body.classList.remove('lightMode');
            document.body.classList.add('darkMode');
        } else {
            document.body.classList.remove('darkMode');
            document.body.classList.add('lightMode');
        }
    } catch (error) {
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

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}
/*****************************************************************************************************
 * GLOBAL MAIN FUNCTION
 *****************************************************************************************************/
document.addEventListener('mousemove', (e) => {
    updateMousePosition(e);
    runMain();
});
function updateMousePosition(event) {
    mouse.position.x = event.pageX;
    mouse.position.y = event.pageY;
}
function runMain() {
    requestAnimationFrame(main)
}
function main(delta) {
    if (!document.hasFocus()) return
    requestAnimationFrame(main)
    runCarousel(delta)
}
function runCarousel(delta) {
    if ((mouse.position.y > carousel.position.top
        && mouse.position.y < carousel.position.bottom)
        &&
        (mouse.position.x > carousel.position.left &&
            mouse.position.x < carousel.position.right)) {
        carousel.nextImage(delta)
    } else {
        return
    }
}