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
let currentBack = 0;
let currentAbout = 0;


//funções responsaveis pela hora

function updateClock() {
    let now = new Date()
    let hour = now.getHours()
    let minute = now.getMinutes()
    
    hours.innerHTML = `${fixZero(hour)}:${fixZero(minute)}`;

};

function fixZero(time) {
    if(time < 10) {
        return '0'+time
    }else {
        return time
    }
};

updateClock();

setInterval(updateClock,60000);

//Functions

function botaoEng () {
    
    if(currentAbout == 0) {
        aboutH.innerHTML = '';
        document.querySelector('.about h5').innerHTML = '';
        document.querySelector('.about h5').innerHTML = 'Weuler Silva';
        aboutH.innerHTML = 'Olá, Eu sou ';
        aboutP.innerHTML = '';
        aboutP.innerHTML = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, deleniti recusandae vitae commodi dolore quos reprehenderit blanditiis consectetur saepe fugiat, et, distinctio laudantium doloribus molestiae ad maxime eaque perferendis accusantium.';
    }else if(currentAbout == 1) {
        aboutH.innerHTML = '';
        aboutH.innerHTML = 'Tenho que';
        document.querySelector('.about h5').innerHTML = '';
        document.querySelector('.about h5').innerHTML = 'Estudar';
        aboutP.innerHTML = '';
        aboutP.innerHTML = 'Preencher depois com varias palavras sem sentido para mudar,apenas para preencher o campo de arquivos etc.para depois mudar plavras que antes estaram aqui nesse campo.';
    }else if(currentAbout == 2) {
        aboutH.innerHTML = '';
        aboutH.innerHTML = 'Mudei que';
        document.querySelector('.about h5').innerHTML = '';
        document.querySelector('.about h5').innerHTML = 'Praticar';
        aboutP.innerHTML = '';
        aboutP.innerHTML = 'Preencher depois com varias palavras sem sentido para mudar,apenas para preencher o campo de arquivos etc.para depois mudar plavras que antes estaram aqui nesse campo.';
    }else if(currentAbout == 3) {
        currentAbout = 0;
        botaoEng();
    }else if(currentAbout <= -1) {
        currentAbout = 2;
        botaoEng();
    }
};



function buttonBack () {
    if(currentBack <= 0) {
        firstScreen.classList.replace('none', 'flex');
        secondScreen.classList.replace('flex', 'none');
        bottons.classList.replace('flex', 'none');
    }
};


function backMenu (item) {
    back.addEventListener('click', () => {
        secondScreen.classList.replace('none', 'flex');
        item.classList.replace('flex', 'none');
        buttonBack();
    })
};

function backHomi (item) {
    homi.addEventListener('click', () => {
        firstScreen.classList.replace('none', 'flex');
        secondScreen.classList.replace('flex', 'none');
        item.classList.replace('flex', 'none');
    })
};

//botão ir para o menu
menu.addEventListener('click',() => {
    firstScreen.classList.replace('flex', 'none');
    secondScreen.classList.replace('none', 'flex');
    bottons.classList.replace('none', 'flex');
    currentBack ++;
    buttonBack();
});

//botão voltar para o homi
homi.addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    firstScreen.classList.replace('none', 'flex');
    bottons.classList.replace('flex','none');
    camera.classList.remove('camera-img');
    currentBack = 0;
    buttonBack();
});

//botão de volta
back.addEventListener('click', () => {
    secondScreen.classList.replace('none', 'flex');
    camera.classList.remove('camera-img');
    currentBack --;
    buttonBack();
});

//app de clima
document.querySelector('.i-weather').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    weather.classList.replace('none', 'flex');
    backMenu(weather);
    backHomi(weather);
    currentBack ++;
    buttonBack();
});

//app de camera
document.querySelector('.i-camera').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    camera.classList.replace('none', 'flex');
    weather.classList.replace('flex', 'none');
    backMenu(camera);
    backHomi(camera);
    currentBack++;
});

document.querySelector('.camera-front').addEventListener('click',() => {
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

document.querySelector('.about-prev').addEventListener('click', () => {
    botaoEng();
    currentAbout--;
});

document.querySelector('.about-next').addEventListener('click', () => {
    botaoEng();
    currentAbout++;
});

//app github
document.querySelector('.i-github').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    github.classList.replace('none', 'flex');
    backMenu(github);
    backHomi(github);
    currentBack++;
});

//app lindekin
document.querySelector('.i-linkedin').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    linkedin.classList.replace('none', 'flex');
    backMenu(linkedin);
    backHomi(linkedin);
    currentBack++;
});

//app calculator
document.querySelector('.i-calculator').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    calculator.classList.replace('none', 'flex');
    backMenu(calculator);
    backHomi(calculator);
    currentBack++;
});

//app Memory
document.querySelector('.i-memory').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    memory.classList.replace('none', 'flex');
    backMenu(memory);
    backHomi(memory);
    currentBack++;
});

//app internet
document.querySelector('.i-internet').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    internet.classList.replace('none', 'flex');
    backMenu(internet);
    backHomi(internet);
    currentBack++;
})