var num1 = 0
var num2 = 0
var add = 0


function firstSentence (num1, num2) {
    let areEquals = '';

    if (num1 !== num2) {
        areEquals = 'não';
    } 
    return `Os numeros ${num1} e ${num2} ${areEquals} são iguais.`;
}

function secondSentence (num1, num2) {
    add = num1 + num2
    let biggerThan10 = 'maior';
    let biggerThan20 = 'maior';

    if (add < 10) {
        biggerThan10 = 'menor';
    }

    if (add < 20) {
        biggerThan20 = 'menor';
    }

    return `Sua soma é ${add}, que é ${biggerThan10} que 10 e ${biggerThan20} que 20.`;
}

function comparingNumbers (num1, num2) {
    num1 = document.getElementById("num1").value;
    num2 = document.getElementById("num2").value;
    let sentences = `${firstSentence(num1, num2)} ${secondSentence(num1, num2)}`;
    results.innerHTML = sentences;
}