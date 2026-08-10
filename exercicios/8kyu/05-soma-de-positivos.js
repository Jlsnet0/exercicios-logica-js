/*
Você obtém uma variedade de números, retorna a soma de todos os pontos positivos.
Exemplo

    [1, -4, 7, 12] => 1+7+12=20 1 + 7 + 12 = 20 1+7+12=20

Nota

Se não houver nada a somar, a soma é inadimplente para 0.
*/

function positiveSum(arr){
    // return arr.filter(value => value >= 0).reduce((acc, value) => {
    //     acc += value;
    //     return acc;
    // }, 0);

    return arr.reduce((acc, value) => (acc + (value > 0 ? value : 0)), 0);
}

console.log(positiveSum([1, -4, 7, 12]))

