import { Audi, Honda, Tesla, Toyota, Vehicle } from "./03-liskov-b";


(() => {

    const printCarSeats = (cars: Vehicle[]) => {

        cars.forEach( car =>{
            console.log( car.constructor.name, car.getNumberOfSeats() )
        })

    }

    const cars = [
        new Tesla(5),
        new Audi(6),
        new Toyota(2),
        new Honda(4),
    ]

    printCarSeats(cars);

})();