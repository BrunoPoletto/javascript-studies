/*Some todos os números de um array

Crie uma função que recebe uma lista de preços e um número representando o saldo disponível. 
Calcule qual será o saldo final após subtrair todos os preços da lista enviada. */

const NUMBER_LIST = [55, 72, 10, 22, 44, 15, 33, 37];

function addNumbers(array) {
    let result = array.reduce(
        (accumulator, previous) => accumulator + previous
    );
    return result;
}

console.log(addNumbers(NUMBER_LIST));

//Up top is the adding numbers exercise. Down below is the prices one.
//Both are working simultaneously.

const SHOPPING_LIST = {
    macarrao: 5,
    arroz: 18,
    feijao: 9,
    carne: 35,
    frango: 18,
    salame: 35,
}
var prices = Object.values(SHOPPING_LIST);

console.log(prices);

var myMoney = 600;

function moneyLeft (array) {
    let result = array.reduce(
        (accumulator, previous) => accumulator - previous, myMoney
        );
    return result;
}

console.log(moneyLeft(prices));