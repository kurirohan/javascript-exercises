const palindromes = function (str) {
    let letters = str.replace(/[\W]/g, '');
    letters = letters.toLowerCase();

    let reversed = letters
                    .split("")
                    .reverse()
                    .join("");
    
    return letters == reversed ? true : false;
};

// console.log(palindromes('Animal loots foliated detail of stool lamina.'));
// console.log('Animal loots foliated detail of stool lamina.'
//     .toLowerCase()
//     .replace(/[\W]/g, ''));

// Do not edit below this line
module.exports = palindromes;
