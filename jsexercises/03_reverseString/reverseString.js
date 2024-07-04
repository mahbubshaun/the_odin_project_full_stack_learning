const reverseString = function(string) {
    let reversed_string = '';
    let i=string.length-1;
    console.log(i);
    for( i; i >0 ; i--)
        {
            reversed_string = reversed_string + string[i];
            console.log(reversed_string);

        }

        console.log(reversed_string);

        return reversed_string + string[0];

};

// Do not edit below this line
module.exports = reverseString;
