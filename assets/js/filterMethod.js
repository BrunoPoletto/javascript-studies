/*Filtre e retorne todos os números pares de um array.*/

const NUMBERS = [234, 423, 1231, 345, 32, 11, 53, 642, 2342, 4564, 5675, 234234, 134235];

function isEven(number) {
    if (number % 2 === 0) {
        return number;
    }
}

function filterEvens (array) {
    let results = array.filter(isEven);
    return results;
}

console.log(NUMBERS);

console.log(filterEvens(NUMBERS));