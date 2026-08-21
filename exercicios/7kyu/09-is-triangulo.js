// Implementar uma função que aceita 3 valores inteiros a, b, c. A função deve retornar verdadeira se um triângulo pode ser construído com os lados de comprimento e falso em qualquer outro caso.

// (Neste caso, todos os triângulos devem ter superfície maior que 0 para serem aceitos).



function isTriangle(a, b, c){
    return a + b > c && a + c > b && b + c > a;
}

console.log(isTriangle(1,2,2));
console.log(isTriangle(0,2,3));
console.log(isTriangle(-5, 1, 3));