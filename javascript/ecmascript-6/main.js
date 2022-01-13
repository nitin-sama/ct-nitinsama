// ---------- ES6 ----------

// var keyword --------
// When you declare a variable inside a function, the scope of the variable is local.

// let keyword ---------
// scope is block
// let keyword can't be redeclared but can be redefined
let counter = 0;
// let counter = 0; this will give error because you can't redeclared a let
counter = 5; // but can be redefined
console.log(counter); // 5
let b = 20;
console.log(window.b); // this will give output undefined
{
  // console.log(counter1);
  // let counter1 = 10; this will give ReferenceError
}
// let keyword does get hoist, but JS engine does not initialize its value, that's why it get ReferenceError
console.log(" ");

// const keyword ---------
// let and const are both blocked-scope variables, but const keyword can't be redefined
const RATE = 0.1;
console.log(RATE);
// RATE = 0.2; // TypeError
// const RED; // SyntaxError
// Above code will give syntaxerror because const must be initialized
const som = 5;
{
  const som = 10;
}
console.log(som); // 5 because const has block scope
// but we can reassign the value inside of const object
const person = {
  age: 20,
};
person.age = 30; // OK
console.log(person.age); // 30
// person = { age : 30}; TypeError cause const objects can't be redeclared
console.log("");

// setting default parameter ---------
function say(message) {
  message = typeof message !== "undefined" ? message : "Hi default!";
  console.log(message);
}
say();
console.log("");

// rest parameter ---------
function fn(a, b, ...args) {
  console.log(a + " " + b + " " + args); // 1 2 [3,A,B,C]
  // first two parameters will be stored in a and b and rest will stored in args
}
fn(1, 2, 3, "A", "B", "C");
console.log("");

// spread operator ----------
// The spread operator allows you to spread out elements of an iterable object such as an array,a  map, or a set.
const number = [4, 5, 6];
const sequence = [1, 2, 3, ...number]; // [1, 2, 3, 4, 5, 6]
console.log(sequence);
console.log("");

// for…of Loop ----------
let scores = [80, 90, 70];
for (let score of scores) {
  console.log(score);
}
console.log("");

// Octal literal ----------
let a = 0o51; //start with 0o
console.log(a); //41
// using 'use strict' can avoid you to write wrong octal literal and will throw error
console.log("");

// Binary literal ----------
let f = 0b111; //start with 0b
console.log(f); // 7
console.log("");

// Template Literals --------
const someText = `My
name
is
Nitin Thakur`; //will print this in this format only
console.log(someText);
console.log("");
let firstName = "Nitin",
  lastName = "Thakur";
let greeting = `Hi ${firstName}, ${lastName}`; //no need to use plus signs
console.log(greeting); // Hi Nitin, Thakur
console.log("");

// forEach helper ------------
const colors = ["red", "green", "yellow"];
colors.forEach(function (color, index) {
  console.log(`Color at ${index} position: ${color}`);
});

// map helper ------------
var numbers = [1, 2, 3];
var doubledNumbers = numbers.map(function (number) {
  return number * 2;
});
console.log(doubledNumbers);
console.log("");
var trips = [
  { distance: 34, time: 10 },
  { distance: 90, time: 50 },
  { distance: 59, time: 25 },
];
var speeds = trips.map(function (trip) {
  return trip.distance / trip.time;
});
console.log(speeds);
console.log("");

// filter helper ----------
var products = [
  { product: "Apple", type: "fruit" },
  { product: "Orange", type: "fruit" },
  { product: "Banana", type: "fruit" },
  { product: "Potato", type: "vegetable" },
  { product: "Bhindi", type: "vegetable" },
  { product: "Gajar", type: "vegetable" },
];
var filteredProduct = [];
// for if loop implementaion
for (let product of products) {
  console.log(product);
  if (product.type === "fruit") {
    filteredProduct.push(product);
  }
}
console.log("");
console.log("Filtering out prdoucts according to their type.");
for (let product of filteredProduct) {
  console.log(product.product);
}
console.log("");

// using filter
console.log("Filtering using filter helper.");
const result = products.filter(function (product) {
  return product.type === "vegetable";
});
for (let product of result) {
  console.log(product.product);
}
console.log("");

// find filter --------
var person2 = [
  { name: "Nitin" },
  { name: "Jill" },
  { name: "Jack" },
  { name: "John" },
];
console.log(person2);
// for loop implementaion
for (let single of person2) {
  if (single.name === "Nitin") {
    console.log(single.name);
    break;
  }
}
// using filter helper
console.log("Using filter function: ");
const user = person2.find(function (user) {
  return user.name === "Jill";
});
console.log(user.name);
console.log("");

// reduce helper ---------
// The reduce() method executes a user-supplied “reducer” callback function on each element of the array, passing in the return value from the calculation on the preceding element. The final result of running the reducer across all elements of the array is a single value.
var digits = [10, 20, 30];
var sum = 0;
const sumOfDigits = digits.reduce(function (digit, sum) {
  return (sum = sum + digit);
}, 0); // initial value can be passed here example 1000 so output would be 1060
console.log(sumOfDigits); // 60
console.log("");

// Arrow function ----------
// It allows you to create functions in a cleaner way compared to regular functions.
// syntax
const add = (a, b) => {
  // fat arrow function
  return `Adding two numbers in arrow function: ${a + b}`;
};
console.log(add(3, 4));
// can be even shorter by removing return and curly braces
const add2 = (a, b) => `Much shorter arrow function: ${a + b}`;
console.log(add2(13, 14));
// we can even omit the parenthesis around arguments when there is only single argument
console.log("");

// default function arguments ----------
function makeAjaxRequest(url, method = "GET") {
  //if second argument is not passed method will be GET by default
  console.log("Url is: " + url);
  console.log("Method is: " + method);
}
makeAjaxRequest("www.google.com");
makeAjaxRequest("www.google.com", "POST");
console.log("");

// Destructuring------------
// object
const expense = {
  money: "23$",
  task: "Mining",
};
const { money, task } = expense;
console.log(money + " " + task);
// array
const vehicles = ["mustang", "f-150", "expedition"];
const [car, truck, suv] = vehicles;
console.log(car + " " + truck + " " + suv);
// destructring in arguments
function getExpense({ money, task }) {
  console.log(money + " " + task);
}
getExpense(expense);
console.log("");

// Classes -----------
function Car(options) {
  this.title = options.title;
}
Car.prototype.drive = function () {
  return "Vroom!";
};
const cars = new Car({ title: "Maruti" });
console.log(cars.title);
console.log(cars.drive());
console.log("");

// es6 class
class Vehicle {
  constructor({ title }) {
    this.title = title;
  }
  speed() {
    return "100mph";
  }
}
const vehicle = new Vehicle({ title: "Mahindra" });
console.log(vehicle);
console.log(vehicle.title);
console.log(vehicle.speed());
class Toyota extends Vehicle {
  constructor(options) {
    super(options);
    this.name = options.name;
    this.num = options.num;
  }
}
const toyota = new Toyota({ name: "Bolero", num: "2" });
console.log(toyota.num);
console.log(toyota.speed());
