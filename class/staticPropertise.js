class Car{
    static wheels = 4;

    constructor(brand){
        this.brand = brand;
    }

    static info()
    {
        console.log(`All cars usually have ${Car.wheels} wheels.`);

    }
}

const myCar = new Car('Toyota');

console.log(Car.wheels);
console.log(myCar.wheels);
Car.info();