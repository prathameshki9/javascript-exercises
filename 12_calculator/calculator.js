const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
	let sum = 0;
  array.forEach((item) => {
    sum += item;
  })

  return sum;
};

const multiply = function(array) {
	let ans = array[0];
  for (let i=1; i<array.length; i++) {
    ans *= array[i];
  }

  return ans;
};

const power = function(num1, num2) {
  let ans = num1;
	for (let i=0; i<num2-1; i++) {
    ans *= num1;
  }
  return ans;
};

const factorial = function(num) {
	let ans = 1;
  for (let i=num; i>0; i--) {
    ans *= i;
  }
  return ans;
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
