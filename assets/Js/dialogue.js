const objDialogue = {
    weather:
      'Aqui vc escontrara e descobrira como esta o clima em tempo real do local que vc deseja pesquisar. Apenas digite o nome da cidade desejada!!!!',
    aleatorio:
      'https://github.com/WeulerSilva/portifolio/settings/pages',   
    aleatorio2:
      'esse site e mais aleatorio ainda pq eu sei fazer nada blablabla',
  };

  const objDialogueEng = {
    weather:
      'yes all this text is in english!!!!',
    aleatorio:
      'https://github.com/WeulerSilva/portifolio/settings/pages',   
    aleatorio2:
      'esse site e mais aleatorio ainda pq eu sei fazer nada blablabla',
  };
  
  const textContainer = document.querySelector('#dialogue-text');

  function typeText(text, element, interval) {
    let index = 0;
    const textElement = document.getElementById(element);

    function displayNextCharacter() {
      if (index < text.length) {
        textElement.textContent += text.charAt(index);
        index++;
        setTimeout(displayNextCharacter, interval);
      }
    }

    displayNextCharacter();
  }

  function changeText(object,key) {
    document.querySelector('.dialogue').classList.replace('none', 'flex');
    if (object.hasOwnProperty(key)) {
      const dialogue = object[key];
      textContainer.innerHTML = ''; // Limpa o conteúdo atual
      typeText(dialogue, 'dialogue-text', 30); // Chama a função de digitação com intervalo de 100ms
    }
  }

  // Chama a função para exibir o texto "weather" imediatamente após a página ser carregada
  