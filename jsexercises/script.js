

function add7(number)
{
    return number+7
}


function multiply(num1, num2)
{
    return num1 * num2;
}


function capitalize(string)
{

    let firtChar = string.at(0).toUpperCase();
    let remainingString = string.slice(1);
    let finalString = firtChar + remainingString;
    return finalString;

}

function lastLetter(string)
{
    return string.at(string.length - 1);
}
console.log(add7(10));

console.log(multiply(5, 5));

console.log(capitalize('string'));

console.log(lastLetter('string'));