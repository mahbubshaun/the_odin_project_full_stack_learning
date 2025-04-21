//What differences are there between object constructors and classes? in js

function Person(name, age){
    this.name = name;
    this.age = age;
}

const person1 = new Person('John', '15');

console.log(person1.name);

class PersonClass{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const personClassExample = new PersonClass('Alice', '25');

console.log(personClassExample.name);


//What are getters and setters?
class PersonWithGettersSetters{
    constructor(name)
    {
        this._name = name; //private property
    }

    //getter
    get name()
    {
        return this._name;
    }

    //setter
    set name(newName){
        if (newName.length > 0)
        {
            this._name = newName;
        }
        else{
            console.log('Name cant be empty');
        }
        
    }

}

const personWgS = new PersonWithGettersSetters('John');
console.log(personWgS.name); // John
personWgS.name = 'John Doe';
console.log(personWgS.name)

personWgS.name = '';