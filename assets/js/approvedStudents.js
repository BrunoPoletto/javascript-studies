/*Crie uma função que recebe o array alunos e um número que irá representar a média final;
Percorra o array e popule um novo array auxiliar apenas com os alunos cujas notas são maiores ou iguais à média final;
Utilize a técnica "object destructuring" para manipular as propriedades desejadas de cada aluno.*/

const STUDENTS = [
    {name: 'Lucas', grade: 8},
    {name: 'Mariana', grade: 7},
    {name: 'Mirela', grade: 9},
    {name: 'Constantino', grade: 5},
    {name: 'Pedro', grade: 10},
    {name: 'Bárbara', grade: 4}
]

const PASSING_GRADE = 7;

var approvedStudents = [];

console.log(STUDENTS);

function getApproved (array, number) {
    for (let i of array) {
        if (i.grade >= number) {
            approvedStudents.push(i);
        }
    }
    return approvedStudents;
}

getApproved(STUDENTS, PASSING_GRADE)

console.log(approvedStudents);