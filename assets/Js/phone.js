let hours = document.querySelector('.hours');
let menu = document.querySelector('.menu');
let firstScreen = document.querySelector('.first-screen');
let secondScreen = document.querySelector('.second-screen');
let homi = document.querySelector('.homi-img');
let back = document.querySelector('.back-img');
let weather = document.querySelector('.weather');
let bottons = document.querySelector('.bottons');
let camera = document.querySelector('.camera');
let career = document.querySelector('.career');
let github = document.querySelector('.github');
let linkedin = document.querySelector('.linkedin');

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


function backMenu (item) {
    back.addEventListener('click', () => {
        secondScreen.classList.replace('none', 'flex');
        item.classList.replace('flex', 'none');
    })
}

function backHomi (item) {
    homi.addEventListener('click', () => {
        firstScreen.classList.replace('none', 'flex');
        secondScreen.classList.replace('flex', 'none')
        item.classList.replace('flex', 'none');
    })
}

//botão ir para o menu
menu.addEventListener('click',() => {
    firstScreen.classList.replace('flex', 'none');
    secondScreen.classList.replace('none', 'flex');
    bottons.classList.replace('none', 'flex');
});

//botão voltar para o homi
homi.addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    firstScreen.classList.replace('none', 'flex');
    bottons.classList.replace('flex','none');
    camera.classList.remove('camera-img');
});

//botão de volta
back.addEventListener('click', () => {
    secondScreen.classList.replace('none', 'flex');
    camera.classList.remove('camera-img');
})

//app de clima
document.querySelector('.i-weather').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    weather.classList.replace('none', 'flex');
    backMenu(weather);
    backHomi(weather);
})

//app de camera
document.querySelector('.i-camera').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    camera.classList.replace('none', 'flex');
    weather.classList.replace('flex', 'none');
    backMenu(camera);
    backHomi(camera);
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
});

//app github
document.querySelector('.i-github').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    github.classList.replace('none', 'flex');
    backMenu(github);
    backHomi(github);
})

//app lindekin
document.querySelector('.i-linkedin').addEventListener('click', () => {
    secondScreen.classList.replace('flex', 'none');
    linkedin.classList.replace('none', 'flex');
    backMenu(linkedin);
    backHomi(linkedin);
})