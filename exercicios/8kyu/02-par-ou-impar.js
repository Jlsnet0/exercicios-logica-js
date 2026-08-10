// Criar uma função que leva um número inteiro como um argumento e retorna "Even"para números pares ou "Odd"para números ímpares.

function evenOrOdd(number){
    return number % 2 === 0 ? 'Even' : 'Odd';
}

console.log(evenOrOdd(2));
console.log(evenOrOdd(3));