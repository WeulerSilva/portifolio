document.querySelector('.busca').addEventListener('submit', async (event) => {
    event.preventDefault();

    let input = document.querySelector('#search-input').value;

    if(input !== '') {
        showWarning('Carregando...');

        let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=f5c4114d066f7581255097aa7e7322a7&units=metric&lang=pt_br`;
        let results = await fetch(url);
        let json = await results.json();

        if(json.cod === 200) {
            showInfo({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
        }else if(input === '') {
            showWarning('Digite uma cidade no campo de pesquisa!');
        }else {
            showWarning('Digite novamente!');
            document.querySelector('.info img').setAttribute('src', '');
        }
    }
});

function showInfo(json) {
    showWarning('.');
    document.querySelector('.resultado').classList.replace('none', 'flex');
    document.querySelector('.titulo').innerHTML = `${json.name},${json.country}`;
    document.querySelector('.temp-info').innerHTML = `${json.temp}ºC`;
    document.querySelector('.vento-info').innerHTML = `${json.windSpeed} km/h`;

    document.querySelector('.info img').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
};

function showWarning(msg) {
    document.querySelector('.aviso').innerHTML = msg;
};

/*Depois criar um if e else para mudar o texto que o meu personagem fala
de acordo com o resultado do clima por exemplo:
Nossa em ${nomeDaCidade} esta fazendo ${} graus esta bem quente/frio.

Ou seja ter varios comentarios de acordo com os aplicativos,fazendo isso no proprio
codigo dos apps sem precisar criar outro arquivos js para fazer isso.
*/