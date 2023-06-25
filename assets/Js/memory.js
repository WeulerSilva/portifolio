const grid = document.querySelector('.memory-grid');
const memoryLife = document.querySelector('.memory p');
const memoryText = document.querySelector('.memory h1');
const memoryWin = document.querySelector('.memory-win');
const memoryLose = document.querySelector('.memory-lose');



const colors = [
    'blue',
    'black',
    'white',
    'pink',
    'yellow',
    'green',
    'orange',
    'purple',
    'brown',
    'violet',
]

const creatElement = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

let firstCard = '';
let secondCard = '';
let currentLife = 25;
let currentWin = 0;
let currentLose = 0;

function resetGame () {
    const classCard = document.querySelectorAll('.memory-grid .memory-card');
        classCard.forEach((item)=>{
            item.remove();
        });
    loadGame();
    memoryLife.innerHTML = 'Vidas: 25';
    currentLife = '';
    currentLife = 25;
};

function youWin () {
    currentWin++;
    memoryWin.innerHTML = '';
    memoryWin.innerHTML = `V: ${currentWin}`;
    memoryText.innerHTML = '';
    memoryText.innerHTML = 'Você Ganhou!';
    setTimeout(()=>{
        memoryText.innerHTML = '';
        memoryText.innerHTML = 'Jogo da Memória';
    },5000);
};

function youLose () {
    currentLose++;
    memoryLose.innerHTML = '';
    memoryLose.innerHTML = `D: ${currentLose}`;
    memoryText.innerHTML = '';
    memoryText.innerHTML = 'Você Perdeu!';
    setTimeout(()=>{
        memoryText.innerHTML = '';
        memoryText.innerHTML = 'Jogo da Memória';
    },5000);
}

document.querySelector('.memory-restart').addEventListener('click', () => {
    console.log('oi');
    const classCard = document.querySelectorAll('.memory-grid .memory-card');
        classCard.forEach((item)=>{
            item.remove();
        });
        loadGame();
        memoryLife.innerHTML = 'Vidas: 25';
        currentLife = '';
        currentLife = 25;
});

const checkEndGame = () => {
    const disableCards = document.querySelectorAll('.disable-card');

    if(disableCards.length === 20) {
        youWin();
    }
}

function checkLife() {
    if(currentLife === 0) {
        memoryLife.innerHTML = 'Vidas: 0';
        resetGame();
        youLose();
    }else {
        memoryLife.innerHTML = '';
        memoryLife.innerHTML = `Vidas: ${currentLife}`;
    }
}

function checkCards () {
    const firstColor = firstCard.getAttribute('data-color');
    const secondColor = secondCard.getAttribute('data-color');

    if(firstColor === secondColor) {
        firstCard.firstChild.classList.add('disable-card');
        secondCard.firstChild.classList.add('disable-card');

        firstCard = '';
        secondCard = '';
        checkLife();
        checkEndGame();
    }else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
            checkLife();
            currentLife--;
        }, 500);
    }
}

const revealCard = ({target}) => {
    if(target.parentNode.className.includes('reveal-card')) {
        return;
    }

    if(firstCard === '') {
        target.parentNode.classList.add('reveal-card');
        firstCard = target.parentNode; 
    }else if(secondCard === '') {
        target.parentNode.classList.add('reveal-card');
        secondCard = target.parentNode; 
    }

    checkCards();
}

const creatCard = (color) => {
    const card = creatElement('div', 'memory-card oi');
    const front = creatElement('div', 'card front');
    const back = creatElement('div', 'card cback');

    front.style.backgroundColor = `${color}`;

    card.appendChild(front);
    card.appendChild(back);

    card.addEventListener('click', revealCard);
    card.setAttribute('data-color', color)

    return card;
}

const loadGame = () => {
    const duplicateColor = [...colors, ...colors];
    const shufferArray = duplicateColor.sort(() => Math.random() - 0.5);

    shufferArray.forEach((color) => {
        const card = creatCard(color);
        grid.appendChild(card);
    })
}

loadGame()