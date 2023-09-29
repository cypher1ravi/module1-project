const primeNumber = (n) => {
    const primeNumber = [];
    for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) {
            continue;
        } else {
            primeNumber.push(i)
        }
    }
    return primeNumber
}
console.log(primeNumber(12));