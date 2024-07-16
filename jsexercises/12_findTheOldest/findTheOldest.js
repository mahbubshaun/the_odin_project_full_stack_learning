const findTheOldest = function(arrObj) {

    const oldest = arrObj.reduce((total, current)=>
    {
        let yearsLived ;
        current.yearOfDeath ??= new Date().getFullYear();
        console.log(current.yearOfDeath);
        yearsLived = current.yearOfDeath - current.yearOfBirth;
        if (yearsLived > total)
            {

                total = yearsLived

            }
            console.log(total);
            console.log(current.name);
            return total;

    }, 0);

    let reqObj = arrObj.find(item =>  item.yearOfDeath - item.yearOfBirth === oldest);

    return reqObj;


};

// Do not edit below this line
module.exports = findTheOldest;
