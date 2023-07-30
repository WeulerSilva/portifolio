if (languageEng) {
  document.querySelector('.weather h1').innerHTML = 'Weather';
  document.querySelector('.aviso').innerHTML = 'Enter the name of the city you want to search for the current weather!';
  document.querySelector('.busca button').innerHTML = 'Search';
}

document.querySelector('.busca').addEventListener('submit', async (event) => {
  event.preventDefault();

  let input = document.querySelector('#search-input').value;

  if (input !== '') {
    if (languageEng) {
      showWarning('Loading...');
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=f5c4114d066f7581255097aa7e7322a7&units=imperial&lang=pt_br`;
      let results = await fetch(url);
      let json = await results.json();
      showJson(json);
    } else {
      showWarning('Carregando...');
      let url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURI(input)}&appid=f5c4114d066f7581255097aa7e7322a7&units=metric&lang=pt_br`;
      let results = await fetch(url);
      let json = await results.json();
      showJson(json);
    }



    function showJson(json) {
      if (json.cod === 200) {
        showInfo({
          name: json.name,
          country: json.sys.country,
          temp: json.main.temp,
          tempIcon: json.weather[0].icon,
          windSpeed: json.wind.speed,
          windAngle: json.wind.deg
        });
      } else if (input === '') {
        if (languageEng) {
          showWarning('Enter a city in the search field!');
        } else {
          showWarning('Digite uma cidade no campo de pesquisa!');
        }

      } else {
        if (languageEng) {
          showWarning('Type it again!');
          document.querySelector('.info img').setAttribute('src', '');
        } else {
          showWarning('Digite novamente!');
          document.querySelector('.info img').setAttribute('src', '');
        }

      }
    }

  }
});

function showInfo(json) {
  if (languageEng) {
    document.querySelector('.temp-titulo').innerHTML = 'Temperature:';
    document.querySelector('.vento-titulo').innerHTML = 'Wind:';
    document.querySelector('.resultado').classList.replace('none', 'flex');
    document.querySelector('.titulo').innerHTML = `${json.name},${json.country}`;
    document.querySelector('.temp-info').innerHTML = `${json.temp}ºF`;
    document.querySelector('.vento-info').innerHTML = `${json.windSpeed} Mph`;

    document.querySelector('.info img').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
  } else {
    document.querySelector('.temp-titulo').innerHTML = 'Temperatura:';
    document.querySelector('.vento-titulo').innerHTML = 'Vento:';
    document.querySelector('.resultado').classList.replace('none', 'flex');
    document.querySelector('.titulo').innerHTML = `${json.name},${json.country}`;
    document.querySelector('.temp-info').innerHTML = `${json.temp}ºC`;
    document.querySelector('.vento-info').innerHTML = `${json.windSpeed} km/h`;

    document.querySelector('.info img').setAttribute('src', `https://openweathermap.org/img/wn/${json.tempIcon}@2x.png`);
  }
  showWarning('.');

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