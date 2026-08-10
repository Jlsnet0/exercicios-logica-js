/*
Complete a solução de modo que ela reverta a string passada para ela.

'world'  =>  'dlrow'
'word'   =>  'drow'

*/

function solution(str){
    return str.split('').reverse().join('');
};

console.log(solution('world'));