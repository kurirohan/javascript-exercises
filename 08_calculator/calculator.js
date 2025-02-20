const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((accum, curr) => accum + curr, 0);
};

const multiply = function(arr) {
	return arr.reduce((accum, curr) => accum * curr, 1);
};

const power = function(num, pow) {
	let i = 0;
  let ret = 1;

  while (i < pow) {
    ret *= num;
    i++;
  }

  return ret;
};

const factorial = function(num) {
  let ret = 1;

	while (num >= 1) {
    ret *= num;
    num--;
  }

  return ret;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
