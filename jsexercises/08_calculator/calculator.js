const add = function(num1, num2) {
  return num1+num2;
	
};

const subtract = function(num1, num2) {
	return num1-num2;
};

const sum = function(arr) {

  const sumOfArr = arr.reduce((total, currentIndex)=>{
   return total + currentIndex;
  }, 0);
	return sumOfArr;
};

const multiply = function(arr) {
  const mulOfArr = arr.reduce((total, currentIndex)=>{
    return total * currentIndex;
   });
   return mulOfArr;
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (n) {
  if (n === 0) return 1;
  let product = 1;
  for (let i = n; i > 0; i--) {
    product *= i;
  }
  return product;
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
