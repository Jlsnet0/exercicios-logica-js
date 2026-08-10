/*
Timmy e Sarah pensam que estão apaixonados, mas em torno de onde vivem, eles só vão saber uma vez que eles escolhem uma flor cada. Se uma das flores tem um número uniforme de pétalas e a outra tem um número ímpar de pétalas significa que elas estão apaixonadas.

Escreva uma função que pegue o número de pétalas de cada flor e volte a ser verdadeira se elas estiverem apaixonadas e falsas se não estiverem.

*/

function lovefunc(flower1, flower2){
    return (flower1 + flower2) % 2 === 1;
}

console.log(lovefunc(1,4));
console.log(lovefunc(2,2));
console.log(lovefunc(0,1));
console.log(lovefunc(0,0));