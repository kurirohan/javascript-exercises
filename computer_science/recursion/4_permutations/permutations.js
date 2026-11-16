const permutations = function(arr) {
  if (arr.length === 0) return [[]];

  if (arr.length === 1) return [arr];

  const result = [];

  for (const num of arr) {
    const rest = arr.filter(n => n !== num);
    for (const p of permutations(rest)) {
        result.push([num, ...p]);
    }
  }
  return result;
};
  
// Do not edit below this line
module.exports = permutations;
