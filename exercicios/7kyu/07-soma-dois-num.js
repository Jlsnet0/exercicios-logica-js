/*
Crie uma função que retorne a soma dos dois números positivos mais baixos, dada uma matriz de números inteiros mínimos 4 positivos. Nenhum flutuador ou número inteiro não positivo será passado.

Por exemplo, quando uma matriz é passada como [19, 5, 42, 2, 77], a saída deve ser 7.

[10, 343445353, 3453445, 3453545353453] deveria retornar 3453455.]
*/

function sumTwoNum(n){
    return n.sort((a, b) => a - b).slice(0, 2).reduce((acc, v) => acc + v);
}

console.log(sumTwoNum([19, 5, 42, 2, 77]))