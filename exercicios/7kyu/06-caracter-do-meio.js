/*
    retornar os caracteres do meio da string.

    Se o comprimento da string for impar, retorne o caractere do meio.
    Se o comprimento da string for par, retorne os 2 caracteres do meio.
*/

function getMiddle(s){
    const middle = Math.floor(s.length / 2);
    return s.length % 2 === 0 ? s.slice(middle - 1, middle + 1) : s.slice(middle, middle + 1);
}

console.log(getMiddle('test'));
console.log(getMiddle('testing'));




