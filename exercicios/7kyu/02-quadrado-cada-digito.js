/*
Bem-vindo. Neste kata, você é solicitado a quadratura de cada dígito de um número e concatená-los.

Por exemplo, se executarmos o 9119 através da função, 811181 sairá, porque 9² é 81 e 1² é 1. (81-1-1-81)

Exemplo #2: Uma entrada de 765 irá/deve retornar 493625 porque 7² é 49, 6² é 36 e 5² é 25. (49-36-25)

Nota: A função aceita um número inteiro e retorna um número inteiro.

Boa Codificação!
*/

function squareDigits(num){
    return Number(String(num).split('').map(v => v * v).join(''));
    // return String(num).split('').map(v => v * v).join('')
}

console.log(squareDigits(9119));
console.log(squareDigits(765));