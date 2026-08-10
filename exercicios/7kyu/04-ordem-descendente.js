/*
fazer uma função que pode tomar qualquer número inteiro não negativo como um argumento e retorná-lo com seus dígitos em ordem decrescente. Essencialmente, reorganize os dígitos para criar o número mais alto possível.

Exemplo:
    Entrada: 42145 Saída: 54421
*/

function descendingOrder(n){
    return Number(String(n).split('').sort((a, b) => b - a).join(''));
}

console.log(descendingOrder(42145));



