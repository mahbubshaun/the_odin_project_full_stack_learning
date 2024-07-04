const removeFromArray = function(inputArray, ...args) {

    const newArray = [];

    inputArray.forEach(element => {

        if(!args.includes(element))
            {
                newArray.push(element);
            }
        
    });

   return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
