var baseNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function replaceEvens (array) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
          array.splice(i, 1, 0);
        }
    }
}

console.log(baseNumbers);
replaceEvens(baseNumbers);
console.log(baseNumbers);

/*Try to generate random numbers now*/