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

//Observable

var obsv = Rx.Observable.fromEvent(btn, "click");
obsv.map(function mapper(evt) {
    return evt.target.className;
}).filter( function filterer( className ) {
    return /foobar/.test(className);
})
.distinctUntilChanged()
.subscribe( function(data) {
     var className = data[1];
    console.log(className);
});

const service = {
    getPeople: () => axio({ url: 'http://localhost:3000/people'}),
    getPlaces: () => axio({ url: 'http://localhost:3000/places'})
}

function example2() {
    let obj = {};
    service.getPeople().then( response => {
            obj.people = response.data;
            return service.getPlaces();
        }).then( response => {
            obj.places = response.data;
            console.log( "response: ", obj);
        }).catch( err => {
            console.log( err );
        })
}
async function example3() {
    try {

        const people = await service.getPeople();
        const places = await service.getPlaces();

        console.log("response: ", {
            people: people.data,
            places: places.data
        })
    } catch ( err ) {
        console.log( err );
    }
}

async function example3b() {
    try {
        const values = await Promise.all([ service.getPeople(), service.getPlaces()]);
        console.log('response: ', values.map( v => v.data));
    } catch ( err ) {
        console.log( err );
    }
}