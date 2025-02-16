// question 01

interface User {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
}

const createUser = (user: User) => {
  return user;
};

let user1: User = {
  id: 255799,
  name: "Hassan Ali",
  email: "dev.hassanali63@gmail.com",
  isActive: true,
};
console.log(createUser(user1));

// question 02

type input = number | string ;

const processorInput = (data : input ) =>{

  if (typeof data === "number" ){
   return data = "Number  " + data.toString();
  } else if(typeof data === "string"){
    return "string  " + data
  }
}

console.log(processorInput(255799))



// question 03

class Vehicle {
  make : string;
  model : string;
  year : number;
  constructor (m : string, mo : string, y: number){
    this.make = m;
    this.model = mo;
    this.year = y;
  }
  getInfo (){
    return `Make: ${this.make} , Model: ${this.model} , Year: ${this.year}`
}
}

class Car extends Vehicle {
  private doors : number;
  constructor(make : string, model : string, year : number , doors : number){
    super(make = make , model = model , year = year)
    this.doors = doors
  }
  setCarInfo (item : number){
    return this.doors = item
  }
}

let car1 = new Car("Toyota", "Camry", 2020, 4);
console.log(car1)

class Motercycle extends Vehicle {
  private hasSidecar: boolean;
  constructor(make: string, model: string, year: number, hasSideCar: boolean) {
    super((make = make), (model = model), (year = year));
    this.hasSidecar = hasSideCar;
  }
  setMotercycleInfo ( item : boolean){
    return this.hasSidecar = item
  }
}

let motercycle1 = new Motercycle("Honda", "CBR500R", 2020, true);
console.log(motercycle1)


// qusestion 04 

class BankAccount {
  private balance : number;
  readonly accountNumber : string;
  constructor(b : number, accNo : string){
    this.balance = b;
    this.accountNumber = accNo;
  }
  get checkBalance ( ){
    return this.balance
  }

  get account ( ){
    return this.accountNumber
  }

  set updateBalance (amount : number){
    this.balance = this.balance + amount;
  }
  set withdraw (amount : number){
    if (amount < this.balance){
      this.balance = this.balance - amount
    } else{
      console.log("insufficient balance")
    }
  }
}

let bankAccount1 = new BankAccount(1000, "1234567890");
bankAccount1.updateBalance = 500;
bankAccount1.withdraw = 2000;
console.log(bankAccount1)

// question 05

abstract class Shape {
  protected color : string;
  constructor(n : string){
    this.color = n;
  }
  abstract calculateArea(w :number, h : number): void

  get getColor (){
    return this.color
  }

}
class Circle extends Shape {
  radius : number;
  constructor(color : string , r : number){
    super(color = color);
    this.radius = r;
  }


  calculateArea(n : number ){
    return this.radius = n;
  }
}

class Rectangle extends Shape {
  width: number;
  height : number;
  constructor(color: string, w: number , h : number) {
    super((color = color));
    this.width = w;
    this.height = h;
  }

  calculateArea(w: number , h : number) {
     this.height = w;
     this.width = h;
     return this.width * this.height;
  }
}

let rectangle1 = new Rectangle ("green", 10, 20);

console.log(rectangle1.calculateArea(3,5))