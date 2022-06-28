

function firstSentence (num1, num2) {
    let areEquals = '';

    if (num1 !== num2) {
        areEquals = 'não';
    } 
    return `Os numeros ${num1} e ${num2} ${areEquals} são iguais.`;
}

function secondSentence (num1, num2) {
    let add = num1 + num2;
    let biggerThan10 = 'maior';
    let biggerThan20 = 'maior';

    if (add < 10) {
        return biggerThan10 = 'menor';
    }

    if (add < 20) {
        return biggerThan20 = 'menor';
    }

    return `Sua soma é ${add}, que é ${biggerThan10} que 10 e ${biggerThan20} que 20.`;
}

function comparingNumbers (num1, num2) {
    let sentences = '';
    firstSentence(num1, num2);
    secondSentence(num1, num2);
    sentences = `$(firstSentence) $(secondSentence)`;
    return sentences;
}