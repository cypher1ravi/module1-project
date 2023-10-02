const shortestDistance = (wordDict, word1, word2) => {
    const shortestDistance = wordDict.lastIndexOf(word2) - wordDict.lastIndexOf(word1);
    return shortestDistance
}
console.log(shortestDistance(["apple", "banana", "cherry", "apple", "date", "banana", "fig"], "apple", "fig"));