/*Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.*/

const BASE_ARRAY = [30, 30, 40, 5, 223, 2049, 3034, 5]

var mySet = new Set(BASE_ARRAY);

var newArray = [];

function backIntoArray(set) {
    for (let i of set) {
        newArray.push(i);
    }
}

console.log(BASE_ARRAY);
console.log(mySet);

backIntoArray(mySet);

console.log(newArray);

/*function turnIntoSet(array) {
    for (let i of array) {
        mySet.add(i);
    };
}

turnIntoSet(BASE_ARRAY);
*/