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
const processInput = (input) => {
    if (typeof input === "number") {
        return `number ${String(input)}`;
    }
    else {
        return `string ${input}`;
    }
};
// console.log(processInput(255799))
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
// console.log(vehical1.getInfo())
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
// console.log(car1.getInfo())
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
// console.log(moterCycle1.getInfo())
// Question 04 
class BankAccount {
    constructor(balance, accountNumber) {
        this.balance = balance,
            this.accountNumber = accountNumber;
    }
    get checkAccountBalance() {
        return this.balance;
    }
    get checkAccountNumber() {
        return this.accountNumber;
    }
    setBalance(amount) {
        return this.balance = this.balance + amount;
    }
    withdraw(amount) {
        if (amount > this.balance) {
            return `Sory you have insufficent balane to make ${amount} withdraw `;
        }
        else {
            return `you have successfully withdraw ${amount}, you current balance is ${this.balance - amount}.00`;
        }
    }
}
let newAccount = new BankAccount(5000, "877768799");
// console.log(newAccount.withdraw(4500))
// Question 05 
class Shape {
    constructor(color) {
        this.color = color;
    }
    getColor() {
        return this.color;
    }
}
class Circle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    calculateArea() {
        return `the area of circle is ${2 * 3.142 * (this.radius ** 2)} `;
    }
}
let circle = new Circle(5, "red");
console.log(circle.calculateArea());
class Rectangle extends Shape {
    constructor(width, height, color) {
        super(color);
        this.width = width;
        this.height = height;
    }
    calculateArea() {
        return `the area of rectangle is ${this.width * this.height}`;
    }
}
let rectangle = new Rectangle(5, 5, "orange");
console.log(rectangle.calculateArea());
const createProduct = (obj) => {
    return obj;
};
let product1 = {
    id: 233,
    name: "cell phone",
    price: 50000,
    category: "electronics products"
};
// console.log(createProduct(product1));
// Question 07 
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    getDetails() {
        return `The name of employee is ${this.name} and his/her salary is ${this.salary}`;
    }
}
class Developer extends Employee {
    constructor(name, salary, pl) {
        super(name = name, salary = salary);
        this.programmingLanguage = pl;
    }
    getDetails() {
        return `${super.getDetails()} and he/she is a ${this.programmingLanguage} expert`;
    }
}
class Designer extends Employee {
    constructor(name, salary, toolUsed) {
        super(name = name, salary = salary);
        this.toolUsed = toolUsed;
    }
    getDetails() {
        return `${super.getDetails()} and he/she is a ${this.toolUsed} expert`;
    }
}
let developer1 = new Developer("hassan ali", 500000, "javascript");
// console.log(developer1.getDetails())
let designer1 = new Designer("hassan ali", 500000, "figma");
// console.log(designer1.getDetails())
// question 08
class Student {
    constructor(name, school, studentID) {
        this.grades = [];
        this.name = name;
        this.school = school;
        this.studentID = studentID;
    }
    set addGrades(grade) {
        this.grades.push(grade);
    }
    get getAverageGrade() {
        ;
        let averageGrade = 0;
        for (let i = 0; i < this.grades.length; i++) {
            averageGrade += this.grades[i];
        }
        return (averageGrade / this.grades.length);
    }
}
let student1 = new Student("rohan", "al syed", 344483);
student1.addGrades = 92;
student1.addGrades = 63;
student1.addGrades = 88;
const handleResponse = (response) => {
    if (response.success) {
        return response;
    }
    else {
        return response;
    }
};
let response = {
    success: false,
    data: "error"
};
console.log(handleResponse(response));
class Animal {
    constructor(species) {
        this.species = species;
    }
    getSpecies() {
        return this.species;
    }
}
class Dog extends Animal {
    constructor(species) {
        super(species = species);
    }
    makeSound() {
        return `Woof!`;
    }
}
class Cat extends Animal {
    constructor(species) {
        super(species = species);
    }
    makeSound() {
        return `Meow!`;
    }
}
let dog1 = new Dog("dog");
console.log(dog1.makeSound());
console.log(dog1.getSpecies());
let cat1 = new Cat("cat");
console.log(cat1.makeSound());
console.log(cat1.getSpecies());
//# sourceMappingURL=app.js.map