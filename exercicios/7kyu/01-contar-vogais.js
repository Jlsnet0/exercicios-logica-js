/*
Retorne o número (contagem) de vogais na string dada.

A cadeia de entrada consistirá apenas em letras minúsculas e/ou espaços.
*/

function getCount(str){
    // return str.split('').filter(value => 'aeiouAEIOU'.includes(value)).length;
    return (str.match(/[aeiou]/ig) || []).length;
}

console.log(getCount('abracadabra'));