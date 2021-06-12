let menuButton = document.getElementById('menuIcon');
let menuSuspenso = document.getElementById('menuSuspenso');

/*Carrossel Sobrancelhas*/
let rightArrowCarouselEyebrows = document.getElementById('rightArrowCarouselEyebrows');
let leftArrowCarouselEyebrows = document.getElementById('leftArrowCarouselEyebrows');

let imagesEyebrows = [
    "./assets/images/servicePictureEyebrows.jpg",
    "./assets/images/servicePictureMouth.jpg",
    "./assets/images/aboutMeNoBG.png"
];

let elementImageEyebrows = document.getElementById('imageEyebrowCarousel');

/*Carrossel Lábios*/
let rightArrowCarouselMouth = document.getElementById('rightArrowCarouselMouth');
let leftArrowCarouselMouth = document.getElementById('leftArrowCarouselMouth');

let imagesMouth = [
    "./assets/images/servicePictureMouth.jpg",
    "./assets/images/imageMicropigmentacaoLabios.jpeg"
];

let elementImageMouth = document.getElementById('imageMouthCarousel');

let startIndex = 0;

menuButton.addEventListener('click', () => {
    if (menuSuspenso.classList.contains('hide')) {
        menuSuspenso.classList.add('show');
        menuSuspenso.classList.remove('hide');
    } else {
        menuSuspenso.classList.add('hide');
        menuSuspenso.classList.remove('show');
    }
})

rightArrowCarouselEyebrows.addEventListener('click', () => {
    if (startIndex < imagesEyebrows.length - 1) {
        startIndex++;
    } else {
        startIndex = 0;
    }
    elementImageEyebrows.src = imagesEyebrows[startIndex];
})

leftArrowCarouselEyebrows.addEventListener('click', () => {
    if (startIndex > 0) {
        startIndex--;
    } else {
        startIndex = 2;
    }
    elementImageEyebrows.src = imagesEyebrows[startIndex];
})

rightArrowCarouselMouth.addEventListener('click', () => {
    if (startIndex < imagesMouth.length - 1) {
        startIndex++;
    } else {
        startIndex = 0;
    }
    elementImageMouth.src = imagesMouth[startIndex];
})

leftArrowCarouselMouth.addEventListener('click', () => {
    if (startIndex > 0) {
        startIndex--;
    } else {
        startIndex = 1;
    }
    elementImageMouth.src = imagesMouth[startIndex];
})