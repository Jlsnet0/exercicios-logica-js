/*
Complete a função de soma quadrada de modo que ela quadrate cada número passada para ela e, em seguida, soma os resultados juntos.

Por exemplo, para [1, 2, 2] deve retornar 9 porque 12+22+22=91^2 + 2^2 + 2^2 = 912+22+22=9. 
*/

function squareSum(numbers){
    return numbers.reduce((acc, value) => acc + value * value, 0);
}

console.log(squareSum([1, 2, 2]));