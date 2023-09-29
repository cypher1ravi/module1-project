function findLongestWord(sentence) {

    const words = sentence.split(' ');
    let maxLength = 0;
    //Approch 1[using for loop]

    /* for (let i = 0; i < words.length; i++) {
        const length = words[i].length;
        if (length > maxLength) {
            maxLength = length;
        }
     } */


    //Approch 2[using for of]

    for (let word of words) {
        const length = word.length;
        if (length > maxLength) {
            maxLength = length;
        }
    }

    return maxLength;
}
console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
