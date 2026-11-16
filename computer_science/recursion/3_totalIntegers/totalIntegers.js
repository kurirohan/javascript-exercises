const myTotalIntegers = function(obj) {
    if (typeof obj !== 'object') return undefined;
    if (obj === null || obj.length <= 0 || Object.keys(obj).length <= 0) return 0;
    let total = 0;

    const values = Array.isArray(obj) ? obj : Object.values(obj);
    total += values.filter(item => Number.isInteger(item)).length;
    
    const iterables = values.filter(item => typeof item === 'object' && item !== null);
    iterables.forEach((v) => {
        total += totalIntegers(v);
    });

    return total;
};

const totalIntegers = function(obj) {
    function isObject(o) {
        return typeof o === 'object' && o !== null;
    }
    if (!isObject(obj)) return;
    let total = 0;
    const values = Object.values(obj);
    // NOTE: Object.values([...]) == [...]
    for (const v of values) {
        if (Number.isInteger(v)) {
            total += 1;
        } else if (isObject(v)){
            total += totalIntegers(v);
        }
    }
    return total;
}
  
// Do not edit below this line
module.exports = totalIntegers;
