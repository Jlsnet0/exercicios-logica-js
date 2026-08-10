// Escreva uma função para converter um nome em iniciais. Este kata leva estritamente duas palavras com um espaço entre eles.

// A saída deve ser de duas letras maiúsculas com um ponto que as separa.

// Deve ficar assim:

// Sam Harris=> S.H

// patrick feeney=> P.F

function abbrevName(name){
    return name.split(' ').map(word => word[0].toUpperCase()).join('.');
}

console.log(abbrevName('José Luiz'));
console.log(abbrevName('Renata Ribeiro'));
console.log(abbrevName('Mel Maria'));