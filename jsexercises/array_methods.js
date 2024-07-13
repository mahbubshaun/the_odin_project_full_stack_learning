const user = {

}

user.name = 'John';
user.surname = 'Smith';

user.name = 'Pete';
delete user.name;

console.log(user);


function isEmpty(obj) {

    console.log(obj);
    for (let key in obj) {
        // if the loop has started, there is a property
        return false;
    }
    return true;
}

let schedule = {};

console.log(isEmpty(schedule)); // true


let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}

let sum = 0;
for (salary in salaries) {
    console.log(salary);
    sum += salaries[salary];

}

console.log(sum);


let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

//   multiplyNumeric(menu);

//   // after the call
//   menu = {
//     width: 400,
//     height: 600,
//     title: "My menu"
//   };

console.log(typeof menu.width);

function multiplyNumeric(menu) {
    for (item in menu) {
        if (typeof menu[item] === 'number') {
            menu[item] = menu[item] * 2;
        }
    }


}
multiplyNumeric(menu);
console.log(menu);



function sumOfTripledEvens(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        // Step 1: If the element is an even number
        if (array[i] % 2 === 0) {
            // Step 2: Multiply this number by three
            const tripleEvenNumber = array[i] * 3;

            // Step 3: Add the new number to the total
            sum += tripleEvenNumber;
        }
    }
    return sum;
}

function addOne(num) {
    return num + 2;
}
const arr = [1, 2, 3, 4, 5];
//   const mappedArr = arr.map(addOne);
const mappedArr = arr.map(num => num + 1);
console.log(mappedArr); // Outputs [2, 3, 4, 5, 6]

console.log(arr); // Outputs [1, 2, 3, 4, 5]

function isOdd(num) {
    return num % 2 != 0;
}

const filteredArr = arr.filter(isOdd);

console.log(filteredArr);

// const productOfAllNums = arr.reduce((total, currentItem) => {
//     return total + currentItem;
// }, 5);

function sumOfAll(total, current)
{
    return total + current;
}

function sumOfTripledEvens(array)
{
    const trippledArr = array.map(num => num *3);
    const evenArr = trippledArr.filter(num => num%2 == 0);

    const sumOfEvenArr = evenArr.reduce((total, curr) =>
    {
        return total + curr;

    },0);
    console.log(evenArr);
    return sumOfEvenArr;
}

const productOfAllNums = arr.reduce((total, current) => {
    return total + current;

}, 5);

console.log(arr);
console.log(sumOfTripledEvens(arr));
// console.log(productOfAllNums); // Outputs 120;
// console.log(arr); // Outputs [1, 2, 3, 4, 5]