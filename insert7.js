function insert7(str) {
    let newStr = '';

    for (let i = 0; i < str.length; i++) {
        newStr += str.charAt(i);
        if ((i + 1) % 7 === 0) {
            newStr += '7';
        }
    }

    return newStr;
}

console.log(insert7("Hello World and Universe!"));
