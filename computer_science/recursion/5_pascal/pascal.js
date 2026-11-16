const pascal = function(n) {
    if (n === 1) return [1];

    const ref = pascal(n - 1);
    let res = [];

    for (let i = 0; i < n; i++) {
        res[i] = (i - 1 < 0 ? 0 : ref[i - 1]) + (i >= ref.length ? 0 : ref[i]);
    }

    return res;
};
  
// Do not edit below this line
module.exports = pascal;
