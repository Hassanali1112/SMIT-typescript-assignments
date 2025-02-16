"use strict";
// question 01
const createUser = (user) => {
    return user;
};
let user1 = {
    id: 255799,
    name: "Hassan Ali",
    email: "dev.hassanali63@gmail.com",
    isActive: true,
};
console.log(createUser(user1));
const processorInput = (data) => {
    if (typeof data === "number") {
        return data = "Number  " + data.toString();
    }
    else if (typeof data === "string") {
        return "string  " + data;
    }
};
console.log(processorInput(255799));
// question 03
class Vehicle {
    constructor(m, mo, y) {
        this.make = m;
        this.model = mo;
        this.year = y;
    }
    getInfo() {
        return `Make: ${this.make} , Model: ${this.model} , Year: ${this.year}`;
    }
}
class Car extends Vehicle {
    constructor(make, model, year, doors) {
        super(make = make, model = model, year = year);
        this.doors = doors;
    }
    setCarInfo(item) {
        return this.doors = item;
    }
}
let car1 = new Car("Toyota", "Camry", 2020, 4);
console.log(car1);
class Motercycle extends Vehicle {
    constructor(make, model, year, hasSideCar) {
        super((make = make), (model = model), (year = year));
        this.hasSidecar = hasSideCar;
    }
    setMotercycleInfo(item) {
        return this.hasSidecar = item;
    }
}
let motercycle1 = new Motercycle("Honda", "CBR500R", 2020, true);
console.log(motercycle1);
