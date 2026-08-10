/*
Escreva uma função que aceite um número inteiro não negativo n e uma string s como parâmetros, e retorna uma cadeia de s repetidos exatamente n vezes.
Exemplos (entrada -> saída)

6, "I"     -> "IIIIII"
5, "Hello" -> "HelloHelloHelloHelloHello"

*/

function repeatStr(n , s){
    return s.repeat(n);
};

console.log(repeatStr(150, 'I'));
console.log(repeatStr(5, 'Hello'));