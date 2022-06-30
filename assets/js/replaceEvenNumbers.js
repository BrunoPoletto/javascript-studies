var baseNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

function replaceEvens (array) {
    for (let i = 0; i < baseNumbers.length; i++) {
        if (baseNumbers[i] % 2 === 0) {
          baseNumbers.splice(i, 1, 0);
        }
    }
}

console.log(baseNumbers);
replaceEvens(baseNumbers);
console.log(baseNumbers);
//var numbers = []
//function randomizer([], []) {
//    for (i = 0; i <= 7; i++) {
//        let rPos = Math.floor(Math.random(baseNumbers));
//        let rNum = baseNumbers[rPos];
//        numbers.push(rNum);
//    }
//}
//
//console.log(numbers);
//
//randomizer(baseNumbers);