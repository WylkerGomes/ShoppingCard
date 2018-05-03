console.log("Example with literal object");

// Define a car object using plain literal object.
// We define 2 properties (brand, speed) and
// 3 methods (accelerate, brake, describe)

//let ford = {
//    // properties
//    car: "Ford",
//    brand: "new",
//    speed: 80,
//    engine: "Turbo"
//
//    // methods:
//
//};
//
//let fiat = {
//    car: "Fiat",
//    brand: "multipla",
//    speed: 50,
//    engine: "TwinAir Turbo I2"
//
//};
//
//let audi = {
//    car: "Audi",
//    brand: "A4",
//    speed: 200,
//    engine: "V6 petrol engine"
//
//};
//
//let ferrari = {
//    car: "Ferrari",
//    brand: "458",
//    speed: 300,
//    engine: "rocket engine"
//
//};





//vehicle(audi);


function createVehicle(car, brand, model, engine) {

       // console.log( "The car name is "  + carType.car +  " the model is " + carType.brand + " running at " + carType.speed );


    let vehicle = {

        car: car,
        brand: brand,
        model: model,
        speed: 0,
        engine: engine,
        

        accelerate: function (inc) {
        this.speed += inc;
    },

        brake: function (dec) {
            this.speed -= dec;
        },

            status: function () {
                return this.car + " model "+ this.model + " running at " +  this.speed + " km/h" + ", " + this.engine + " engine " + " with the brand " + this.brand;
            }

};

return vehicle;
  
    
}


let vehicle = createVehicle("audi", "A4", "compact", "V6 petrol");

console.log(vehicle.status());
vehicle.accelerate(50);
console.log(vehicle.status());








// Try methods

//console.log(car.status());
//car.accelerate(50);
//console.log(car.status());
//car.accelerate(100);
//console.log(car.status());
//car.brake(25);
//console.log(car.status());


// But now if we want another car we need to repeat the code...
// That's unnecessary repetition.
// https://en.wikipedia.org/wiki/Don%27t_repeat_yourself

//var car2 = {
//
//    brand: "Ferrari",
//    speed: 0,
//
//    accelerate: function (inc) {
//        this.speed += inc;
//    },
//
//    brake: function (dec) {
//        this.speed -= dec;
//    },
//
//    status: function () {
//        return this.brand + " running at " + this.speed + " km/h";
//    }
//};
//
//car2.accelerate(200);
//console.log(car2.status());


// See main2.js for a solution (define a function)
