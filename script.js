//----SECTION 1----
//CAROUSEL
const carouselImageURLs = ['./assets/carousel/image1.webp', './assets/carousel/image2.jpg', './assets/carousel/image3.webp', './assets/carousel/image4.jpg'];
const carouselContainer = document.getElementById('carouselContainer');
let activeImageIndex = 0;
carouselContainer.style.backgroundImage = `url(${carouselImageURLs[activeImageIndex]})`
carouselContainer.style.backgroundRepeat = `no-repeat`
carouselContainer.style.backgroundSize = 'cover';
carouselContainer.style.backgroundAttachment = 'fixed';
setInterval(carouselImageScroll, 5000)
function carouselImageScroll() {
    if (activeImageIndex < carouselImageURLs.length - 1) {
        activeImageIndex++
        carouselContainer.style.backgroundImage = `url(${carouselImageURLs[activeImageIndex]})`
    } else {
        activeImageIndex = 0;
        carouselContainer.style.backgroundImage = `url(${carouselImageURLs[activeImageIndex]})`

    }

}
let foregroundImage = new Image();
foregroundImage.src = './assets/carousel/mario.webp';
carouselContainer.appendChild(foregroundImage);
foregroundImage.style.position = 'absolute';
foregroundImage.style.bottom = '0';
foregroundImage.style.left = '0';
foregroundImage.style.width = '100%';



//----SECTION 2----
//COLLAGE
const collageImages = ['./assets/collage/image1.webp', './assets/collage/image2.webp', './assets/collage/image3.webp', './assets/collage/image4.webp', './assets/collage/image5.webp', './assets/collage/image6.webp', './assets/collage/image7.webp', './assets/collage/image8.webp']
let collageImageHolders = Array.from(document.querySelectorAll('.image'));
const collageContainer = document.getElementById('collage');
const collageContainerOffsets = collageContainer.getBoundingClientRect();
let imageIsBig = false;
collageImageHolders.forEach(element => {
    const randIndexforCollage = Math.floor(Math.random()*collageImages.length);
    element.style.backgroundImage = `url('${collageImages[randIndexforCollage]}')`;
    element.style.cursor = 'pointer';
    element.style.backgroundRepeat = 'no-repeat';
    element.style.backgroundSize = 'cover';
    element.addEventListener('click',()=>{
        if(!imageIsBig){
        const description = document.createElement('p');
        description.innerText = `description`;
        element.style.textAlign = 'center';
        element.style.position = 'absolute';
        element.style.width = `${collageContainerOffsets.width/2}px`;
        element.style.height = `${collageContainerOffsets.height/2}px`;
        if(element.getBoundingClientRect().right>window.innerWidth){
            element.style.left = `${element.getBoundingClientRect().right/2}px`
        }
        if(element.getBoundingClientRect().bottom>window.innerHeight){
            console.log(window.scrollY)
            element.style.top = `${(window.scrollY)*1.5}px`;
        }
        element.appendChild(description);
        imageIsBig = true;
        // if(element.getBoundingClientRect().right>innerWidth){
        //     element.style.left = '25%';
        // }
    }else{
        element.style.position = '';
        element.style.width = '';
        element.style.height = '';
        element.innerHTML = '';

        imageIsBig = false;
    }
    })
});

//-----SECTION 5-----
//RANDOM LETTERS
Array.from(document.querySelectorAll(".letter")).forEach(el => {
    el.innerText = randomLetter();
});

function randomLetter() {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"
    return alphabet[Math.floor(Math.random() * alphabet.length)]
}


//DARK-MODE
const btnMode = document.getElementById('modeSwitch');
btnMode.addEventListener('click', () => {
    if (document.body.classList.contains('lightMode')) {
        document.body.classList.remove('lightMode');
        document.body.classList.add('darkMode')
    } else {
        document.body.classList.remove('darkMode');
        document.body.classList.add('lightMode')
    }
})




//SOLUTION 1;
// const carouselImageURLs = ['./assets/carousel/image1.webp','./assets/carousel/image2.jpg','./assets/carousel/image3.webp','./assets/carousel/image4.jpg'];
// const carouselContainer = document.getElementById('carouselContainer');
// let activeImageIndex = 0;
// let foregroundImage = new Image();
// foregroundImage.src = './assets/carousel/mario.webp';
// carouselContainer.appendChild(foregroundImage);
// foregroundImage.style.position = 'absolute';
// foregroundImage.style.bottom = '0';
// foregroundImage.style.left = '0';
// foregroundImage.style.width = '100%';

// let activeImage = new Image();
// activeImage.src = './assets/carousel/image1.webp';
// activeImage.style.backgroundRepeat = 'no-repeat';
// activeImage.style.backgroundSize = 'cover';
// activeImage.style.width = '100%';
// carouselContainer.appendChild(activeImage);

// setInterval(carouselImageScroll,1000)

// function carouselImageScroll(){
//     if(activeImageIndex<carouselImageURLs.length-1){
//         activeImageIndex++;
//         activeImage.src = carouselImageURLs[activeImageIndex];
//     }else{
//         activeImageIndex = 0;
//         activeImage.src = carouselImageURLs[activeImageIndex];
//     }
// }