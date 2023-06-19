const screen = document.querySelector('.calculator input');

function insert (num) {
    document.querySelector('.calculator input').style.textAlign = 'left';
    screen.value = screen.value + num;
}

function clean () {
    screen.value = '';
}

function erase () {
    const screenValue = document.querySelector('.calculator input').value;
    screen.value = screenValue.substring(0, screenValue.length -1);
}

function calcular () {
    const resultado = document.querySelector('.calculator input').value;
    if(resultado) {
        document.querySelector('.calculator input').style.textAlign = 'right';
        let resu = eval(resultado);
        screen.value = resu
    }
}