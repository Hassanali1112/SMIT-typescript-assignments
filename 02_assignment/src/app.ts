// question 01
interface User {
  id : number,
  name : string,
  email : string,
  isActive : boolean
}

let createUser = (user : User)=>{
  return user;
}
 
let user : User = {
  id : 255799,
  name : "Hassan Ali",
  email : "hassan@gmail.com",
  isActive : true,
}

// console.log(createUser(user))

// question 02

type Input = string | number;

const processInput = (input : Input)=>{
  if(typeof input === "number"){
    return `number ${String(input)}`;
  } else {
    return `string ${input}`
  }
}

// console.log(processInput(255799))

// question 03

class Vehical {
  make : string;
  model : string;
  year : number;

  constructor (m : string, mo : string, y : number){
    this.make = m;
    this.model = mo;
    this.year = y;
  }

   getInfo () : string{
    return ` Make is ${this.make}, model is ${this.model} and year of lanunch is ${this.year} `
  }
}
let vehical1 = new Vehical("Toyota", "Camry", 2020);
// console.log(vehical1.getInfo())

class Car extends Vehical {
  doors : number
  constructor (make : string, model : string , year : number, d : number){
    super(make = make , model = model, year = year)
    this.doors = d
  
  }
getInfo () : string {
  return `${super.getInfo()} with ${this.doors} doors`
}
}
let car1 = new Car("Toyota", "Camry", 2020, 4)

// console.log(car1.getInfo())

class Motercycle extends Vehical {
  hasSideCar : boolean;
  constructor(make : string, model : string , year : number, hasSideCar : boolean){
    super(make = make , model = model , year = year)
    this.hasSideCar = hasSideCar
  }

  getInfo() : string {
    return `${super.getInfo()} and has side car ${this.hasSideCar}`
  }
}

let moterCycle1 = new Motercycle("Honde", "CD70", 2018, true);

// console.log(moterCycle1.getInfo())

// Question 04 

class BankAccount {
  private balance : number;
  private readonly accountNumber :  string;
  constructor(balance : number, accountNumber : string){
    this.balance = balance,
    this.accountNumber = accountNumber;
  }

  get checkAccountBalance () : number {
    return this.balance;
  }

  get checkAccountNumber () : string {
    return this.accountNumber;
  }

   setBalance (amount : number) : number{
   return this.balance = this.balance + amount;
  }

  withdraw ( amount : number) : any {
    if(amount > this.balance){
      return `Sory you have insufficent balane to make ${amount} withdraw `
    } else{
      return `you have successfully withdraw ${amount}, you current balance is ${this.balance - amount}.00`
    }
  }
}

let newAccount = new BankAccount(5000,"877768799")

// console.log(newAccount.withdraw(4500))

// Question 05 

abstract class Shape {
  protected color : string;
  constructor(color : string){
    this.color = color;
  }

  abstract calculateArea () : void

  getColor () :string {
    return this.color;
  }
}

class Circle extends Shape {
  radius : number;

  constructor( radius : number, color : string){
    super(color)
    this.radius = radius
  }
  calculateArea() {
    return `the area of circle is ${2 * 3.142 * (this.radius **2)} `
    
  }
}

let circle = new Circle(5,"red")

console.log(circle.calculateArea())

class Rectangle extends Shape {
  width: number;
  height: number;

  constructor(width: number, height: number, color: string) {
    super(color);
    this.width = width;
    this.height = height;
  }

  calculateArea() {
    return `the area of rectangle is ${this.width * this.height}`
  }
}

let rectangle = new Rectangle(5,5,"orange")

console.log(rectangle.calculateArea())


// Question 06 

interface Product {
  id : number;
  name : string;
  price : number;
  category : string;
}

const createProduct = ( obj : Product) =>{
  return obj;
}

let product1 : Product ={
  id : 233,
  name : "cell phone",
  price : 50000,
  category : "electronics products"
}
// console.log(createProduct(product1));

// Question 07 

class Employee {
  name : string;
  salary : number;
  constructor (name : string, salary : number){
    this.name = name;
    this.salary = salary
  }

  getDetails (){
    return `The name of employee is ${this.name} and his/her salary is ${this.salary}`
  }
}

class Developer extends Employee {
  programmingLanguage : string;

  constructor(name : string, salary : number ,pl : string){
    super(name = name , salary= salary)
    this.programmingLanguage = pl;
  }

  getDetails() {
    return `${super.getDetails()} and he/she is a ${this.programmingLanguage} expert`
  }

}

class Designer extends Employee {
  toolUsed : string;
   
  constructor(name : string, salary : number , toolUsed : string){
    super(name = name , salary = salary);
    this.toolUsed = toolUsed;
  }

  getDetails (){
    return `${super.getDetails()} and he/she is a ${this.toolUsed} expert`
  }

}

let developer1 = new Developer("hassan ali",500000, "javascript")

// console.log(developer1.getDetails())

let designer1 = new Designer("hassan ali",500000, "figma")

// console.log(designer1.getDetails())

// question 08

class Student {
  public name : string;
  private grades : number[] = []
  protected school : string;
  readonly studentID : number;

  constructor(name : string, school : string, studentID : number){
    this.name = name;
    this.school = school;
    this.studentID = studentID;
  }

  set addGrades ( grade : number){
    this.grades.push(grade)
  }

  get getAverageGrade (){;
    let averageGrade= 0
    for(let i = 0; i< this.grades.length; i ++){
      averageGrade +=this.grades[i];
    }
    return (averageGrade / this.grades.length)
  }


}


let student1 = new Student("rohan", "al syed",344483)

student1.addGrades = 92
student1.addGrades = 63
student1.addGrades = 88

// console.log(student1.getAverageGrade)


// question 09

type ResponseData = {
  success : boolean;
  data : string;
  } 

type ResponseError = {
  success : boolean;
  error : string;
}  

type finalResponse = ResponseData | ResponseError

const handleResponse = (response : finalResponse) =>{
  if (response.success ){
   return response
  } else {
    return response
  }
}

let response = {
  success : false,
  data : "error"
}

console.log(handleResponse(response));

// question 10

abstract class Animal{
  protected species : string;

  constructor (species : string){
    this.species = species
  }

getSpecies (){
 return this.species
}

  abstract makeSound() : string
}


class Dog extends Animal {
  constructor (species : string){
    super(species = species)
  }
  makeSound(): string {
    return `Woof!`
  }
}

class Cat extends Animal {
  constructor(species: string) {
    super(species = species);
  }
  makeSound(): string {
    return `Meow!`;
  }
}

let dog1 = new Dog("dog")

console.log(dog1.makeSound())
console.log(dog1.getSpecies())

let cat1 = new Cat("cat")

console.log(cat1.makeSound())
console.log(cat1.getSpecies())

// question 11

// const findIndex = <T extends [] > ( arr  : T[], value : T) =>{
//   let newValue : number = value;
//   let index : number = arr.indexOf(newValue);
//   if(index)
// }


// queston 12

interface newCar {
  drive(): void
}


class CarClass implements newCar {
  drive(): string {
    return  `Driving a car!`
  }
}

interface newBike {
  ride(): void
}

class BikeClass implements newBike {
  ride(): string {
    return `Riding a bike!`
  }
}

const useVehicle = (vehicle : newCar | newBike)=>{
  if(vehicle instanceof CarClass){
    return vehicle.drive()
  } else if(vehicle instanceof BikeClass) {
    return vehicle.ride()
  }
  
}

let car : newCar = new CarClass()
console.log(useVehicle(car))

let bike : newBike = new BikeClass()
console.log(useVehicle(bike))

// question 13

interface Person {
  name : string;
  age : number;
}

interface EmployeeInterFace {
  jobTitle : string;
}

type FullTimeEmployee = Person & EmployeeInterFace;

const describeEmployee = (emp : FullTimeEmployee)=>{
  console.log(emp)
}

let fullTimeEmployee1 = {
  name : "John",
  age : 30,
  jobTitle : "Software Engineer"
}

describeEmployee(fullTimeEmployee1)

// question 14

interface NewDog {
  bark (): string
}

class DogClass implements NewDog {
 bark(): string {
  return "Woof!"
 } 
}


interface NewCat {
  meow (): string;
}

class CatClass implements NewCat {
  meow(): string {
    return "Meow!"
  }
}

const makeASound = (pet : CatClass | DogClass) => {
  if(pet instanceof CatClass) {
    return pet.meow()
  } else {
    return pet.bark()
  }
}

let cat = new CatClass ()

let dog = new DogClass()

console.log(makeASound(cat))
console.log(makeASound(dog))

// question 15

interface ShapeInterFace {
  calculateArea(): number;
  getType() : string
}

class NewCircle implements ShapeInterFace {
  radius : number
  constructor(radius : number){
    this.radius = radius
  }
  calculateArea(): number {
    return (2 * 3.146 * (this.radius **2))
   }
  getType(): string {
    return `Type of shape is Circle`
    
  }
}

let newCircle : ShapeInterFace = new NewCircle(2)

console.log(newCircle.calculateArea())
console.log(newCircle.getType())