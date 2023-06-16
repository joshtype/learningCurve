/**
 * BMI Calculator in Javascript.
 * @param  {number} weight in pounds
 * @param  {number} height in inches
 * @return {bmi + string}
 */

const bmi = function(pounds, inchesHigh) {
    // convert inches to feet to meters
    var meters = (inchesHigh / 12) * .3048;
    // calculate bmi with standard formula
    var bmi = (pounds * .453592) / (meters * meters);
    // round up to 2 decimal places 
    bmi = bmi.toFixed(2);

    // Return conditions
    if(bmi >= 30) {
        return "BMI = " + bmi + ": OBESE";
    } else if(bmi < 30 && bmi >= 25) {
        return "BMI = " + bmi + ": OVERWEIGHT";
    } else if(bmi < 25 && bmi >= 18.5) {
        return "BMI = " + bmi + ": HEALTHY WEIGHT";
    } else {
        return "BMI = " + bmi + ": UNDERWEIGHT";
    }
};
