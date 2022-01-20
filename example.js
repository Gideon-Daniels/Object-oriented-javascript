var Car = function () {};

Car.prototype.honk = function () {
  console.log("honk honk");
};

var myCar1 = new Car();
var myCar2 = new Car();

myCar2.honk = function() {
    console.log('meep meep');
}

console.log(myCar1.honk());
console.log(myCar2.honk());

Car.prototype.honk = function() {
    console.log('meep meep');
};

console.log(myCar1.honk());
console.log(myCar2.honk());

Car.prototype.drive = function(){
    console.log('vroom...');
}

console.log(myCar1.drive())
console.log(myCar2.drive())
