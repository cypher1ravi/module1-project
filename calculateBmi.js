function calculateBMI(weight, height) {
    // Write your code here
    const bmi = weight / (height * height);
    //Replacing || with &&
    if (bmi < 18.5) {
        return "Underweight";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        return "Normal weight";
    } else if (bmi >= 25 && bmi < 29.9) {
        return "Overweight";
    } else {
        return "Obese";
    }
}
console.log(calculateBMI(82, 1.73));
// Do not modify the below lines
// module.exports = { calculateBMI };