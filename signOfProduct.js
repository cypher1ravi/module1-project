const signOfProduct = (nums) => {
    let product = 1
    for (let i = 0; i < nums.length; i++) {
        product *= nums[i]
    }
    console.log(product);
    if (product === 0) {
        return 0
    } else if (product < 0) {
        return -1
    } else {
        return 1
    }

}
console.log(signOfProduct([2, 3, -2]));