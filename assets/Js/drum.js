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
                playSound(event.code.toLowerCase())
                ride.classList.add('ride-animation')
                removeClass(ride,'ride-animation')
                break;
            case 'KeyE':
                playSound(event.code.toLowerCase())
                crashThree.classList.add('crash-animation')
                removeClass(crashThree,'crash-animation')
                break;
            case 'KeyW':
                playSound(event.code.toLowerCase())
                crashTwo.classList.add('crash-animation')
                removeClass(crashTwo,'crash-animation')
                break;
            case 'KeyQ':
                playSound(event.code.toLowerCase())
                crash.classList.add('crash-animation')
                removeClass(crash,'crash-animation')
                break;
            case 'KeyA':
                playSound(event.code.toLowerCase())
                hiHat.classList.add('hi-hat-animation')
                removeClass(hiHat,'hi-hat-animation')
                break;
            case 'KeyS': 
                playSound(event.code.toLowerCase())
                tom.classList.add('tom-1-animation')
                removeClass(tom,'tom-1-animation')
                break;
            case 'KeyD': 
                playSound(event.code.toLowerCase())
                tomTwo.classList.add('tom-2-animation')
                removeClass(tomTwo,'tom-2-animation')
                break;
            case 'KeyX':
                playSound(event.code.toLowerCase())
                floor.classList.add('floor-animation')
                removeClass(floor,'floor-animation')
                break;
            case 'Space':
                playSound(event.code.toLowerCase())
                pedal.classList.add('pedal-animation')
                removeClass(pedal,'pedal-animation')
                break;
            case 'KeyZ':
                playSound(event.code.toLowerCase())
                break;
            };
        

});

async function playSound(sound) {
    try {
      const audioPath = `assets/Media/sound/${sound}.wav`;
      const response = await fetch(audioPath);
      if (response.ok) {
        const audioBuffer = await response.arrayBuffer();
        const audioContext = new AudioContext();
        const audioBufferSource = audioContext.createBufferSource();
        const decodedAudioData = await audioContext.decodeAudioData(audioBuffer);
        audioBufferSource.buffer = decodedAudioData;
        audioBufferSource.connect(audioContext.destination);
        audioBufferSource.start();
      } else {
        console.error('Failed to load audio file:', audioPath);
      }
    } catch (error) {
      console.error('Error loading audio file:', error);
    }


    switch(sound) {
        case 'Keyc':
            ride.classList.add('ride-animation')
            removeClass(ride,'ride-animation')
            break;
        case 'Keye':
            crashThree.classList.add('crash-animation')
            removeClass(crashThree,'crash-animation')
            break;
        case 'Keyw':
            crashTwo.classList.add('crash-animation')
            removeClass(crashTwo,'crash-animation')
            break;
        case 'Keyq':
            crash.classList.add('crash-animation')
            removeClass(crash,'crash-animation')
            break;
        case 'Keya':
            hiHat.classList.add('hi-hat-animation')
            removeClass(hiHat,'hi-hat-animation')
            break;
        case 'Keys': 
        tom.classList.add('tom-1-animation')
        removeClass(tom,'tom-1-animation')
        break;
        case 'Keyd': 
            tomTwo.classList.add('tom-2-animation')
            removeClass(tomTwo,'tom-2-animation')
            break;
        case 'Keyx':
            floor.classList.add('floor-animation')
            removeClass(floor,'floor-animation')
            break;
        case 'space':
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