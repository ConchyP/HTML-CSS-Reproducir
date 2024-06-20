
function cycleImages() {
    const images = document.querySelectorAll('main img');
    let currentIndex = 0;

    setInterval(() => {
        images.forEach((img, index) => {
            img.style.display = index === currentIndex ? 'block' : 'none';
        });

        currentIndex = (currentIndex + 1) % images.length;
    }, 1000);
}

document.addEventListener('DOMContentLoaded', cycleImages);