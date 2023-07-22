let holiDate = document.querySelector('.holidayH');
let holiResult = document.querySelector('.holiday-result');

function updateDate() {
    let now = new Date();
    let day = now.getDate();
    let month = now.getMonth() +1;
    let year = now.getFullYear();
    
    console.log(month,day)
    holiDate.innerHTML = `${day}|${month}|${year}`;

};

updateDate();



document.querySelector('.holiday-search').addEventListener('submit', async (event) => {
    event.preventDefault();

    let input = document.querySelector('#holiday-input').value;

    if(input !== '') {
        showW('Carregando...');

        let url = `https://api.invertexto.com/v1/holidays/2023?token=4153|cD3Z2qqrekVW7MFjSUWwNAlT7ahdG5Ad&state=${input}`;
        let results = await fetch(url);
        let json = await results.json();

        console.log(json)
        if(json.cod === 200) {
            holiResult.innerHTML = json;

            showI({
                name: json.name,
                country: json.sys.country,
                temp: json.main.temp,
                tempIcon: json.weather[0].icon,
                windSpeed: json.wind.speed,
                windAngle: json.wind.deg
            });
        }else if(input === '') {
            showW('Digite uma cidade no campo de pesquisa!');
        }else {
            showW('Digite novamente um estado(UF)');
            document.querySelector('.info img').setAttribute('src', '');
            holiResult.innerHTML = json;
        }
    }
});

function showI(json) {
    showW('.');
    document.querySelector('.resultado').classList.replace('none', 'flex');
    document.querySelector('.titulo').innerHTML = `${json.name},${json.country}`;
    document.querySelector('.temp-info').innerHTML = `${json.temp}ºC`;
    document.querySelector('.vento-info').innerHTML = `${json.windSpeed} km/h`;

    document.querySelector('.info img').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
};

function showW(msg) {
    document.querySelector('.holiday-warning').innerHTML = msg;
};