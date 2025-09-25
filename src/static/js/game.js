// Obtiene el parámetro de la URL
const params = new URLSearchParams(window.location.search);
const numCards = parseInt(params.get('cards')) || 8;
const board = document.getElementById('game-board');

// Lista de imágenes para ilustrar las cartas (puedes cambiar el orden o elegir otras)
const images = [
    'car.png',
    'paw-print.png',
    'hourglass.png',
    'dollar-coin.png',
    'golden-rule.png',
    'home.png'
];

// Selecciona solo las necesarias según la cantidad de cartas
const selectedImages = images.slice(0, numCards / 2);

// Duplica y mezcla las imágenes
const cardImages = [...selectedImages, ...selectedImages].sort(() => Math.random() - 0.5);

// Crea el grid
board.innerHTML = '';

let columns, rows;
if (numCards === 8) {
    columns = 4; rows = 2;
} else if (numCards === 10) {
    columns = 5; rows = 2;
} else if (numCards === 12) {
    columns = 4; rows = 3;
} else {
    columns = Math.ceil(Math.sqrt(numCards));
    rows = Math.ceil(numCards / columns);
}

board.style.display = 'grid';
board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
board.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
board.style.gap = '16px';

// Lógica de juego
let firstCard = null;
let secondCard = null;
let lockBoard = false;

cardImages.forEach((imgName, idx) => {
    const card = document.createElement('div');
    card.className = 'memory-card';
    card.dataset.img = imgName;

    // Imagen dorso
    const backImg = document.createElement('img');
    backImg.src = '/src/static/img/card.png';
    backImg.alt = 'Dorso';
    backImg.className = 'card-back';
    backImg.style.width = '100%';
    backImg.style.height = '100%';
    backImg.style.objectFit = 'contain';

    // Imagen ilustrativa (frente)
    const frontImg = document.createElement('img');
    frontImg.src = `/src/static/img/${imgName}`;
    frontImg.alt = imgName;
    frontImg.className = 'card-front';
    frontImg.style.width = '100%';
    frontImg.style.height = '100%';
    frontImg.style.objectFit = 'contain';
    frontImg.style.display = 'none';

    card.appendChild(backImg);
    card.appendChild(frontImg);

    card.style.height = '180px';
    card.style.background = '#2d1a1aff';
    card.style.display = 'flex';
    card.style.alignItems = 'center';
    card.style.justifyContent = 'center';
    card.style.cursor = 'pointer';
    card.style.position = 'relative';

    // Evento de click para voltear
    card.addEventListener('click', () => {
        if (lockBoard || card.classList.contains('flipped')) return;

        card.classList.add('flipped');
        backImg.style.display = 'none';
        frontImg.style.display = 'block';

        if (!firstCard) {
            firstCard = card;
        } else {
            secondCard = card;
            lockBoard = true;

            // Comparar
            if (firstCard.dataset.img === secondCard.dataset.img) {
                // Par encontrado
                firstCard = null;
                secondCard = null;
                lockBoard = false;
            } else {
                // No es par, volver a tapar
                setTimeout(() => {
                    firstCard.classList.remove('flipped');
                    secondCard.classList.remove('flipped');
                    firstCard.querySelector('.card-back').style.display = 'block';
                    firstCard.querySelector('.card-front').style.display = 'none';
                    secondCard.querySelector('.card-back').style.display = 'block';
                    secondCard.querySelector('.card-front').style.display = 'none';
                    firstCard = null;
                    secondCard = null;
                    lockBoard = false;
                }, 1000);
            }
        }
    });

    board.appendChild(card);
});