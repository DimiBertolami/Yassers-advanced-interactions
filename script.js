//SCROLL TO TOP ON LOAD
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}
/*****************************************************************************************************
 * EXERCISE ONE - PARRALAX CAROUSEL
 *****************************************************************************************************/
const carousel = {
    container: document.getElementById('carouselContainer'),
    mouseover: false,
    position: {
        top: document.getElementById('carouselContainer').getBoundingClientRect().top,
        right: document.getElementById('carouselContainer').getBoundingClientRect().right,
        left: document.getElementById('carouselContainer').getBoundingClientRect().left,
        bottom: document.getElementById('carouselContainer').getBoundingClientRect().bottom,
    },
    backgroundImageIndex: 0,
    updateInterval: 1,
    lastTimeUpdateRan: 0,
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
    update(delta) {
        const secondsSinceLastRan = (delta - this.lastTimeUpdateRan) / 1000;
        if (secondsSinceLastRan < 1 * this.updateInterval) return;
        if (this.backgroundImageIndex < this.images.length - 1) {
            this.backgroundImageIndex++
        } else {
            this.backgroundImageIndex = 0;
        }
        this.lastTimeUpdateRan = delta;
        this.draw();
    },
    draw() {
        this.container.style.backgroundImage = `url(${this.images[this.backgroundImageIndex].url})`


    },
}
function carouselMain(delta) {
    if (!carousel.mouseover) return;
    carousel.update(delta);
    requestAnimationFrame(carouselMain)
}
function checkForMouseInCarousel() {
    if ((mouse.position.y > carousel.position.top &&
        mouse.position.y < carousel.position.bottom) &&
        (mouse.position.x > carousel.position.left &&
            mouse.position.x < carousel.position.right)) {
        console.log('MOUSE IN CAROUSEL')
        carousel.mouseover = true;
        requestAnimationFrame(carouselMain);
    } else {
        carousel.mouseover = false;
        return
    }
}

/*****************************************************************************************************
 * EXERCISE TWO - COLLAGE
 *****************************************************************************************************/
const collage = {
    imageContainers: Array.from(document.querySelectorAll('.image')),
    // randomImageURL: `https://picsum.photos/500/500?random=`,
    randomImageURL: `none`,
    imageIsBig: false,
    init() {
        this.setRandomImages();
        this.setEventListeners()
    },
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
const chaserGame = {
    mouseover: false,
    gameContainer: {
        DOM: document.getElementById('chaserGameContainer'),
        position: {
            top: document.getElementById('chaserGameContainer').getBoundingClientRect().top,
            left: document.getElementById('chaserGameContainer').getBoundingClientRect().left,
            bottom: document.getElementById('chaserGameContainer').getBoundingClientRect().bottom,
            right: document.getElementById('chaserGameContainer').getBoundingClientRect().right,
        },
        size: {
            width: document.getElementById('chaserGameContainer').getBoundingClientRect().width,
            height: document.getElementById('chaserGameContainer').getBoundingClientRect().height,
        },
    },
    chaser: {
        DOM: document.getElementById('chaser'),

        position: {
            x: 0,
            y: 0,
        },
        direction: {
            x: 0,
            y: 0,
            velocity: 0.5,
        },
        size: {
            height: document.getElementById('chaser').getBoundingClientRect().height,
            width: document.getElementById('chaser').getBoundingClientRect().width,
        },
        collisions: {
            top: false,
            left: false,
            right: false,
            bottom: false,
            mouse: false,
        },
        update(delta) {
            this.setDirection();
        },
        draw() {
            this.drawPosition();
        },
        setDirectionToMousePosition() {

        },
        drawPosition() {
            this.DOM.style.left = `${(this.position.x - (this.size.width / 2)) - chaserGame.gameContainer.position.left}px`;
            this.DOM.style.top = `${(this.position.y - (this.size.height / 2)) - chaserGame.gameContainer.position.top}px`
        },
        setDirection() {
            this.direction.x = mouse.position.x;
            this.direction.y = mouse.position.y;
            if ((this.direction.x - this.size.width / 2) < chaserGame.gameContainer.position.left) {
                this.collisions.left = true;
                this.position.x = chaserGame.gameContainer.position.left + this.size.width / 2;
            } else if ((this.direction.x + this.size.width / 2) > chaserGame.gameContainer.position.right) {
                this.collisions.right = true;
                if (!this.collisions.top && !this.collisions.bottom) {
                    this.position.x = chaserGame.gameContainer.position.right
                } else if (this.collisions.top || this.collisions.bottom) {
                    this.position.x = chaserGame.gameContainer.position.right - this.size.width / 2
                }
            }
            else {
                this.collisions.left = false;
                this.collisions.right = false;
                this.position.x = this.direction.x;
            } if ((this.direction.y - this.size.height / 2) < chaserGame.gameContainer.position.top) {
                this.collisions.top = true;
                this.position.y = chaserGame.gameContainer.position.top + this.size.height / 2;
            } else if ((this.direction.y + this.size.height / 2) > chaserGame.gameContainer.position.bottom) {
                this.collisions.bottom = true;
                if (!this.collisions.left && !this.collisions.right) {
                    this.position.y = chaserGame.gameContainer.position.bottom;
                } else if (this.collisions.left || this.collisions.right) {
                    this.position.y = chaserGame.gameContainer.position.bottom - this.size.height / 2;
                }
            }
            else {
                this.collisions.top = false;
                this.collisions.bottom = false;
                this.position.y = this.direction.y;

            }
            this.updateStyling()

        },
        updateStyling() {
            if (
                this.collisions.top &&
                !this.collisions.left &&
                !this.collisions.right &&
                !this.collisions.bottom
            ) {
                this.DOM.style.height = '25px';
                this.DOM.style.width = '75px';
                this.DOM.style.borderTopRightRadius = '50%';
                this.DOM.style.borderTopLeftRadius = '50%';
                this.DOM.style.borderBottomRightRadius = '100%';
                this.DOM.style.borderBottomLeftRadius = '100%';
                this.DOM.style.backgroundColor = 'orange';
            } else if (
                this.collisions.top &&
                this.collisions.left &&
                !this.collisions.right &&
                !this.collisions.bottom
            ) {
                this.DOM.style.height = '50px';
                this.DOM.style.width = '50px';
                this.DOM.style.borderTopRightRadius = '50%';
                this.DOM.style.borderTopLeftRadius = '0%';
                this.DOM.style.borderBottomRightRadius = '50%';
                this.DOM.style.borderBottomLeftRadius = '50%';
                this.DOM.style.backgroundColor = 'orange';
            } else if (
                this.collisions.top &&
                !this.collisions.left &&
                this.collisions.right &&
                !this.collisions.bottom
            ) {
                this.DOM.style.height = '50px';
                this.DOM.style.width = '50px';
                this.DOM.style.borderTopRightRadius = '0%';
                this.DOM.style.borderTopLeftRadius = '50%';
                this.DOM.style.borderBottomRightRadius = '50%';
                this.DOM.style.borderBottomLeftRadius = '50%';
                this.DOM.style.backgroundColor = 'orange';
            } else if (
                !this.collisions.top &&
                this.collisions.left &&
                !this.collisions.right &&
                !this.collisions.bottom
            ) {
                this.DOM.style.height = '75px';
                this.DOM.style.width = '25px';
                this.DOM.style.borderTopRightRadius = '100%';
                this.DOM.style.borderTopLeftRadius = '50%';
                this.DOM.style.borderBottomRightRadius = '100%';
                this.DOM.style.borderBottomLeftRadius = '50%';
                this.DOM.style.backgroundColor = 'orange';
            } else if (
                !this.collisions.top &&
                this.collisions.left &&
                !this.collisions.right &&
                this.collisions.bottom
            ) {
                this.DOM.style.height = '50px';
                this.DOM.style.width = '50px';
                this.DOM.style.borderTopRightRadius = '50%';
                this.DOM.style.borderTopLeftRadius = '50%';
                this.DOM.style.borderBottomRightRadius = '50%';
                this.DOM.style.borderBottomLeftRadius = '0%';
                this.DOM.style.backgroundColor = 'orange';
            } else if (
                !this.collisions.top &&
                !this.collisions.left &&
                !this.collisions.right &&
                this.collisions.bottom
            ) {
                this.DOM.style.height = '25px';
                this.DOM.style.width = '75px';
                this.DOM.style.borderTopRightRadius = '100%';
                this.DOM.style.borderTopLeftRadius = '100%';
                this.DOM.style.borderBottomRightRadius = '50%';
                this.DOM.style.borderBottomLeftRadius = '50%';
                this.DOM.style.backgroundColor = 'orange';
            } else if (
                !this.collisions.top &&
                !this.collisions.left &&
                this.collisions.right &&
                this.collisions.bottom
            ) {
                this.DOM.style.height = '50px';
                this.DOM.style.width = '50px';
                this.DOM.style.borderTopRightRadius = '50%';
                this.DOM.style.borderTopLeftRadius = '50%';
                this.DOM.style.borderBottomRightRadius = '0%';
                this.DOM.style.borderBottomLeftRadius = '50%';
                this.DOM.style.backgroundColor = 'orange';
            } else if (
                !this.collisions.top &&
                !this.collisions.left &&
                this.collisions.right &&
                !this.collisions.bottom
            ) {
                this.DOM.style.height = '75px';
                this.DOM.style.width = '25px';
                this.DOM.style.borderTopRightRadius = '50%';
                this.DOM.style.borderTopLeftRadius = '100%';
                this.DOM.style.borderBottomRightRadius = '50%';
                this.DOM.style.borderBottomLeftRadius = '100%';
                this.DOM.style.backgroundColor = 'orange';
            }
            else {
                this.DOM.style.backgroundColor = 'red';
                this.DOM.style.height = '50px';
                this.DOM.style.width = '50px';
                this.DOM.style.borderRadius = '50%';
            }
        }
    },
    init() {
    },
    update(delta) {
        this.chaser.update(delta);
        this.draw();
    },
    draw() {
        this.chaser.draw();
    },
}
function checkForMouseInChaserGame() {
    if (mouse.position.x >= chaserGame.gameContainer.position.left &&
        mouse.position.x <= chaserGame.gameContainer.position.right &&
        mouse.position.y >= chaserGame.gameContainer.position.top &&
        mouse.position.y <= chaserGame.gameContainer.position.bottom) {
        chaserGame.mouseover = true;
        console.log(`MOUSE IN CHASERGAME`);
        requestAnimationFrame(chaserGameMain)

    } else {
        chaserGame.mouseover = false;
        return
    }
}
function chaserGameMain(delta) {
    if (!chaserGame.mouseover) return;
    chaserGame.update(delta);
    requestAnimationFrame(chaserGameMain)
}
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
});
function updateMousePosition(event) {
    mouse.position.x = event.pageX;
    mouse.position.y = event.pageY;
    checkForMouseInCarousel();
    checkForMouseInChaserGame();
}
function init() {
    //DARK MODE ON START <3
    changeTheme();
    //STARTING LAUNCHERS FOR SITE
    collage.init()
}

function main(delta) {
    if (!document.hasFocus()) return
    requestAnimationFrame(main)

}
function runMain() {
    requestAnimationFrame(main)
}
