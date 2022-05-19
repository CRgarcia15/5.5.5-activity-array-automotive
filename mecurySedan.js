//this includes the vehicle class as a module
const VehicleModule = require("./vehicle").vehichle

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor(make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maxPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
    }

//passenger loading 
    loadPassenger(num) {

        let pass = 0;

        while(pass < this.maxPassengers){
            if (this.passenger < this.maxPassengers) {
                console.log('There is still room')
            }
                else {
                    console.log('Your Vehicle is full')
                }
            pass++;
        }
    }

//start engine
    start() {
        if (this.fuel > 0) {
            console.log("Your vehicle has started!");
            return start == true;
        }
        else {
            console.log("You don't have enough gas!")
            return start == false;
        }
    }

//service scheduling 
    scheduleService(mileage) {
        if (mileage > 3000) {
            console.log("You need service!")
           return maintanence == true;
        }
         else {
             console.log("You don't need service")
             return maintanence == false
         }
    }
}