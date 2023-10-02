function arrayIntersection(arr1, arr2) {
    let newArr = []
    for (let i of arr1) {
        for (let j of arr2) {
            if (i === j) {

                newArr.push(j)

            }
        }
    }
    const uniqArr = new Set(newArr)
    return [...uniqArr]
}
console.log(arrayIntersection([1, 2, 2, 3, 4, 5], [2, 3, 3, 6]));