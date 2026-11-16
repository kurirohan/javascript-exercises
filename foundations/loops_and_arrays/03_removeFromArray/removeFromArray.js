// const removeFromArray = function() {
//     let lst = arguments[0];

//     for (let i = 1; i < arguments.length; i++) {
//         // Use while loops so that we can force index 
//         // to only go up if elements
//         // don't match
//         let j = 0;

//         while (j < lst.length) {
//             if (arguments[i] === lst[j]) {
//                 lst.splice(j, 1);
//             } else {
//                 j++;
//             }
//         }
//     }

//     return lst;
// };

const removeFromArray = function(arr, ...args) {
    let ret = []

    for (item of arr) {
        if (!args.includes(item)) { // If item is not in the "list of stuff to remove"
            ret.push(item) // Include it in filtered array
        }
    }

    return ret;
};

// Do not edit below this line
module.exports = removeFromArray;
