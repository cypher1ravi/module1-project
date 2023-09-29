function countOccurrences(str, char) {
    //approch 1
    /*  let count = 0;
      for (const c of str) {
          if (c === char) {
              count++;
          }
      }
      return count;
  */
    const charcount = str.split(char)
    console.log(charcount);
    return charcount.length - 1
}

console.log(countOccurrences('hello world', 'l'));