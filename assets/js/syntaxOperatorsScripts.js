var num1 = 0
var num2 = 0

function firstSentence (num1, num2) {

    let areEquals = '';
    
    (num1 !== num2) ? areEquals = 'not' : '';
    
    return `The numbers ${num1} and ${num2} are ${areEquals} equal.`;
}

function secondSentence (num1, num2) {

    let add = num1 + num2
    let comparing10 = 'bigger than';
    let comparing20 = 'bigger than';

    if (add < 10) {
        comparing10 = 'smaller than';
    } else if (add = 10) {
        comparing10 = 'equal to'
    }

    if (add < 20) {
        comparing20 = 'smaller than';
    } else if (add = 20) {
        comparing20 = 'equal to'
    }

    return `Their sum is ${add}, which is ${comparing10} 10 and ${comparing20} than 20.`;
}

function comparingNumbers (num1, num2) {
    num1 = parseInt(document.getElementById("num1").value);
    num2 = parseInt(document.getElementById("num2").value);
    
    if (!num1 || !num2) {
        results.innerHTML = "Type in both numbers";
    } else {
        let sentences = `${firstSentence(num1, num2)} ${secondSentence(num1, num2)}`;
        results.innerHTML = sentences;
    }
}