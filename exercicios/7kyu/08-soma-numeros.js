// Dados dois inteiros ae b, que pode ser positivo ou negativo, encontrar a soma de todos os números inteiros entre e incluí-los e devolvê-lo. Se os dois números são igual retorno aou b.

function getSum(a, b){
    const menor = Math.min(a, b);
    const maior = Math.max(a, b);
    let soma = 0;
    for(let i = menor; i <= maior; i++){
        soma += i;
    }
    return soma;
}

console.log(getSum(595, 413));
console.log(getSum(5, 5));