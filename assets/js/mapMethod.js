/*Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um 
objeto criado por você, e depois sem ele.*/

const PRIEST = {
    cha: 2,
    dex: 3,
    str: 1,
    int: 5,
    wis: 6,
    luk: 1,
};

const WIZARD = {
    cha: 3,
    dex: 2,
    str: 1,
    int: 6,
    wis: 5,
    luk: 3,
};

const WARRIOR = {
    cha: 4,
    dex: 3,
    str: 6,
    int: 2,
    wis: 1,
    luk: 2,
};

const BARD = {
    cha: 6,
    dex: 5,
    str: 1,
    int: 3,
    wis: 3,
    luk: 2,
};

const ROGUE = {
    cha: 4,
    dex: 6,
    str: 2,
    int: 2,
    wis: 1,
    luk: 4,
};

const DAMAGE = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


const RANDOM_NUMBERS = [123, 234, 56345, 7653, 12341, 567356, 234, 9, 23, 20, 43, 2]

function callback(number) {
    return number * 2;
}

function intDmgMulti(number) {
    return number * this.int; 
}

function mapObject(array) {
    let results = array.map(intDmgMulti, WIZARD)
    return results;
}

console.log(DAMAGE);
console.log(mapObject(DAMAGE));


//Array is done.
function mapArray(array) {
    let results = array.map(callback);
    return results;
}

console.log(RANDOM_NUMBERS);
console.log(mapArray(RANDOM_NUMBERS));