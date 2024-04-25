// Define an array of background images
const image = ['img/bg.jpg', 'img/slider-01-img.jpg', 'img/slider-02-img.jpg', 'img/slider-03-img.jpg'];
let currentIndex = 0;

// Function to change the background image
function changeBackground() {
    document.getElementById('hero').style.backgroundImage = `url('${image[currentIndex]}')`;
    currentIndex = (currentIndex + 1) % image.length;
}

// Change background every 3 seconds
setInterval(changeBackground, 3000);

// Initially set the background image
changeBackground();





let currentImageIndex = 0;
const images = document.querySelectorAll('.grid-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

// Show initial image
showImage(currentImageIndex);

// Previous button click event
prevBtn.addEventListener('click', () => {
    if (currentImageIndex > 0) {
        currentImageIndex--;
        showImage(currentImageIndex);
    }
});

// Next button click event
nextBtn.addEventListener('click', () => {
    if (currentImageIndex < images.length - 1) {
        currentImageIndex++;
        showImage(currentImageIndex);
    }
});

// Function to show image
function showImage(index) {
    images.forEach((img, idx) => {
        if (idx === index) {
            img.classList.add('active');
        } else {
            img.classList.remove('active');
        }
    });
}
