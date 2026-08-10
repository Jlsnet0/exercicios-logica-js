/*
Tarefa

Seu objetivo é escrever uma função que remova o primeiro e o último caracteres de uma string. Você recebe um parâmetro, a string original.

Importante: Sua função deve lidar com strings de qualquer length ≥ 2personagens. Para strings com exatamente 2caracteres, retornam uma corda vazia.
Exemplos

'eloquent' --> 'loquen'
'country'  --> 'ountr' 
'person'   --> 'erso'
'ab'       --> '' (empty string)
'xyz'      --> 'y'

Requisitos

    A string de entrada sempre terá pelo menos 2 caracteres
    Para strings com exatamente 2 caracteres, retorne uma string vazia
    Para strings com 3 ou mais caracteres, remova o primeiro e o último caractere
    A função deve lidar com strings contendo letras, números e caracteres especiais

Casos de teste

Sua solução será testada contra:

    Funcionalidade básica com palavras comuns
    Casos de borda com 2 caracteres e 3 caracteres
    Cordas contendo números e caracteres especiais
    Casos de teste aleatórios de comprimentos variados

*/

function removeChar(str){
    return str.slice(1, -1);
};

console.log(removeChar('eloquent'));
console.log(removeChar('country'));
console.log(removeChar('person'));
console.log(removeChar('ab'));
console.log(removeChar('xyz'));