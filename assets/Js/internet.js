currentWeb = 1;

if(languageEng) {
  changeText(objAppEng,'internet');
}else {
  changeText(objApp,'internet');
}

const objectWebOne = {
  metallica: {
    a: 'METALLICA: Um site feito de fã para fã!',
    p: 'Site feito para fãs descobrirem e saberem curiosidades sobre a banda e seus membros.',
    photo: 'cachorro.gif',
    link: 'https://weulersilva.github.io/metalica-fanpage/'
  },
  xbox: {
    a: 'XBOX: jogo Hogwarts Legacy!',
    p: 'Landing page com replica exata do site do XBOX',
    photo: 'cachorro.gif',
    link: 'https://weulersilva.github.io/xbox/'
  },
  loopstudios: {
    a: 'LOOPSTUDIOS: Imerção em VR',
    p: 'Nós da LoopStudios vamos oferecer o poder do VR',
    photo: 'cachorro.gif',
    link: 'https://weulersilva.github.io/loopstudios-landing-page/'
  },
};

const objectWebTwo = {
  aleatorio3: {
    a: 'NEWSLETTER',
    p: 'Uma pagina de newsletter que serve para verificar um pequeno formulario.',
    photo: 'cachorro.gif',
    link: 'https://weulersilva.github.io/newsletter-challenger/'
  },
  aleatorio4: {
    a: 'IRON MAIDEN',
    p: 'esse site foi feito aleatoriamente e blablabla',
    photo: 'cachorro.gif',
    link: 'https://github.com/WeulerSilva/portifolio/settings/pages'
  },
  aleatorio5: {
    a: 'SLIPKNOT',
    p: 'esse site e mais aleatorio ainda pq eu sei fazer nada blablabla',
    photo: 'cachorro.gif'
  },
};

const objectWebThree = {
  aleatorio6: {
    a: 'GHOST: Um site feito de fã para fã!',
    p: 'Site feito para fãs descobrirem e saberem curiosidades sobre a banda e seus membros.',
    photo: 'cachorro.gif'
  },
  aleatorio7: {
    a: 'DISTURBED',
    p: 'esse site foi feito aleatoriamente e blablabla',
    photo: 'cachorro.gif',
    link: 'https://github.com/WeulerSilva/portifolio/settings/pages'
  },
  aleatorio8: {
    a: 'GREEN DAY',
    p: 'esse site e mais aleatorio ainda pq eu sei fazer nada blablabla',
    photo: 'cachorro.gif'
  },
}





const objectWebOneEng = {
  metallica: {
    a: 'METALLICA: a web site make for fan to fan!',
    p: 'A website make to fan to fan and blabla.',
    photo: 'cachorro.gif',
    link: 'https://weulersilva.github.io/metalica-fanpage/'
  },
  xbox: {
    a: 'XBOX: Hogwarts Legacy The Game',
    p: 'Landing page with replica exacly of xbox.',
    photo: 'cachorro.gif',
    link: 'https://weulersilva.github.io/xbox/'
  },
  loopstudios: {
    a: 'LOOPSTUDIOS: The imersive experiences in VR',
    p: 'The most imersive in the world of VR',
    photo: 'cachorro.gif',
    link: 'https://weulersilva.github.io/loopstudios-landing-page/'
  },
};

const objectWebTwoEng = {
  newsletter: {
    a: 'NEWSLETTER: The formulary',
    p: 'A simple formulary of a newsletter for training and responsive',
    photo: 'cachorro.gif',
    link: 'https://weulersilva.github.io/newsletter-challenger/'
  },
  aleatorio4: {
    a: 'IRON MAIDEN',
    p: 'esse site foi feito aleatoriamente e blablabla',
    photo: 'cachorro.gif',
    link: 'https://github.com/WeulerSilva/portifolio/settings/pages'
  },
  aleatorio5: {
    a: 'SLIPKNOT',
    p: 'esse site e mais aleatorio ainda pq eu sei fazer nada blablabla',
    photo: 'cachorro.gif'
  },
};

const objectWebThreeEng = {
  aleatorio6: {
    a: 'GHOST: English!',
    p: 'Site feito para fãs descobrirem e saberem curiosidades sobre a banda e seus membros.',
    photo: 'cachorro.gif'
  },
  aleatorio7: {
    a: 'DISTURBED',
    p: 'esse site foi feito aleatoriamente e blablabla',
    photo: 'cachorro.gif',
    link: 'https://github.com/WeulerSilva/portifolio/settings/pages'
  },
  aleatorio8: {
    a: 'GREEN DAY',
    p: 'esse site e mais aleatorio ainda pq eu sei fazer nada blablabla',
    photo: 'cachorro.gif'
  },
}

const interBody = document.querySelector('.inter-body');
const interSite = document.querySelectorAll('.inter-body-site');

const creatElem = (tag, className) => {
  const element = document.createElement(tag);
  element.className = className;
  return element;
}

function creatSite(objName) {

  const interSite = creatElem('div', 'inter-body-site');
  const interContent = creatElem('div', 'inter-body-content');
  const interPhoto = creatElem('div', 'inter-body-photo');

  const a = document.createElement('a');
  a.setAttribute('href', `${objName.link}`);
  a.setAttribute('target','_blank');
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

if (currentWeb === 1) {
  if (languageEng) {
    for (let key in objectWebOneEng) {
      creatSite(objectWebOneEng[key]);
    };
  } else {
    for (let key in objectWebOne) {
      creatSite(objectWebOne[key]);
    };
  }
}


const footNumber = document.querySelectorAll('.inter-footer-number');
footNumber.forEach((event) => {
  event.addEventListener('click', (e) => {
    console.log(e.target.getAttribute('data-web'));
    const barTarget = +e.target.getAttribute('data-web');
    e.target.classList.remove('active');

    if (barTarget === 1) {
      e.target.classList.add('active');
      console.log('e ummmmmm');
      interBody.innerHTML = '';

      if (languageEng) {
        for (let key in objectWebOneEng) {
          creatSite(objectWebOneEng[key]);
        };
      } else {
        for (let key in objectWebOne) {
          creatSite(objectWebOne[key]);
        };
      }

    } else if (barTarget === 2) {
      e.target.classList.add('active');
      console.log('e doiiiiiiss');
      interBody.innerHTML = '';

      if (languageEng) {
        for (let key in objectWebTwoEng) {
          creatSite(objectWebTwoEng[key]);
        };
      } else {
        for (let key in objectWebTwo) {
          creatSite(objectWebTwo[key]);
        };
      }
    } else if (barTarget === 3) {
      e.target.classList.add('active');
      console.log('e treeeeess');
      interBody.innerHTML = '';

      if (languageEng) {
        for (let key in objectWebThreeEng) {
          creatSite(objectWebThreeEng[key]);
        };
      } else {
        for (let key in objectWebThree) {
          creatSite(objectWebThree[key]);
        };
      }
    }
  }
  )
})