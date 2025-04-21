class Animal{
    constructor(name)
    {
        this.name = name;
    }

    born()
    {
        console.log(`${this.name} is born.`);
    }
    speak(){
        console.log(`${this.name} makes a noise.`);
    }


}

class Dog extends Animal{
    constructor(name, breed)
    {
        super(name);
        this.breed = breed;
    }

    speak()
    {
        console.log(`${this.name} barks.`);
    }
}

const dog = new Dog('Buddy', 'Labrador');
dog.born();
dog.speak();

class Puppy extends Dog{
    constructor(name, breed, age)
    {
        super(name, breed);
        this.age = age;
    }

    speak()
    {
        console.log(`${this.name} is a ${this.age}-month-old puppy!`);
    }
}

const puppy = new Puppy('Max', 'Beagle', '3');
puppy.born();
puppy.speak();