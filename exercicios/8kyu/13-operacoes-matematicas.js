/*
Sua tarefa é criar uma função que faça quatro operações matemáticas básicas.

A função deve levar três argumentos - operação (string/char), value1(número), value2(número).
A função deve retornar resultado de números após a aplicação da operação escolhida.
Exemplos(Operador, valor1, valor) --> saída

('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7

*/

function basicOp(operation, value1, value2){
    switch (operation) {
        case '+': return value1 + value2;
        case '-': return value1 - value2;
        case '*': return value1 * value2;
        case '/': return value1 / value2;
        default: return 0;
    }
}

console.log(basicOp('+', 4, 7));
console.log(basicOp('-', 15, 18));
console.log(basicOp('*', 5, 5));
console.log(basicOp('/', 49, 7));