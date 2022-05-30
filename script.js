//----SECTION 1----
//CAROUSEL
//SOLUTION 2;
const carouselImageURLs = ['./assets/carousel/image1.webp','./assets/carousel/image2.jpg','./assets/carousel/image3.webp','./assets/carousel/image4.jpg'];
const carouselContainer = document.getElementById('carouselContainer');
let activeImageIndex = 0;
carouselContainer.style.backgroundImage = `url(${carouselImageURLs[activeImageIndex]})`
carouselContainer.style.backgroundRepeat = `no-repeat`
carouselContainer.style.backgroundSize = 'cover';
carouselContainer.style.backgroundAttachment = 'fixed';
setInterval(carouselImageScroll,1000)
function carouselImageScroll(){
    if(activeImageIndex<carouselImageURLs.length-1){
        activeImageIndex++
        carouselContainer.style.backgroundImage = `url(${carouselImageURLs[activeImageIndex]})`
    }else{
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