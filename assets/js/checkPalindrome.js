const WORD = "madam";


function separate(string) {
    let splitWord = string.split("");
    return splitWord;
}

function invert(string) {
    let backwardsWord = string.split("");
    backwardsWord.reverse();
    return backwardsWord;
}

function testPalindrome(array1 ,array2) {
        for (i = 0; i < array1.length; i++) {
            console.log(array1);
            console.log(array2);
            if (array1[i] !== array2[i]) {
                return "Not a palindrome.";        
            } 
            
        }
        return "The word is a palindrome";
}

function checkPalindrome(WORD) {
    let word1 = separate(WORD);
    let word2 = invert(WORD);

    let results = testPalindrome(word1, word2);
    return results;
}

console.log(checkPalindrome(WORD))

/*Try to integrate this to an HTML now*/