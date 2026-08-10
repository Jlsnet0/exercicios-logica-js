/*
Nesta tarefa simples você recebe um número e tem que torná-lo negativo. Mas talvez o número já seja negativo?
Exemplos

makeNegative(1);    // return -1
makeNegative(-5);   // return -5
makeNegative(0);    // return 0
makeNegative(0.12); // return -0.12

Notas

    O número já pode ser negativo, caso em que nenhuma alteração é necessária.
    Zero (0) não é verificado para qualquer sinal específico. Os zeros negativos não fazem sentido matemático.
*/

function makeNegative(num){
    return num <= 0 ? num : num * -1;
}

console.log(makeNegative(1));
console.log(makeNegative(-5));
console.log(makeNegative(0));
console.log(makeNegative(0.12));