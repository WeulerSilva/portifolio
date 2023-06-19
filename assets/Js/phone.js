const hours = document.querySelector('.hours');
const menu = document.querySelector('.menu');
const firstScreen = document.querySelector('.first-screen');
const secondScreen = document.querySelector('.second-screen');
const homi = document.querySelector('.homi-img');
const back = document.querySelector('.back-img');
const weather = document.querySelector('.weather');
const bottons = document.querySelector('.bottons');
const camera = document.querySelector('.camera');
const career = document.querySelector('.career');
const github = document.querySelector('.github');
const linkedin = document.querySelector('.linkedin');
const calculator = document.querySelector('.calculator');
let currentBack = 0;

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

function buttonBack () {
    if(currentBack <= 0) {
        firstScreen.classList.replace('none', 'flex');
        secondScreen.classList.replace('flex', 'none');
        bottons.classList.replace('flex', 'none');
    }
}


function backMenu (item) {
    back.addEventListener('click', () => {
        secondScreen.classList.replace('none', 'flex');
        item.classList.replace('flex', 'none');
        buttonBack();
    })
}

function backHomi (item) {
    homi.addEventListener('click', () => {
        firstScreen.classList.replace('none', 'flex');
        secondScreen.classList.replace('flex', 'none');
        item.classList.replace('flex', 'none');
    })

}

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
})

//app de clima
document.querySelector('.i-weather').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    weather.classList.replace('none', 'flex');
    backMenu(weather);
    backHomi(weather);
    currentBack ++;
    buttonBack();
})

//app de camera
document.querySelector('.i-camera').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    camera.classList.replace('none', 'flex');
    weather.classList.replace('flex', 'none');
    backMenu(camera);
    backHomi(camera);
    currentBack++;
})

document.querySelector('.camera-front').addEventListener('click',() => {
    camera.classList.add('camera-img');
})

//app de carreira
document.querySelector('.i-carrer').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    career.classList.replace('none', 'flex');
    backMenu(career);
    backHomi(career);
    currentBack++;
});

//app github
document.querySelector('.i-github').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    github.classList.replace('none', 'flex');
    backMenu(github);
    backHomi(github);
    currentBack++;
})

//app lindekin
document.querySelector('.i-linkedin').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    linkedin.classList.replace('none', 'flex');
    backMenu(linkedin);
    backHomi(linkedin);
    currentBack++;
})

//app calculator
document.querySelector('.i-calculator').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    calculator.classList.replace('none', 'flex');
    backMenu(calculator);
    backHomi(calculator);
    currentBack++;
})

