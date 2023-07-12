let questions = [
    {
        question: 'Em qual elemento HTML nós colocamos o javascript?',
        options: [
            'tag js',
            'tag script',
            'tag scripting',
            'tag javascript'
        ],
        answer: 1
    },
    {
        question: 'Onde é o local certo de colocar o javascript?',
        options: [
            'Na tag body',
            'Na tag head',
            'Tanto na tag body quanto a head estão corretas'
        ],
        answer: 2
    },
    {
        question: 'Qual a sintaxe correta para adicionar um arquivo javascript externo na tag script?',
        options: [
            'name="xxx.js"',
            'src="xxx.js"',
            'href="xxx.js"'
        ],
        answer: 1
    },
    {
        question: 'Um arquivo javascript externo precisa ter a tag script',
        options: [
            'Verdade',
            'Falso'
        ],
        answer: 1
    },
    {
        question: 'Como escrever um "Olá Mundo" em um alertbox?',
        options: [
            'alertBox("Olá Mundo")',
            'msgBox("Olá Mundo")',
            'msg("Olá Mundo")',
            'alert("Olá Mundo")'
        ],
        answer: 3
    },
    {
        question: 'Como você cria uma função no Javascript?',
        options: [
            'function:minhaFuncao()',
            'function = minhaFuncao()',
            'function minhaFuncao()'
        ],
        answer: 2
    },
    {
        question: 'Como chamar uma função chamada "minhaFuncao"?',
        options: [
            'call minhaFuncao',
            'call function minhaFuncao',
            'minhaFuncao()'
        ],
        answer: 2
    },
    {
        question: 'Como escrever uma condicional IF no Javascript?',
        options: [
            'if i = 5',
            'if i == 5 then',
            'if (i == 5)',
            'if i = 5 then'
        ],
        answer: 2
    },
    {
        question: 'Como fazer um if que executa um código caso "i" for diferente de 5',
        options: [
            'if (i != 5)',
            'if (i <> 5)',
            'if i <> 5',
            'if i =! 5 then'
        ],
        answer: 0
    },
    {
        question: 'Como o loop while começa?',
        options: [
            'while (i <= 10)',
            'while (i <= 10; i++)',
            'while i = 1 to 10'
        ],
        answer: 0
    },
    {
        question: 'Gostou do projeto?',
        options: [
            'Sim',
            'Não',
            'Talvez'
        ],
        answer: 0
    },
];


let currentQuestion = 0;
let correctAnswer = 0;

showQuestion();

document.querySelector('.score-area button').addEventListener('click', resetQuiz);

function showQuestion() {
    if(questions[currentQuestion]) {
        let q = questions[currentQuestion];

        let pct = Math.floor((currentQuestion / questions.length) * 100);

        document.querySelector('.progress-bar').style.width = `${pct}%`;
        
        document.querySelector('.score-area').style.display = 'none';
        document.querySelector('.question-area').style.display = 'block';

        document.querySelector('.question').innerHTML = q.question;
        
        let optionsHtml = '';
        for(let i in q.options) {
            optionsHtml += `<div class='option' data-op="${i}"><span>${+i+1}</span> ${q.options[i]}</div>`;
        }
        document.querySelector('.options').innerHTML = optionsHtml;

        document.querySelectorAll('.options .option').forEach(item => {
            item.addEventListener('click', optionClickEvent);
        })
    }else {
        finishQuiz();
    }
}

function optionClickEvent(e) {
    let clickOption = +e.target.getAttribute('data-op');

    if(questions[currentQuestion].answer === clickOption) {
        correctAnswer++;
    }

    currentQuestion++;
    showQuestion();
}

function finishQuiz() {
    let points = Math.floor((correctAnswer / questions.length) * 100);

    if(points === 0) {
        document.querySelector('.score-text').innerHTML = 'Rapaz como você conseguiu errar todas as questões?!?!';
        document.querySelector('.score-pct').style.color = '#FF0000';
    }else if (points > 0 && points <= 10) {
        document.querySelector('.score-text').innerHTML = 'Melhor do que nada peno menos acertou alguma!';
        document.querySelector('.score-pct').style.color = '#FF0000';
    }else if(points > 10 && points <= 30) {
        document.querySelector('.score-text').innerHTML = 'Parece eu em Quimica!';
        document.querySelector('.score-pct').style.color = '#FF0000';
    }else if (points > 30 && points < 50) {
        document.querySelector('.score-text').innerHTML = 'Eu queria dizer que você acertou pelo menos a metade mas eu estaria mentindo...';
        document.querySelector('.score-pct').style.color = '#FF0000';
    }else if (points === 50) {
        document.querySelector('.score-text').innerHTML = 'Se fosse uma prova provavelmente você estaria ferrado!';
        document.querySelector('.score-pct').style.color = '#FFFF00';
    }else if (points > 50 && points <= 70) {
        document.querySelector('.score-text').innerHTML = 'Parabens você acertou mais da metade, Não que isso signifique grande coisa!';
        document.querySelector('.score-pct').style.color = '#FFFF00';
    }else if (points > 70 && points <= 99) {
        document.querySelector('.score-text').innerHTML = 'Você esta preste a atingir 100% das questões. O impossivel será possivel -coach aleatorio!';
        document.querySelector('.score-pct').style.color = '#FFFF00';
    }else if ( points === 100) {
        document.querySelector('.score-text').innerHTML = 'Wow Você conseguiu,toma aqui o seu premio:';
        document.querySelector('score-bi').innerHTML = '01101111 01101011 00100000 01100001 01100011 01101000 01101111 00100000 01110001 01110101 01100101 00100000 01110110 01101111 01100011 11101010 00100000 01100110 01101111 01101001 00100000 01101100 01101111 01101110 01100111 01100101 00100000 01100100 01100101 01101101 01100001 01101001 01110011 00101100 01101101 01100001 01110011 00100000 01100001 01110000 01110010 01101111 01110000 01101111 01110011 01101001 01110100 01101111 00100000 01110100 01101111 01101101 01100001 00100000 01100001 01101001 00100000 01110011 01100101 01110101 00100000 01110000 01100001 01110010 01100001 01100010 01100101 01101110 01110011 00100001 ';
        document.querySelector('.score-pct').style.color = '#00FF00';
    }

    document.querySelector('.score-pct').innerHTML = `Acertou ${points}%`;
    document.querySelector('.score-text-two').innerHTML = `Você respondeu ${questions.length} e acertou ${correctAnswer}`

    document.querySelector('.score-area').style.display = 'block';
    document.querySelector('.question-area').style.display = 'none';
    document.querySelector('.progress-bar').style.width = '100%';
}


function resetQuiz() {
    correctAnswer = 0;
    currentQuestion = 0;
    showQuestion();
}