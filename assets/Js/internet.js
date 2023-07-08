const objectWebOne = {
    metallica : {
        a: 'METALLICA: Um site feito de fã para fã!',
        p: 'Site feito para fãs descobrirem e saberem curiosidades sobre a banda e seus membros.',
        photo: 'cachorro.gif'},
    aleatorio: {
        a: 'site ale',
        p: 'esse site foi feito aleatoriamente e blablabla',
        photo: '../Media/phone/cachorro.gif',
        link: 'https://github.com/WeulerSilva/portifolio/settings/pages'
    },
    aleatorio2: {
        a: 'Bem aleatorio',
        p: 'esse site e mais aleatorio ainda pq eu sei fazer nada blablabla'
    }
}

const interBody = document.querySelector('.inter-body');


const creatElem = (tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element;
}

function creatSite (objName) {

    const interSite = creatElem('div','inter-body-site');
    const interContent = creatElem('div', 'inter-body-content');
    const interPhoto = creatElem('div', 'inter-body-photo');

    const a = document.createElement('a');
    a.setAttribute('href', 'https://github.com/WeulerSilva/portifolio/settings/pages')
    a.innerHTML = objName.a;
    const pEl = document.createElement('p');
    pEl.innerHTML = objName.p;
    const img = document.createElement('img');
    img.setAttribute('src', `./assets/Media/phone/${objName.photo}`);
    
    interPhoto.appendChild(img);
    interContent.appendChild(a);
    interContent.appendChild(pEl);

    interSite.appendChild(interContent);
    interSite.appendChild(interPhoto);

    interBody.appendChild(interSite);
}

if(currentWeb === 1) {
    creatSite(objectWebOne.metallica)
}else if(currentWeb === 2) {

}