function calculateTip(billAmount, tipPercentage) {
    // Replacing number With Number
    const tipAmount = billAmount * tipPercentage;

    const totalAmount = billAmount + tipAmount;

    return Number(totalAmount.toFixed(2));
}
console.log(calculateTip(60.75, 0.25));
