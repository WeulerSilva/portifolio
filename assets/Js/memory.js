const grid = document.querySelector('.memory-grid');

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

const checkCards = () => {
    const firstColor = firstCard.getAttribute('data-color');
    const secondColor = secondCard.getAttribute('data-color');

    if(firstColor === secondColor) {

        firstCard = '';
        secondCard = '';
    }else {
        setTimeout(() => {
            firstCard.classList.remove('reveal-card');
            secondCard.classList.remove('reveal-card');

            firstCard = '';
            secondCard = '';
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
    const card = creatElement('div', 'memory-card');
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