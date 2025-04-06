const carouselContainer = document.querySelector('.carousel-container');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');

let index = 0;

prevButton.addEventListener('click', () => {
    if (index > 0) {
        index--;
        updateCarousel();
    }
});

nextButton.addEventListener('click', () => {
    if (index < 4) { // 5 produtos no total (índices 0 a 4)
        index++;
        updateCarousel();
    }
});

function updateCarousel() {
    const width = carouselContainer.children[0].clientWidth;
    carouselContainer.style.transform = `translateX(-${index * width}px)`;
}