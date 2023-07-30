const app = document.querySelectorAll('.app');
const hours = document.querySelector('.hours');
const menu = document.querySelector('.menu');
const firstScreen = document.querySelector('.first-screen');
const secondScreen = document.querySelector('.second-screen');
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
  currentBack++;
  buttonBack();
});

//botão voltar para o homi
homi.addEventListener('click', () => {
  secondScreen.classList.replace('flex', 'none');
  firstScreen.classList.replace('none', 'flex');
  bottons.classList.replace('flex', 'none');
  camera.classList.remove('camera-img');
  currentBack = 0;
  buttonBack();
});

//botão de volta
back.addEventListener('click', () => {
  secondScreen.classList.replace('none', 'flex');
  camera.classList.remove('camera-img');
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
  } else {
    document.querySelector('.ca-front-ball').title = 'Camera frontal';
  }

  backMenu(camera);
  backHomi(camera);
  currentBack++;
});

document.querySelector('.camera-front').addEventListener('click', () => {
  camera.classList.add('camera-img');
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








document.querySelector('footer button').addEventListener('click', () => {

  // Alterna o valor da variável languageEng
  languageEng = !languageEng;

  // Armazena o valor atual de languageEng no localStorage
  localStorage.setItem('languageEng', languageEng);

  // Recarrega a página para exibir o conteúdo no novo idioma
  location.reload();

  console.log(languageEng)
})