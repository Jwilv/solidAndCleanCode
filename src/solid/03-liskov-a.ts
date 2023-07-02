import { Audi, Honda, Tesla, Toyota } from "./03-liskov-b";


(() => {

    const printCarSeats = (cars: (Tesla | Audi | Toyota | Honda)[]) => {

        for (const car of cars) {

            if (car instanceof Tesla) {
                console.log('tesla', car.getNumberOfTeslaSeats())
                continue;
            }

            if (car instanceof Audi) {
                console.log('Audi', car.getNumberOfAudiSeats())
                continue;
            }

            if (car instanceof Toyota) {
                console.log('Toyota', car.getNumberOfToyotaSeats())
                continue;
            }

            if (car instanceof Honda) {
                console.log('Honda', car.getNumberOfHondaSeats())
                continue;
            }

        }

    }

    const cars = [
        new Tesla(5),
        new Audi(6),
        new Toyota(2),
        new Honda(4),
    ]

    printCarSeats(cars);

})();