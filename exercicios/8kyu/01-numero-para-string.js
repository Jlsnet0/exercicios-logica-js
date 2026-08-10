/*
Precisamos de uma função que possa transformar um número (inteiro) em uma string.

Que formas de conseguir isso você sabe?
Exemplos (entrada --> saída):

123  --> "123"
999  --> "999"
-100 --> "-100"

*/

function numberToString(num){
    return String(num);
}

const numero = numberToString(123);

console.log(typeof numero);