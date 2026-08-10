/*
Muito simples, dado um número, encontrar o seu oposto (inverso aditivo).

Exemplos:

1: -1
14: -14
-34: 34
*/

function opposite(number){
    // if (number > 0) return -Math.abs(number);
    // return Math.abs(number);
    return (-number);
};

console.log(opposite(1));
console.log(opposite(14));
console.log(opposite(-34));