const sumAll = function(a, b) {
    for (arg of arguments) {
        if (!Number.isInteger(arg) || arg < 0) {
            return "ERROR";
        }
    }

    let sum = 0;

    if (a < b) {
        for (let i = a; i <= b; i++) {
            sum += i;
        }
    } else {
        for (let i = a; i >= b; i--) {
            sum += i;
        }
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
