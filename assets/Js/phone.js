const app = document.querySelectorAll('.app');
const hours = document.querySelector('.hours');
const menu = document.querySelector('.menu');
const phone = document.querySelector('.phone');
const firstScreen = document.querySelector('.first-screen');
const secondScreen = document.querySelector('.second-screen');
const square = document.querySelector('.square');
const squareApp = document.querySelector('.square-app');
const homi = document.querySelector('.homi-img');
const back = document.querySelector('.back-img');
const weather = document.querySelector('.weather');
const bottons = document.querySelector('.bottons');
const camera = document.querySelector('.camera');
const about = document.querySelector('.about');
const aboutP = document.querySelector('.about p');
const aboutH = document.querySelector('.about h1');
const aboutN = document.querySelector('.about-name');
const github = document.querySelector('.github');
const linkedin = document.querySelector('.linkedin');
const calculator = document.querySelector('.calculator');
const memory = document.querySelector('.memory');
const internet = document.querySelector('.internet');
const quiz = document.querySelector('.quiz');
const contact = document.querySelector('.contact');
const config = document.querySelector('.config');
const iWeather = document.querySelector('.i-weather');
const calendar = document.querySelector('.calendar');
const dialogue = document.querySelector('.dialogue');
const secondDesk = document.querySelector('.second-desk');
const drums = document.querySelector('.drums');
let languageEng = localStorage.getItem('languageEng') === 'true';
let loadedScriptQuiz = false;
let loadedScriptInternet = false;
let loadedScriptMemory = false;
let loadedScriptWeather = false;
let loadedScriptCalc = false;
let loadedScriptContact = false;
let loadedScriptCalendar = false;
let loadedScriptConfig = false;
let currentBack = 0;
let currentAbout = 0;
let currentWeb;


//funções responsaveis pela hora

function updateClock() {
  let now = new Date()
  let hour = now.getHours()
  let minute = now.getMinutes()

  hours.innerHTML = `${fixZero(hour)}:${fixZero(minute)}`;

};

function fixZero(time) {
  if (time < 10) {
    return '0' + time
  } else {
    return time
  }
};

updateClock();

setInterval(updateClock, 60000);

//Functions

function windowHour() {
  let now = new Date()
  let hour = now.getHours();

  if(hour >= 18 || hour < 5) {
    document.querySelector('.desk-window').classList.add('desk-moon');
  }else if(hour >= 5 && hour <= 7) {
    document.querySelector('.desk-window').classList.add('desk-sunup');
  }else if(hour > 7 && hour <= 10) {
    document.querySelector('.desk-window').classList.add('desk-sunmid');
  }else if(hour > 10 && hour <= 14) {
    document.querySelector('.desk-window').classList.add('desk-sunafter');
  }else if(hour > 14 && hour < 18) {
    document.querySelector('.desk-window').classList.add('desk-sundown');
}}

windowHour()

function buttonBack() {
  if (currentBack <= 0) {
    firstScreen.classList.replace('none', 'flex');
    secondScreen.classList.replace('flex', 'none');
    bottons.classList.replace('flex', 'none');
  }
};


function backMenu(item) {
  back.addEventListener('click', () => {
    secondScreen.classList.replace('none', 'flex');
    item.classList.replace('flex', 'none');
    buttonBack();
  })
};

function backHomi(item) {
  homi.addEventListener('click', () => {
    firstScreen.classList.replace('none', 'flex');
    secondScreen.classList.replace('flex', 'none');
    item.classList.replace('flex', 'none');
  })
};

function loadApp(variable, codigo) {
  if (!variable) {
    const script = document.createElement('script');
    script.src = `assets/Js/${codigo}.js`;
    document.body.appendChild(script);
    variable = true;
  };
  return variable
}


//usar o makeSpan para quando for alterar o idioma dinamicamente não ter que alterar de um em um!
function makeSpan(cla, te, styLeft) {
  let sp = document.createElement('span');
  sp.innerHTML = te;
  sp.style.left = styLeft

  document.querySelector(cla).appendChild(sp);

  return
};

function appLanguage() {
  if (languageEng) {
    makeSpan('.i-weather', 'Weather', '0px');
    makeSpan('.i-carrer', 'Bio', '15px');
    makeSpan('.i-github', 'GitHub', '0px');
    makeSpan('.i-linkedin', 'LinkeDin', '-5px');
    makeSpan('.i-memory', 'Memory', '-3px');
    makeSpan('.i-quiz', 'Quiz', '10px');
    makeSpan('.i-contact', 'Contact', '-5px');
    makeSpan('.i-calendar', 'Calendar', '-5px');
    makeSpan('.i-config', 'Config.', '5px');
    makeSpan('.i-internet', 'internet', '0px');
    makeSpan('.i-calculator', 'Calculator', '-4px');
    makeSpan('.i-camera', 'Camera', '0px');
    document.querySelector('.back-img').title = 'Back';
    document.querySelector('.homi-img').title = 'home';
  } else {
    makeSpan('.i-weather', 'Clima', '5px');
    makeSpan('.i-carrer', 'Bio', '15px');
    makeSpan('.i-github', 'GitHub', '0px');
    makeSpan('.i-linkedin', 'LinkeDin', '-5px');
    makeSpan('.i-memory', 'Memoria', '-5px');
    makeSpan('.i-quiz', 'Quiz', '10px');
    makeSpan('.i-contact', 'Contatos', '-5px');
    makeSpan('.i-calendar', 'Calendario', '-10px');
    makeSpan('.i-config', 'Config.', '5px');
    makeSpan('.i-internet', 'internet', '0px');
    makeSpan('.i-calculator', 'Calcular', '0px');
    makeSpan('.i-camera', 'Camera', '0px');
  }
}

appLanguage();


//botão ir para o menu
menu.addEventListener('click', () => {
  firstScreen.classList.replace('flex', 'none');
  secondScreen.classList.replace('none', 'flex');
  bottons.classList.replace('none', 'flex');

  if(languageEng) {
    changeText(objAppEng,'menu');
  }else {
    changeText(objApp,'menu');
  }
  currentBack++;
  buttonBack();
});

//botão voltar para o homi
homi.addEventListener('click', () => {
  secondScreen.classList.replace('flex', 'none');
  firstScreen.classList.replace('none', 'flex');
  bottons.classList.replace('flex', 'none');
  camera.classList.remove('camera-img');

  if(dialogue.classList.contains('flex')) {
    dialogue.classList.replace('flex','none');
  }

  currentBack = 0;
  buttonBack();
});

//botão de volta
back.addEventListener('click', () => {
  secondScreen.classList.replace('none', 'flex');
  camera.classList.remove('camera-img');

  if(dialogue.classList.contains('flex')) {
    dialogue.classList.replace('flex','none');
  }

  currentBack--;
  buttonBack();
});

//app de clima
document.querySelector('.i-weather').addEventListener('click', () => {
  secondScreen.classList.replace('flex', 'none');
  weather.classList.replace('none', 'flex');
  loadedScriptWeather = loadApp(loadedScriptWeather, 'weather');

  //appName('oi', 'ola');

  backMenu(weather);
  backHomi(weather);
  currentBack++;
  buttonBack();
  
});

//app de camera
document.querySelector('.i-camera').addEventListener('click', () => {
  secondScreen.classList.replace('flex', 'none');
  camera.classList.replace('none', 'flex');
  weather.classList.replace('flex', 'none');

  if (languageEng) {
    document.querySelector('.ca-front-ball').title = 'Frontal camera';
    changeText(objAppEng,'camera');
  } else {
    changeText(objApp,'camera');
    document.querySelector('.ca-front-ball').title = 'Camera frontal';
  }

  backMenu(camera);
  backHomi(camera);
  currentBack++;
});

let currentCamera = 0;

document.querySelector('.camera-front').addEventListener('click', () => {
  camera.classList.add('camera-img');
  if (languageEng && currentCamera === 0) {
    currentCamera++;
    changeText(objAppEng,'cameraFront');
  } else if(languageEng === false && currentCamera === 0){
    currentCamera++;
    changeText(objApp,'cameraFront');
  }
});

//app de sobre min
document.querySelector('.i-carrer').addEventListener('click', () => {
  secondScreen.classList.replace('flex', 'none');
  about.classList.replace('none', 'flex');
  botaoEng();
  backMenu(about);
  backHomi(about);
  currentBack++;
});

function botaoEng() {
  if(languageEng) {
    document.querySelector('.about h6').innerHTML = 'About me';
    changeText(objAppEng, 'bio');
  }else {
    changeText(objApp, 'bio');
  }


  if (currentAbout == 0) {
    aboutH.innerHTML = '';
    document.querySelector('.about h5').innerHTML = '';
    document.querySelector('.about h5').innerHTML = 'Weuler Silva';
    aboutP.innerHTML = '';

    if(languageEng) {
      aboutH.innerHTML = 'Hi, I am ';
      aboutP.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, deleniti recusandae vitae commodi dolore quos reprehenderit blanditiis consectetur saepe fugiat, et, distinctio laudantium doloribus molestiae ad maxime eaque perferendis accusantium.';
    }else {
      aboutH.innerHTML = 'Olá, Eu sou ';
      aboutP.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, deleniti recusandae vitae commodi dolore quos reprehenderit blanditiis consectetur saepe fugiat, et, distinctio laudantium doloribus molestiae ad maxime eaque perferendis accusantium.';
    }
    
  } else if (currentAbout == 1) {
    aboutH.innerHTML = '';
    document.querySelector('.about h5').innerHTML = '';
    aboutP.innerHTML = '';

    if(languageEng) {
      aboutH.innerHTML = 'I have to';
      document.querySelector('.about h5').innerHTML = 'Study';
      aboutP.innerHTML = 'Preencher depois com varias palavras sem sentido para mudar,apenas para preencher o campo de arquivos etc.para depois mudar plavras que antes estaram aqui nesse campo.';
    }else {
      aboutH.innerHTML = 'Tenho que';
      document.querySelector('.about h5').innerHTML = 'Estudar';
      aboutP.innerHTML = 'Preencher depois com varias palavras sem sentido para mudar,apenas para preencher o campo de arquivos etc.para depois mudar plavras que antes estaram aqui nesse campo.';
    }
    
  } else if (currentAbout == 2) {
    aboutH.innerHTML = '';
    document.querySelector('.about h5').innerHTML = '';
    aboutP.innerHTML = '';

    if(languageEng) {
      aboutH.innerHTML = 'I don´t know';
      document.querySelector('.about h5').innerHTML = 'i have to try';
      aboutP.innerHTML = 'Preencher depois com varias palavras sem sentido para mudar,apenas para preencher o campo de arquivos etc.para depois mudar plavras que antes estaram aqui nesse campo.';
    }else {
      aboutH.innerHTML = 'Mudei que';
      document.querySelector('.about h5').innerHTML = 'Praticar';
      aboutP.innerHTML = 'Preencher depois com varias palavras sem sentido para mudar,apenas para preencher o campo de arquivos etc.para depois mudar plavras que antes estaram aqui nesse campo.';
    }
    
  } else if (currentAbout == 3) {
    currentAbout = 0;
    botaoEng();
  } else if (currentAbout <= -1) {
    currentAbout = 2;
    botaoEng();
  }
};

document.querySelector('.about-prev').addEventListener('click', () => {
  currentAbout--;
  botaoEng();
});

document.querySelector('.about-next').addEventListener('click', () => {
  currentAbout++;
  botaoEng();
});

//app github
document.querySelector('.i-github').addEventListener('click', () => {
  secondScreen.classList.replace('flex', 'none');
  github.classList.replace('none', 'flex');

  if (languageEng) {
    document.querySelector('.git-status').innerHTML = 'Inglish text that will be change after i finish my github project or something like that!'
    document.querySelector('.git-perf').innerHTML = 'Profile';
    document.querySelector('.git-rep').innerHTML = 'Repositories';
    changeText(objAppEng,'github');
  }else {
    changeText(objApp,'github');
  }

  backMenu(github);
  backHomi(github);
  currentBack++;
});

//app lindekin
document.querySelector('.i-linkedin').addEventListener('click', () => {
  secondScreen.classList.replace('flex', 'none');
  linkedin.classList.replace('none', 'flex');

  if (languageEng) {
    document.querySelector('.linkedin a').innerHTML = 'Go to My Profile';
    document.querySelector('.linkedin-about h2').innerHTML = 'About';
    document.querySelector('.linkedin-about p').innerHTML = 'Again like github this message text will be change when i finish my website and focus on social media!';
    changeText(objAppEng,'linkedin');
  }else {
    changeText(objApp,'linkedin');
  }

  backMenu(linkedin);
  backHomi(linkedin);
  currentBack++;
});

//app calculator
document.querySelector('.i-calculator').addEventListener('click', () => {
  secondScreen.classList.replace('flex', 'none');
  calculator.classList.replace('none', 'flex');
  loadedScriptCalc = loadApp(loadedScriptCalc, 'calc');
  backMenu(calculator);
  backHomi(calculator);
  currentBack++;
});

//app Memory
document.querySelector('.i-memory').addEventListener('click', () => {
  secondScreen.classList.replace('flex', 'none');
  memory.classList.replace('none', 'flex');
  loadedScriptMemory = loadApp(loadedScriptMemory, 'memory');
  backMenu(memory);
  backHomi(memory);
  currentBack++;
});

//app internet
document.querySelector('.i-internet').addEventListener('click', () => {
  secondScreen.classList.replace('flex', 'none');
  internet.classList.replace('none', 'flex');
  loadedScriptInternet = loadApp(loadedScriptInternet, 'internet');
  backMenu(internet);
  backHomi(internet);
  currentBack++;
});

//app Quiz
document.querySelector('.i-quiz').addEventListener('click', () => {
  secondScreen.classList.replace('flex', 'none');
  quiz.classList.replace('none', 'flex');
  loadedScriptQuiz = loadApp(loadedScriptQuiz, 'quiz');
  backMenu(quiz);
  backHomi(quiz);
  currentBack++;
})

//app contact 
document.querySelector('.i-contact').addEventListener('click', () => {
  secondScreen.classList.replace('flex', 'none');
  contact.classList.replace('none', 'flex');
  loadedScriptContact = loadApp(loadedScriptContact, 'contact');
  backMenu(contact);
  backHomi(contact);
  currentBack++;
})

//app calendar

document.querySelector('.i-calendar').addEventListener('click', () => {
  secondScreen.classList.replace('flex', 'none');
  calendar.classList.replace('none', 'flex');
  loadedScriptCalendar = loadApp(loadedScriptCalendar, 'calendar');
  backMenu(calendar);
  backHomi(calendar);
  currentBack++;
})


//app config
document.querySelector('.i-config').addEventListener('click', () => {
  secondScreen.classList.replace('flex', 'none');
  config.classList.replace('none', 'flex');
  loadedScriptConfig = loadApp(loadedScriptConfig, 'config');
  backMenu(config);
  backHomi(config);
  currentBack++;
})


if(languageEng) {
  document.querySelector('.desk-eng').classList.add('lang');
}else {
  document.querySelector('.desk-br').classList.add('lang');
}


document.querySelector('.desk-eng').addEventListener('click', () => {
  if(languageEng === false) {
  languageEng = true;
  localStorage.setItem('languageEng', languageEng);
  location.reload();
  }
});

document.querySelector('.desk-br').addEventListener('click', () => {
  if(languageEng === true) {
    // Alterna o valor da variável languageEng
  languageEng = false;

  // Armazena o valor atual de languageEng no localStorage
  localStorage.setItem('languageEng', languageEng);

  // Recarrega a página para exibir o conteúdo no novo idioma
  location.reload();
  }

  
})


//play video on pc
  const overlay = document.querySelector('.desk-tv-grey');
  const videoIframe = document.querySelector('.desk-hand iframe');

  overlay.addEventListener('click', function () {
      videoIframe.src = videoIframe.src + '&autoplay=1';
      overlay.style.opacity = '0.8';
      overlay.style.backgroundImage = 'none';
  });

const deskImg = document.querySelector('.desk-img');

//second-desk 
document.querySelector('.sd-drums').addEventListener('click' , () => {
  secondDesk.style.display = 'none';
  drums.style.display = 'flex';
  deskImg.style.position = 'absolute';
  document.querySelector('.drums-back').classList.replace('none', 'flex');
});

document.querySelector('.sd-phone').addEventListener('click' , () => {
  secondDesk.style.display = 'none';
  phone.style.display = 'flex';
  deskImg.style.position = 'absolute';
  document.querySelector('.desk-back').classList.replace('none', 'flex');
  document.querySelector('.desk-eng').style.display = 'none';
  document.querySelector('.desk-br').style.display = 'none';
  document.querySelector('.desk-led').style.display = 'none';
  document.querySelector('.desk-led-t').style.display = 'none';
  //deskImg.style.bottom = '330px';
});

document.querySelector('.desk-back').addEventListener('click', () => {
  phone.style.display = 'none';
  secondDesk.style.display = 'flex';
  document.querySelector('.desk-eng').style.display = 'flex';
  document.querySelector('.desk-br').style.display = 'flex';
});

document.querySelector('.drums-back').addEventListener('click', () => {
  drums.style.display = 'none';
  secondDesk.style.display = 'flex';
  document.querySelector('.desk-eng').style.display = 'flex';
  document.querySelector('.desk-br').style.display = 'flex';
});