function Vehicle(name, speed, x, y) {
    this.name = name;
    this.speed = speed;
    this.x = x;
    this.y = y;
}

Vehicle.prototype.move = function(x, y) {
    this.x = x;
    this.y = y;
}


function Car(name, speed, x, y, horsePower) {
    Vehicle.call(this, name, speed, x, y);
    this.horsePower = horsePower;
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.constructor = Car;

Car.prototype.beep = function() {
    console.log("Биииииип");
}


const myCar = new Car("Мой автомобиль", 200, 0, 0, 300);
myCar.move(10, 20);
myCar.beep();

console.log(myCar);