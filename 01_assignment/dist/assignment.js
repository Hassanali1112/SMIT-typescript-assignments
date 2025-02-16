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
// qusestion 04 
class BankAccount {
    constructor(b, accNo) {
        this.balance = b;
        this.accountNumber = accNo;
    }
    get checkBalance() {
        return this.balance;
    }
    get account() {
        return this.accountNumber;
    }
    set updateBalance(amount) {
        this.balance = this.balance + amount;
    }
    set withdraw(amount) {
        if (amount < this.balance) {
            this.balance = this.balance - amount;
        }
        else {
            console.log("insufficient balance");
        }
    }
}
let bankAccount1 = new BankAccount(1000, "1234567890");
bankAccount1.updateBalance = 500;
bankAccount1.withdraw = 2000;
console.log(bankAccount1);
// question 05
class Shape {
    constructor(n) {
        this.color = n;
    }
    get getColor() {
        return this.color;
    }
}
class Circle extends Shape {
    constructor(color, r) {
        super(color = color);
        this.radius = r;
    }
    calculateArea(n) {
        return this.radius = n;
    }
}
class Rectangle extends Shape {
    constructor(color, w, h) {
        super((color = color));
        this.width = w;
        this.height = h;
    }
    calculateArea(w, h) {
        this.height = w;
        this.width = h;
        return this.width * this.height;
    }
}
let rectangle1 = new Rectangle("green", 10, 20);
console.log(rectangle1.calculateArea(3, 5));
