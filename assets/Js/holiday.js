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
        if(json.cod === 200 && Array.isArray(json.data)) {
            showI(json.data);

        }else if(input === '') {
            showW('Digite uma estado(UF) no campo de pesquisa!');
        }else {
            showW('Digite novamente um estado(UF)');
            holiResult.innerHTML = json;
        }
    }
});

function showI(json) {
    let resultHTML = '';

    for (let i = 0; i < json.length; i++) {
        const feriado = json[i];
        const feriadoInfo = `Data: ${feriado.date},${feriado.name},${feriado.level}`;
        resultHTML += feriadoInfo;
        console.log(feriado.name);
    }

    document.querySelector('.holiday-result').innerHTML = resultHTML;

};

function showW(msg) {
    document.querySelector('.holiday-warning').innerHTML = msg;
};