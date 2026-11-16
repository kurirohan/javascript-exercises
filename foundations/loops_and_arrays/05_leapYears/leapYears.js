const leapYears = function(year) {
    if (!Number.isInteger(year)) {
        return "ERROR";
    }

    if (year % 4 == 0) {
        if (year % 100 == 0) { // Check first if divisible by 100
            if (year % 400 == 0) { // Need to be divisible by 400 for it to be a leap year
                return true;
            }
            return false // If it is, then it's not a leap year
        } 
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
