const reverseString = function(word) {
    let chars = Array.from(word);
    chars.reverse();

    let ret = "";
    for (const char of chars) {
        ret += char;
    }

    return ret;
};

// Do not edit below this line
module.exports = reverseString;
