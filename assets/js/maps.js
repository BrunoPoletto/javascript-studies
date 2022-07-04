/*Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

Crie uma função getAdmins que recebe um Map;
Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.
 */

const MEMBERS = new Map();
MEMBERS.set('Alvaro', 'user');
MEMBERS.set('Bárbara', 'user');
MEMBERS.set('Cristina', 'admin');
MEMBERS.set('Alexandre', 'admin');
MEMBERS.set('Bianca', 'user');
MEMBERS.set('Constância', 'admin');

var adminList = new Map();

function getAdmins(map) {
    for ([key, value] of map) {
        if (value === 'admin') {
            adminList.set(key, value);
        }
    }
    return adminList;
}


console.log(MEMBERS);
getAdmins(MEMBERS);
console.log(adminList);