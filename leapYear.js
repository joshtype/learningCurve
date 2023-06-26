/** 
 * Leap Year Calculator in Javascript.
 * Leap years are always divisible by 4,
 * but not by 100 except when also by 400.
 *
 * Function returns true if year argument meets
 * all conditions to be a leap year, else false.
 * @param  {number} year to check
 * @return {boolean}
 */

const leapYearChecker = function(year) {
    // STEP 0: check if year meets conditions
    if(year % 4 == 0) {
        // STEP 1: if conditions all met
        if(year % 100 == 0 && year % 400 == 0) {
            // year is a leap year
            return true;
        } 
    // STEP 2: if conditions not met
    } else {
        // year is not a leap year
        return false;
    }
};

// STEP 3: define test parameters
var year1 = 1997;
var year2 = 2000;

// STEP 4: invoke function to test
console.log("1997 = leap year: " + leapYearChecker(year1));
console.log("2000 = leap year: " + leapYearChecker(year2));