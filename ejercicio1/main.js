const clockContainer = document.getElementById('clockContainer');
const dynamicImage = document.getElementById('dynamicImage');
const statusMessage = document.getElementById('statusMessage');


let isPaused = false;
let imageInterval;

function updateClock() {
    const now = new Date();
    clockContainer.textContent = now.toLocaleString('es-ES')
}

function changeImage(){
    dynamicImage.src = `https://picsum.photos/200?random=${Date.now()}`
}

function startInterval() {
    imageInterval = setInterval(changeImage, 4000);
}

setInterval(updateClock, 1000);
updateClock();
startInterval();


dynamicImage.addEventListener('click', () => {
    isPaused = !isPaused;

    if (isPaused) {
        clearInterval(imageInterval);
        dynamicImage.classList.add('pausedImage');
        statusMessage.textContent = 'pausado, haz click para reanudar';
    } else {
        startInterval();
        dynamicImage.classList.remove('pausedImage');
        statusMessage.textContent = 'Haz click sobre la imagen para congelar '
    }
})