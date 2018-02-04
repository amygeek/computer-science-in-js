class Vehicle {

    constructor (name, type) {
        this.name = name;
        this.type = type;
    }

    getName () {
        return this.name;
    }

    getType () {
        return this.type;
    }

}

class Car extends Vehicle {

    constructor (name) {
        super(name, 'car');
    }

    getName () {
        return 'It is a car: ' + super.getName();
    }

}
let car = new Car('Tesla');
console.log(car.getName()); // It is a car: Tesla
console.log(car.getType()); // car

class Car2 {
    constructor (name) {
        this._name = name;
    }

    set name (name) {
        this._name = name;
    }

    get name () {
        return this._name;
    }
}

let car2 = new Car2( "BMW ");
console.log(car2.name)

car2.name = "Ferrari";
console.log(car2.name);