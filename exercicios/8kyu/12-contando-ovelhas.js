/*
Considere uma matriz / lista de ovelhas onde algumas ovelhas podem estar faltando em seu lugar. Precisamos de uma função que contem o número de ovelhas presentes na matriz (verdadeiro significa presente).

Por exemplo,

[true,  true,  true,  false,
  true,  true,  true,  true ,
  true,  false, true,  false,
  true,  false, false, true ,
  true,  true,  true,  true ,
  false, false, true,  true]

A resposta correta seria 17.

Dica: Não se esqueça de verificar se há valores ruins como null/undefined
*/

function countSheeps(sheep) {
    // return sheep.filter(s => s).length;
    //* OU
    return sheep.filter(Boolean).length;
}

console.log(countSheeps([]));
console.log(countSheeps([undefined,null,false,true]));
console.log(countSheeps([true, true, true, false,
    true, true, true, true,
    true, false, true, false,
    true, false, false, true,
    true, true, true, true,
    false, false, true, true]));


