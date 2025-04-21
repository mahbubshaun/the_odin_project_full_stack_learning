class Person{
    #ssn;

    constructor(name, ssn)
    {
        this.name = name;
        this.#ssn = ssn;
    }

    getSSN()
    {

        return this.#ssn;
    }

    #changeSSN(newSSN)
    {
        this.#ssn = newSSN;
    }

    updateSSN(newSSN)
    {
        this.#changeSSN(newSSN);
    }


}

const p = new Person('John', '123-45-6789');
console.log(p.name);
console.log(p.getSSN());
// console.log(p.#ssn);
// console.log(p.#changeSSN('987-65-4321'));

console.log(p.updateSSN('987-65-4321'));
console.log(p.getSSN());