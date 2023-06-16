const click = document.querySelectorAll('.click');
const bateria = document.querySelector('div');
const ride = document.querySelector('.ride');
const crashThree = document.querySelector('.crash-3');
const crashTwo = document.querySelector('.crash-2');
const crash = document.querySelector('.crash');
const hiHat = document.querySelector('.hi-hat');
const tom = document.querySelector('.tom-1');
const tomTwo = document.querySelector('.tom-2');
const floor = document.querySelector('.floor');
const pedal = document.querySelector('.pedal');


//remover class
function removeClass (nome,cl) {
    setTimeout(() => {
        nome.classList.remove(cl)
    }, 500);
}

//adicionando os sons de bateria de acordo com o botão apertado
document.body.addEventListener('keyup', (event) => {  
        
        switch(event.code) {
            case 'KeyC':
                playSound(event.code)
                ride.classList.add('ride-animation')
                removeClass(ride,'ride-animation')
                break;
            case 'KeyE':
                playSound(event.code)
                crashThree.classList.add('crash-animation')
                removeClass(crashThree,'crash-animation')
                break;
            case 'KeyW':
                playSound(event.code)
                crashTwo.classList.add('crash-animation')
                removeClass(crashTwo,'crash-animation')
                break;
            case 'KeyQ':
                playSound(event.code)
                crash.classList.add('crash-animation')
                removeClass(crash,'crash-animation')
                break;
            case 'KeyA':
                playSound(event.code)
                hiHat.classList.add('hi-hat-animation')
                removeClass(hiHat,'hi-hat-animation')
                break;
            case 'KeyS': 
                playSound(event.code)
                tom.classList.add('tom-1-animation')
                removeClass(tom,'tom-1-animation')
                break;
            case 'KeyD': 
                playSound(event.code)
                tomTwo.classList.add('tom-2-animation')
                removeClass(tomTwo,'tom-2-animation')
                break;
            case 'KeyX':
                playSound(event.code)
                floor.classList.add('floor-animation')
                removeClass(floor,'floor-animation')
                break;
            case 'Space':
                playSound(event.code)
                pedal.classList.add('pedal-animation')
                removeClass(pedal,'pedal-animation')
                break;
            case 'KeyZ':
                playSound(event.code)
                break;
            };
        

});

function playSound(sound) {
    let audioElement = new Audio(`assets/Media/sound/${sound}.wav`)

    if(audioElement) {
        audioElement.play() 
    };


    switch(sound) {
        case 'KeyC':
            ride.classList.add('ride-animation')
            removeClass(ride,'ride-animation')
            break;
        case 'KeyE':
            crashThree.classList.add('crash-animation')
            removeClass(crashThree,'crash-animation')
            break;
        case 'KeyW':
            crashTwo.classList.add('crash-animation')
            removeClass(crashTwo,'crash-animation')
            break;
        case 'KeyQ':
            crash.classList.add('crash-animation')
            removeClass(crash,'crash-animation')
            break;
        case 'KeyA':
            hiHat.classList.add('hi-hat-animation')
            removeClass(hiHat,'hi-hat-animation')
            break;
        case 'KeyS': 
        tom.classList.add('tom-1-animation')
        removeClass(tom,'tom-1-animation')
        break;
        case 'KeyD': 
            tomTwo.classList.add('tom-2-animation')
            removeClass(tomTwo,'tom-2-animation')
            break;
        case 'KeyX':
            floor.classList.add('floor-animation')
            removeClass(floor,'floor-animation')
            break;
        case 'Space':
            pedal.classList.add('pedal-animation')
            removeClass(pedal,'pedal-animation')
            break;
        }
};


//criando a mesma coisa so que usando o click ao inves dos botões
const clicou = (key) => {
    playSound(key.getAttribute('data-key'))
};

click.forEach((key) => {
    key.addEventListener('click', () => clicou(key))
});