const sumAll = function(firstParameter, secondParameter) {
    let sum = 0;
    if (!Number.isInteger(firstParameter) || !Number.isInteger(secondParameter)) return "ERROR";
    if (firstParameter < 0 || secondParameter < 0) return "ERROR";
    if (firstParameter > secondParameter) {
        const temp = firstParameter;
        firstParameter = secondParameter;
        secondParameter = temp;
      }
    for (firstParameter; firstParameter <= secondParameter; firstParameter++) {
        sum = sum + firstParameter;
        
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
