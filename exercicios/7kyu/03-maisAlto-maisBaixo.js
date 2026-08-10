/*
Nesta pequena tarefa você recebe uma série de números separados por espaço e deve retornar o número mais alto e mais baixo.

Exemplo:
    highAndLow("1 2 3 4 5"); // return "5 1"


*/

function highAndLow(numbers){
    const num = numbers.split(' ').map(n => Number(n));
    return `${Math.max(...num)} ${Math.min(...num)}`;
}

console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("1 2 -3 4 5"));
console.log(highAndLow("1 9 3 4 -5"));