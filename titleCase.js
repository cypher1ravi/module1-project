function titleCase(sentence) {

    const words = sentence.toLowerCase().split(' ');
    //approch 1

    /*for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substring(1);
    }
    */

    //approch 2

    const CapitalizedWord = words.map((word) => word.charAt(0).toUpperCase() + word.slice(1)

    )
    return CapitalizedWord.join(' ');
}

console.log(titleCase("Dream big, work hard, and stay focused"));