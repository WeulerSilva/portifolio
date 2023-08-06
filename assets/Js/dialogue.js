const objApp = {
    weather:
      '"Apresento o app de clima: um aplicativo meteorológico simples e intuitivo! Com uma interface amigável, você pode explorar as previsões do tempo em tempo real para qualquer cidade. Obtenha informações meteorológicas precisas em tempo real de qualquer cidade que você desejar.Com ele eu consegui aperfeiçoar meus conhecimentos com APIs!',
    camera:
      'Um aplicativo de câmera que leva a fotografia para um novo patamar! Explore e descubra aonde eu quero chegar com isso!?!?',
    cameraFront:
      'Desculpa não resisti é apenas uma brincadeira :)',
    calendar:
      'Apresento meu calendário minimalista e funcional! Acompanhe o dia, o mês, o ano e o dia da semana de forma clara e organizada. Nele eu Aperfeiçoei meus conhecimentos com DATE no javascript.',  
    github:
      'Com este aplicativo do GitHub simplificado e funcional, você pode acessar o perfil da minha conta ou ir para os meus repositórios para que você possa sempre acompanhar e ver meu progresso com os meus projetos! vá em frente e me segue lá no GitHub...',
    linkedin:
      'Através desse app você pode acessar minha pagina profissional do LinkedIn onde poderá me conhecer melhor. Me mande um oi :)',
    calculator:
      "'Um dos melhores Apps de calculadora já feitos' -Minha mãe! Com agilidade adicione, subtraia, multiplique ou divida com facilidade. Através dela consegui aperfeiçoar meu design com CSS e simplificar os IF no JavaScript usando o EVAL( ).",
    memory:
      'Através desse app eu aprendi a desenvolver sistemas mais complexos no JavaScript para que eu pode-se completar esse desafio de fazer um jogo da memoria totalmente funcional, onde ele contabiliza suas vitorias e derrotas e ainda contem um sistema de vida! Sem mencionar as horas que passei consertando bugs, dirvita-se ;)',
    internet:
      'Apresento meu mais novo app da web, uma verdadeira vitrine dos meus trabalhos online! Aqui, você encontrará uma coletânea de links diretos para os sites que criei, incluindo projetos de design, desenvolvimento web e muito mais. Navegue facilmente entre eles e descubra projetos únicos em diferentes áreas, desde websites interativos até experiências envolventes. Seja você um entusiasta da tecnologia, um cliente em potencial ou um colega de trabalho, este é o lugar para explorar meu mundo digital e conhecer o meu trabalho mais de perto!',
    quiz:
      'Desafie a si mesmo com varias perguntas aleatórias sobre vários assuntos de diversos temas. O grande desafio desse Quiz e de responder todas as perguntas sem errar nenhuma, onde ao final será computado sua pontuação. ',
    quizwinner:
      '01101111 01101011 00100000 01100001 01100011 01101000 01101111 00100000 01110001 01110101 01100101 00100000 01110110 01101111 01100011 11101010 00100000 01100110 01101111 01101001 00100000 01101100 01101111 01101110 01100111 01100101 00100000 01100100 01100101 01101101 01100001 01101001 01110011 00101100 01101101 01100001 01110011 00100000 01100001 01110000 01110010 01101111 01110000 01101111 01110011 01101001 01110100 01101111 00100000 01110100 01101111 01101101 01100001 00100000 01100001 01101001 00100000 01110011 01100101 01110101 00100000 00101000 01110000 01100001 01110010 01100001 01100010 01100101 01101110 01110011 00101001 00100001 ',
    contact:
      'Aqui você encontrará todas as minhas redes sociais e informações de contato importantes. Conecte-se comigo facilmente através do Email, LinkedIn e GitHub, e acesse meu currículo para baixar o PDF e conhecer mais sobre minha trajetória profissional. Fique à vontade para me contatar e conhecer melhor meu trabalho. Espero que nossa conexão seja o começo de grandes oportunidades e colaborações!',
    bio:
      'Através desse app Bio você vai conhecer melhor meus desafios e dedicação, como estou conciliando minha carreira na construção civil com estudos em programação, e agora estou pronto para dar o próximo passo nessa emocionante jornada profissional. Conheça mais sobre mim e minha determinação em busca de novos horizontes no mundo do Front-End!',

    };

const objAppEng = {
  weather:
      'Introducing the weather app: a simple and intuitive app! With a user-friendly interface, you can explore real-time weather forecasts for any city. Get accurate real-time weather information for any city you want.With it I managed to improve my knowledge with APIs!',
  camera:
      'A camera app that takes photography to the next level! Explore and find where I want to go with this!?!?',   
  cameraFront:
      "Sorry I couldn't resist it's just a joke :)",
  calendar:
      'I present my minimalist and functional calendar! Keep track of the day, month, year and day of the week in a clear and organized way. In it I perfected my knowledge with DATE in javascript.',
  github:
    'With this streamlined and functional GitHub app, you can access my account profile or go to my repositories so you can always follow along and see my progress with my projects! go ahead and follow me over on GitHub...',    
  linkedin:
    'Through this app you can access my professional LinkedIn page, where you can get to know me better. Send me a message :)',
  calculator:
    "'One of the best calculator apps ever made' -My mom! Quickly add, subtract, multiply or divide with ease. Through it I managed to improve my design with CSS and simplify the IF in JavaScript using EVAL( ).",
  memory:
    'Through this app I learned how to develop more complex systems in JavaScript so that I could complete this challenge of making a fully functional memory game, where it counts your wins and losses and even contains a life system! Not to mention the hours I spent fixing bugs,have fun ;)',
  internet:
    "I present my newest web app, a true showcase of my work online! Here, you'll find a collection of direct links to sites I've created, including design projects, web development, and more. Easily navigate between them and discover unique projects in different areas, from interactive websites to immersive experiences. Whether you're a tech enthusiast, a potential client or a co-worker, this is the place to explore my digital world and get to know my work up close.",
  quiz:
    'Challenge yourself with lots of random questions on various subjects from different topics. The great challenge of this Quiz is to answer all the questions without making any mistakes, where in the end your score will be computed.',
  contact:
    'Here you will find all my important social media and contact information. Connect with me easily through Email, LinkedIn and GitHub, and access my resume to download the PDF and learn more about my professional career. Feel free to contact me and get to know my work better. I hope our connection is the beginning of great opportunities and collaborations!',
  bio:
    'Through this Bio app, you will learn more about my challenges and dedication, how I´m reconciling my career in civil construction with studies in programming, and now I am ready to take the next step in this exciting professional journey. Get to know more about me and my determination in search of new horizons in the world of Front-End!',
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
    document.querySelector('.dialogue').innerHTML = '';
    let p = document.createElement('p');
    p.setAttribute('id', 'dialogue-text');
    document.querySelector('.dialogue').appendChild(p);

    if (object.hasOwnProperty(key)) {
      const dialogue = object[key];
      textContainer.innerHTML = '';
      typeText(dialogue, 'dialogue-text', 30);
    }
  }

  