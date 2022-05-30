

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
/*****************************************************************************************************
 * EXERCISE TWO - COLLAGE
 *****************************************************************************************************/
const collage = {
    imageContainers: Array.from(document.querySelectorAll('.image')),
    randomImageURL: `https://picsum.photos/500/500?random=`,
    imageIsBig: false,
    setRandomImages() {
        let i = 0;
        this.imageContainers.forEach((container) => {
            this.randomImageURL += i;
            container.style.backgroundImage = `url(${this.randomImageURL})`
            i++;
        })
    },
    getImageURL(containerIndex) {
        return this.imageContainers[containerIndex].style.backgroundImage;
    },
    setEventListeners() {
        this.imageContainers.forEach((container) => {
            container.addEventListener('click', () => {
                this.enlargeImage(container);
            })
        })
    },
    enlargeImage(container) {
        if (this.imageIsBig) return;
        container.classList.add('active')
        this.addDescriptionFromAttribute(container)
        this.addDescriptionWithJS(container)
        this.imageIsBig = true;
        this.imageBackToGrid(container)
    },
    addDescriptionFromAttribute(container) {
        const descElem = document.createElement('p');
        descElem.classList.add('image-description');
        descElem.innerText = container.getAttribute('description')
        container.appendChild(descElem)
    },
    addDescriptionWithJS(container) {
        const descElem = document.createElement('p');
        descElem.classList.add('image-description');
        descElem.innerText = `Hi I am a description made with JS! I found this image for you at: ${container.style.backgroundImage.slice(5, -2)}`;
        container.appendChild(descElem)
    },
    beautifyURL(url) {
        let beatifiedURL = url.slice(5, -2);
        return beatifiedURL
    },
    imageBackToGrid(container) {
        container.addEventListener('click', () => {
            container.classList.remove('active')
            container.innerHTML = '';
            this.imageIsBig = false;
            this.setEventListeners()
        })
    },
}
/*****************************************************************************************************
 * EXERCISE THREE - POKEMON IMAGE TOOLTIPS
 *****************************************************************************************************/
const pokeNames = Array.from(document.querySelectorAll('.poke'));
pokeNames.forEach((name) => {
    name.addEventListener('mouseover', () => {
        const sprite = new Image();
        sprite.src = `./assets/pokemon/${name.innerText}.png`;
        sprite.style.position = 'absolute';
        sprite.style.left = '0';
        sprite.style.transform = 'translateY(-100%)'
        sprite.style.height = '400%'
        if (name.contains(sprite)) return
        if (name.hasChildNodes()) {
            name.innerHTML = name.innerText;
        }
        name.appendChild(sprite)
    })
})
pokeNames.forEach((name) => {
    name.addEventListener('mouseleave', () => {
        name.innerHTML = name.innerText;

    })
})
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
 * CORE 
 *****************************************************************************************************/
init()
const mouse = {
    position: {
        x: 0,
        y: 0,
    }
}
document.addEventListener('mousemove', (e) => {
    updateMousePosition(e);
    runMain();
});
function updateMousePosition(event) {
    mouse.position.x = event.pageX;
    mouse.position.y = event.pageY;
}
function init() {
    //DARK MODE ON START <3
    changeTheme();
    //STARTING LAUNCHERS FOR SITE
    collage.setEventListeners()
    collage.setRandomImages();
}
function main(delta) {
    if (!document.hasFocus()) return
    requestAnimationFrame(main)
    runCarousel(delta)
}
function runMain() {
    requestAnimationFrame(main)
}