const objectWebOne = {
    metallica : {
        h1: 'Metallica',
        p: 'Site feito para fãs descobrirem e saberem curiosidades sobre a banda e seus membros.',
        photo: '../Media/phone/cachorro.gif'},
    aleatorio: {
        h1: 'site ale',
        p: 'esse site foi feito aleatoriamente e blablabla',
        photo: '../Media/phone/cachorro.gif'
    },
    aleatorio2: {
        h1: 'Bem aleatorio',
        p: 'esse site e mais aleatorio ainda pq eu sei fazer nada blablabla'
    }
}

const interBody = document.querySelector('.inter-body');


const creatElem = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function getObjectH(h1) {
    return objectWeb+h1
}

function creatSite (p,photo) {

    const interSite = creatElem('div','inter-body-site');
    const interContent = creatElem('div', 'inter-body-content');
    const interPhoto = creatElem('div', 'inter-body-photo');

    const hOne = document.createElement('h1');
    hOne.innerHTML = objectWebOne.metallica.h1;
    const pEl = document.createElement('p');
    pEl.innerHTML = p;
    interPhoto.style.backgroundImage = 'url(../Media/phone/cachorro.gif)';

    interContent.appendChild(hOne);
    interContent.appendChild(pEl);

    interSite.appendChild(interContent);
    interContent.appendChild(interPhoto);

    interBody.appendChild(interSite);
}

creatSite(objectWebOne.metallica.p,'cachorro.gif')