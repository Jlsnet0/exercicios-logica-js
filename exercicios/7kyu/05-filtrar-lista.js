/*
    criar uma função que leva uma lista de inteiros e strings não negativos e retorna uma nova lista com as strings filtradas.
*/

function filterList(l){
    return l.filter(l => typeof l !== 'string');
}

console.log(filterList([1,2,'a','b']));
console.log(filterList([1,'a','b',0,15]));
console.log(filterList([1,2,'aasf','1','123',123]));