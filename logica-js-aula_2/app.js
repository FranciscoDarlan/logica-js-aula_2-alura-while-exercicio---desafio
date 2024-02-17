alert('Boas vindas ao jogo do número secreto');
let numeroSecreto = 5;
console.log(numeroSecreto);

let tentativa = 1;

let chute;
// enquanto o numero for diferente ele vai ficar no loop. so vai parar de executar o ehile quando o numero for certo.
while (chute != numeroSecreto) {

    // enquanto for verdade vou fazer isso ..
    chute = prompt('Escolha um número entre 1 e 10');

    // se o chute for igual entro aqui ...
    if (chute == numeroSecreto) {
        break;
    }

    if (chute < numeroSecreto) {
        alert(`numero secreto é maior que ${chute}.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`numero secreto é menor que ${chute}.`);
        }
        tentativa++;
    }

};

let variavelTentativa = tentativa > 1 ? 'tentativas':'tentativa';
alert(`parabens você acertou o numero secreto ${numeroSecreto} com ${tentativa} tentativas!`);


