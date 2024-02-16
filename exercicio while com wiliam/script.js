
// script desafio LOOP

let button = document.querySelector('.buttonDesafio4');


console.log('INICIANDO DESAFIO WHILE')

function desafio1() {
    alert('bem vindo ao desafio 1')
    let nome = prompt('QUAL SEU NOME ??');
    let numberOne = prompt("qual primeiro número que você quer que comece a contar??")

    let contador;
    while (numberOne < 11) {
        console.log('entrou no while');
        contador = numberOne++;

        alert(`Contando ${contador} ... aperte o OK para continuar a contagem !`)

    };
    alert(` ${nome} OBRIGADO POR JOGAR !!`);
}


function desafio2() {
    alert('bem vindo ao desafio 2');
    let nome = prompt('QUAL SEU NOME ??');

    let numberStart = prompt('qual numero quer começar a decrescer ??');
    let valor;

    while (numberStart > -1) {
        valor = numberStart--;
        alert(` Decrecendo com ${valor} .... aperte em OK para continuar !!`)
    };

    alert(` ${nome} OBRIGADO POR JOGAR !!`);
}

function desafio3() {
    alert('bem vindo ao desafio 3')
    let nome = prompt('QUAL SEU NOME ??');
    alert('AQUI VAMOS UTILIZAR O CONSOLE DO NAVEGADOR, VAI PRECISAR ABRIR O INSPECIONAR !!!');

    alert('vamos fazer a decreção!');
    let numberStart = prompt('QUAL NÚMERO QUER COMEÇAR A DECRECER ??');
    let lastNumber = 0;

    while (numberStart > lastNumber) {

        if (numberStart == numberStart) {
            numberStart++;
            console.log(`vamos contar ${numberStart} ...`);
        }
        if (numberStart > lastNumber) {
            console.log(`contando ${numberStart} ...`);
        };
        numberStart--;

    }; alert(` ${nome} OBRIGADO POR JOGAR !!`);

}

function desafio4() {
    alert('bem vindo ao desafio 4')
    let nome = prompt('QUAL SEU NOME ?');

    let lastNumber = prompt('QUER CONTAR ATÉ QUE NÚMERO ?');

    let valorInicial = 0;
    console.log(valorInicial);

    while (lastNumber > valorInicial) {
        console.log(` entrou no while`);
        valorInicial++;
        console.log(` Valor agora é ${valorInicial} ...`);
    };
    console.log('saiu do while');
    alert(`${nome} OBRIGADO POR JOGAR O JOGO DE CONTAR!!`);

    

};


// terntandoo chamar a função com eventlistener ..
button.addEventListener("click", desafio4());



