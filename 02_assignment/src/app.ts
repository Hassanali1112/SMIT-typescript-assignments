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

console.log(createUser(user))

// question 02

type Input = string | number;

const processInput = (input : Input)=>{
  if(typeof input === "number"){
    return `number ${String(input)}`;
  } else {
    return `string ${input}`
  }
}

console.log(processInput(255799))

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
console.log(vehical1.getInfo())

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

console.log(car1.getInfo())

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

console.log(moterCycle1.getInfo())

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

console.log(newAccount.withdraw(4500))

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
    return `the area of circle is `
    
  }
}

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
console.log(createProduct(product1));

