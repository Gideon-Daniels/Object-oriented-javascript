var Vechicle = function() {};

Vechicle.prototype.drive = function() {
    console.log('vroom...');
};

var Car = function() {};

Car.prototype = new Vechicle();

Car.prototype.honk = function() {
    console.log('honk honk');
};

var myCar = new Car();

myCar.honk();
myCar.drive();
