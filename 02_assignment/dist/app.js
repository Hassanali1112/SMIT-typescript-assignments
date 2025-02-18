"use strict";
let createUser = (user) => {
    return user;
};
let user = {
    id: 255799,
    name: "Hassan Ali",
    email: "hassan@gmail.com",
    isActive: true,
};
console.log(createUser(user));
const processInput = (input) => {
    if (typeof input === "number") {
        return `number ${String(input)}`;
    }
    else {
        return `string ${input}`;
    }
};
console.log(processInput(255799));
// question 03
class Vehical {
    constructor(m, mo, y) {
        this.make = m;
        this.model = mo;
        this.year = y;
    }
    getInfo() {
        return ` Make is ${this.make}, model is ${this.model} and year of lanunch is ${this.year} `;
    }
}
let vehical1 = new Vehical("Toyota", "Camry", 2020);
console.log(vehical1.getInfo());
class Car extends Vehical {
    constructor(make, model, year, d) {
        super(make = make, model = model, year = year);
        this.doors = d;
    }
    getInfo() {
        return `${super.getInfo()} with ${this.doors} doors`;
    }
}
let car1 = new Car("Toyota", "Camry", 2020, 4);
console.log(car1.getInfo());
class Motercycle extends Vehical {
    constructor(make, model, year, hasSideCar) {
        super(make = make, model = model, year = year);
        this.hasSideCar = hasSideCar;
    }
    getInfo() {
        return `${super.getInfo()} and has side car ${this.hasSideCar}`;
    }
}
let moterCycle1 = new Motercycle("Honde", "CD70", 2018, true);
console.log(moterCycle1.getInfo());
//# sourceMappingURL=app.js.map