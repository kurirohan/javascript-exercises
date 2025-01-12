const removeFromArray = function() {
    let lst = arguments[0];

    for (let i = 1; i < arguments.length; i++) {
        // Use while loops so that we can force index 
        // to only go up if elements
        // don't match
        let j = 0;

        while (j < lst.length) {
            if (arguments[i] === lst[j]) {
                lst.splice(j, 1);
            } else {
                j++;
            }
        }
    }

    return lst;
};

// Do not edit below this line
module.exports = removeFromArray;
