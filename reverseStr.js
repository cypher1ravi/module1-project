function reverseString(str) {
    const reversedStr = []
    const newStr = str.toLowerCase().split(' ')
    for (let i = 0; i < newStr.length; i++) {
        let word = newStr[i]
        let reversedWord = word.split('').reverse().join('');
        reversedStr.push(reversedWord)
    }
    return reversedStr.join(' ')
}
console.log(reverseString('hello world'));