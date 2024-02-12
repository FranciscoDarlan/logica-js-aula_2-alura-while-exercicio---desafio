
let qtdNumeros = prompt('Digite a quantidade de números para o cálculo da média:');
let soma = 0;
let contador = qtdNumeros;

while(contador > 0){
    let numero = parseInt(prompt('Digite o numero:'));
    soma += numero;
    // objetivo do while era fazer o descremento -- até zera o contador!
    contador--;
}

let media = soma / qtdNumeros;
alert(`a media é :${media}`);
console.log(media);
