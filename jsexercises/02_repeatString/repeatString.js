const repeatString = function (stringToRepeat, number) {
    let finalString = '';
    for (let i = 0; i < number; i++) {
        finalString = finalString + stringToRepeat;

    }

    console.log(finalString);

    return finalString;

};

// Do not edit below this line
module.exports = repeatString;
