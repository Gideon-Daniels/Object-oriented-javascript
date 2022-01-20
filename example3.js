var vehicle = {};
vehicle.drive = function () {
    console.log('vroom');
};

var car = Object.create(vehicle);
car.honk = function() {
    console.log('honk honk');
};