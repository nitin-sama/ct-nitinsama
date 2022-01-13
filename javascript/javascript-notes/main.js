
// Advanced Javascript

// --------- Overview starts here ----------  

// Global variable ----------
var a = "Hello world!"
// this can either be accesed by simply a or window.a in console
console.log(a)
console.log('')

// Calling a function ----------
function b(){
    console.log("Funciton named b!")
    console.log('')
}
b()
// If we call b from top, which is before creating the function most languages will give error but not javascript, it will run the function, this phenomenon is called hoisting, the default behavior of moving all the declarations at the top of the scope before code execution.

// Undefined ----------
var c; 
// This is undefined
console.log("C is " + c)
var c = "C is defined now!"
console.log(c)
var c = undefined
// We can set a variable to undefined meaning it was never defined
console.log("C variable has give value of " + c)
console.log('')

// Single threaded synchronus execution ----------
// Dealing with one command at a time, synchronus means 1 line of a code at a time, and in the order it appears, in javascript only one thing is happening at a time

// Function Invocation and the execution stack ----------
// Invocation means run the function or invoke the function, everytime a function is invoked a new exececution context is created and the function is put on the exectution stack, and the function starts executing line by line
// example
function x(){
    console.log("Function x is on top of execution stack and started executing line by line!")
    console.log("Function x is interrupted by function y!")
    y()
    console.log("Function x is now on top of the execution stack after completing execution of y!")
    console.log("Function x is finished!")
}

function y(){
    console.log("Function y is now on top of execution stack and started executing line by line!")
    console.log("Function y is finished, it will be removed from the execution stack!")
}
x()
console.log('')

// Function, context, scope chain and variable environments ----------
function e(){
    var myVar
    console.log(myVar)
    // This scope will have undefined
    f()
}
function d(){
    var myVar=2
    console.log(myVar)
    // This scope will have value 2
    e()
}
function f(){
    console.log(myVar)
    // This will give the value of global myVar
}
var myVar=1;
console.log(myVar)
// This is global scope which will have value 1
d()
console.log('')
// Each myVar variable are sitting in their own context with their own variable environment

// Scope, ES6 and let ----------
// scope is where the variable is available in your code, ecma script(es6) introduces let which has block scoping

// Asynchronous Callbacks ----------
// more than one at a time
// example
function waitThreeSeconds(){
    // change value in ms from 0 to 3000
    var ms = 0 + new Date().getTime();
    while(new Date() < ms){}
    console.log('Finished three seconds function!')
}
function clickHandler(){
    console.log('Click event!')
}
document.addEventListener('click', clickHandler)
waitThreeSeconds()
console.log('Finished execution!')
console.log('')
// This shows that the browser won't look at the event queue until execution stack is empty, that is first function waitThreeSeconds will finish its execution then the global scope of function ends and then events will begin

// --------- Overview ends here ----------  

// --------- Types and operators starts here ----------

//  Dynamic Typing ---------
// which means compiler knows what type of data you intend to put
var dynamicVariable = 1
console.log(typeof(dynamicVariable))
var dynamicVariable = 'Nitin!'
console.log(typeof(dynamicVariable))
console.log('')

// Primitive Types ---------
// A type of data that represents a single value
// 1. undefined - represents lack of existence(used by engine so leave it alone)
// 2. null - represents lack of existence(use this)
// 3. boolean - true or false
// 4. number - floating point number
// 5. string - sequence of character, can be used between double or single quotes
// 6. symbol(used in es6)

// Operators ----------
//  An operator is capable of manipulating a certain value or operand. Operators are used to perform specific mathematical and logical computations on operands. (+, -, *, /, %, ++, --, =, +=, -=, *=, /=, %=, ==, ===, !=, >, <, >=, <=, &&, ||, !, :?, typeOf)
var ab = 5 < 3
console.log(ab) // false
console.log('')

// Operator precedence and associativity ----------
// Operator precedence means which operator function gets called first when there are more than 1 operator are available, HIGHER PRECEDENCE WINS
// Associativity is what order functios get called in: left-to-right or right-to-left
// See complete list here https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence
var ac = 3 + 4 * 5; // 23 which means multiply has higher precedence
console.log(ac)
console.log('')

// Coercion ---------
// Converting a value from one type to another 
var a = 1 + '2'
console.log(a)
console.log(typeof(a))
console.log('')

// Comparision operators ----------
console.log(3 < 2 < 1) //this will give true because order of comparison is left to right so furst 3 < 2 will give false and after that false < 1 which will eventually give output true
console.log(3=='3') //true because value are same
console.log(3==='3') //false because their type are diffenet
console.log('')

// --------- Types and operators ends here ----------  

// ---------- Objects and functions starts here ----------

// Objects and the dot ---------- 
var person = new Object() //declaring object or we can do, var person = {}
person["firstname"] = "Nitin" 
person["lastname"] = "Thakur" 
console.log(person)
console.log(person["firstname"]) //manually getting a value
console.log(person.firstname) //using dot operator
person.address = new Object();
person.address.street = "9"
person.address.city = "New Delhi"
console.log(person.address.city) 
// Second way
var person2 = {
    firstname : "Nitin",
    lastname : "Thakur",
    address: {
        city : "Delhi" //object inside object
    },
    age: 23
}
// also the variable with same name in different object will not collide with each other because they are in their own scope 
console.log("My name is " + person2.firstname + " " + person2.lastname + ", I live in " + person2.address.city + ". " + "My age is " + person2.age)
console.log('')

//  JSON and Object Literals
// JSON stands for JavaScript Object Notation, it is used to send over the internet, example
var objectLiteral = {
    'name': 'Nitin Thakur',
    'post': 'Front-End Developer',
    'age' : 23,
    'country' : 'India'
}
console.log(objectLiteral)
// Converting an object to json
var objectLiteral2 = {
    name : 'Nitin Thakur',
    age : 23
}
console.log('Object parsed into json '+ JSON.stringify(objectLiteral2))
var jsonValue = JSON.parse('{"name" : "Nitin Thakur", "age" : 23}') //string
console.log(jsonValue) //gives json value
console.log('')

// Functions are objects ---------
// Functions can be attached to primitives, objects and functions
// Function doesn't always need to have a name
// Example
function greet(){
    console.log('I am a function!')
}
greet.language = 'I am added just like object!' //assigning properties to function just like objects
greet()
console.log(greet.language)
console.log('')
// assigning function to variable cause FUNCTIONS ARE OBJECTS
// varFunction() this will not work
// varFunction() can't be called before creating the function itself(which we can do with normal functions) because Javascript hoist the functions, but as soon as the JS sees var varFunction = .., it will assign the varFunction to undefined(because it will be treated as primitives), which will eventually give error stating function is undefined, so with this type of syntax always call variable function after creating the function
var varFunction = function(){
    console.log("I am in a function which is assigned to variable!")
}
varFunction()
console.log('')
// passing a function to a function
function log(a){
    // console.log(a) this will display the function which is passed
    a() // this will display the value presnet in the function which is passed to this function
}
log(function(){
    console.log("I am inside function, which is inside function!")
})
console.log('')

// By value vs by reference ---------
// by value
var a = 3
var b
// b = a this will create new value, that is, they are copy of each other
a = 22
console.log(a)
console.log(b)
// by reference
var c = {name: 'Nitin Thakur'}
var d
d = c //They aren't copy of each other, they are pointing to same spot in memory location
c.name = 'Saharsh'
console.log(c)
console.log(d) //it will also give same output as c because the value at memory location is changed, this is called mutation
console.log('')

// Objects, functions and 'this' ----------
// everytime a execution context is created this variable is created
console.log(this) // right now this represent global scope
function al(){
    this.globalVariable = "I am assigned using 'this'!"
}
al()
console.log(globalVariable)
console.log('')
// updating items using this
var obj = {
    fname: "Saharsh",
    func : function(){
        this.fname = "Nitin" // This will change the fname value of the object (mutating) 
        console.log(this)
    }
}
obj.func()
console.log('')

// Arrays - collection of anything ----------
// declaration
var arr = new Array();
// or
var arr = [];
arr = [1, 2, 3];
// in javascript array can contain any type of variable
var arr = [
    1,
    false,
    {
        name: 'Nitin',
        age: 23
    },
    function(){
        console.log("I am a function inside array!");
    },
    function(name){
        console.log("I am a function inside array which passes name! " + name);
    }
]
console.log(arr); // most programming language will give error not JS
arr[3](); // invoking function inside array
arr[4](arr[2].name); // passing name property in the array to the function present in array
// ARRAY CAN HOLD ANYTHING
console.log('');

// Immediately invoke function expression(IIFE) ----------
var invokingFunc = function(){
    console.log("I am self invoked!");
}();
console.log('');

// Closures ----------
function greeting(greet){
    return function(name){
        console.log(greet+ ' ' + name);
    }
}
greeting('Hye')('Nitin');
// or
var sayHye = greeting('Hye');
sayHye('Nitin'); // this will also out put Hye Nitin because of closures
// A closure is a function having access to the parent scope, even after the parent function has closed. 
// Even when the parent execution stack is completed, the initiaized values are still laying arond somwhere in the memory, so when JS come line console.log(greet+ ' ' + name); it will print Hye Nitin
function buildFunction(){
    var arr = [];
    for(var i=0; i<3; i++)
    {
        arr.push(function(){
            console.log(i)
        })
    }
    return arr;
}
var fs = buildFunction();
fs[0](); // 3
fs[1](); // 3
fs[2](); // 3
// These will output value 3 because when the execution stack of buildfunction ends the last value of i was 3
console.log('');
// solution
function buildFunction2(){
    var arr = [];
    for(var i=0; i<3; i++)
    {
        arr.push(
            (function(j){
            return function(){
                console.log(j);
            }
        }(i)) //immediately invoked function expression
        );
    }
    return arr;
}
var fs2 = buildFunction2();
fs2[0](); // 0
fs2[1](); // 1
fs2[2](); // 2
console.log('');
// using closures as function factories
function makeGreeting(language){
    return function(fname, lname){
        if(language == 'en'){
            console.log('Hello! ' + fname + ' ' + lname);
        }
        if(language == 'es'){
            console.log('Hola! ' + fname + ' ' + lname);
        }
    }
}
var langEng = makeGreeting('en');
var langSpan = makeGreeting('es');
langEng('Nitin', 'Thakur');
langSpan('Nitin', 'Thakur');
console.log(''); 
// Callback functiom, a function you give to another function, to be run when the other function is finished
function tellMeWhenDone(callback){
    a = 1000;
    b = 2000;
    callback();
}
tellMeWhenDone(function(){
    console.log('I am done!');
});
tellMeWhenDone(function(){
    console.log('I am done too!');
});
console.log(''); 

// call(), apply() and bind() ----------
// bind()
var person = {
    fname: 'Nitin',
    lname: 'Thakur',
    getFullName: function(){
        var fullname = this.fname + ' ' + this.lname;
        return fullname;
    }
}
var logName = function(lang1, lang2){
    console.log('Arguments: ' + lang1 + ' ' + lang2);
    console.log('Logged: ' + this.getFullName());
}
var bindLogName = logName.bind(person);
bindLogName();
// bind passed the copy and binds it to the function you pass to
// call()
logName.call(person, 'en', 'es');
// apply()
logName.apply(person, ['en', 'es']);
// same as call but apply needs array of arguments
console.log('');

// Functional programming ----------
function mapForEach(arr, fn){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        newArr.push(fn(arr[i]));
    }
    return newArr;
}
var arr1 = [1, 2, 3];
var multiplyByTwo = mapForEach(arr1, function(item){
    return item *2;
})
console.log(multiplyByTwo)
var multiplyByThree = mapForEach(arr1, function(item){
    return item *3;
})
console.log(multiplyByThree)
var multiplyByFour = mapForEach(arr1, function(item){
    return item *4;
})
console.log(multiplyByFour)
var checkLimit = function(limiter, item) {
    return item > limiter;
}
var limit = mapForEach(arr1, checkLimit.bind(this, 1));
console.log(limit);
console.log('');

// ---------- Objects and functions ends here ----------

// ---------- Objects-Oriented Javascript and prototypal inheritance starts here ----------

// inheritance ----------
// One object gets access to the properties and methods of another object
// Classical and prototypal inheritance, js uses prototypal inheritance
var person = {
    fname: 'Nitin',
    lname: 'Thakur',
    getFullName: function(){
        return this.fname + ' ' + this.lname;
    }
}
var person2 = {
    fname: 'Nikhil',
    lname: 'Sharma'
}
person2.__proto__ = person;
console.log(person2.getFullName());
var person3 = {
    fname: 'Nikita',
    address: '112 North st.'
}
person3.__proto__ = person; 
console.log(person3.getFullName()); //this will give lastname of person because it is pointing to that
console.log('');
// Extend
for (var prop in person2){
    console.log(prop + ': ' + person2[prop]);
}
// this will not only get the value in person2 object but also the person which is inherited to us when we used __proto__
for (var prop in person2){
    if(person2.hasOwnProperty(prop)){
        console.log(prop + ': ' + person2[prop]);
    }
}
console.log('');
// this will only display properties present in person2

// ---------- Objects-Oriented Javascript and prototypal inheritance ends here ----------

// -------- Building Objects starts here ---------

// new ----------
function human(){
    console.log(this)
    this.fname = 'Nitin';
    this.lname = 'Thakur';
}
var nitin = new human();
console.log(nitin);
function human2(fname, lname){
    this.fname = fname;
    this.lname = lname;
}
var nikita = new human2('Nikita', 'Sharma');
console.log(nikita);
console.log('');
var a = new String('Nitin') //this is not a string but object
console.log(a);
console.log('');

// function constructors and '.prototype' ----------
function human(){
    this.fname = 'Nitin';
    this.lname = 'Thakur';
}
var nitin = new human();
human.prototype.getFullName = function(){
    return this.fname + ' ' + this.lname;
}
console.log(nitin.getFullName());
console.log('');

// Object.create and pure prototypal inheritance ----------
var person = {
    fname: 'Default',
    lname: 'Default',
    getFullName: function(){
        return this.fname + ' ' + this.lname;
    }
}
var nitin = Object.create(person);
nitin.fname = 'Nitin';
nitin.lname = 'Thakur';
console.log(nitin);
console.log('');

// ES6 and Classes ----------
class Person {
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
    greet(){
    return 'Hello! ' + this.fname + ' ' + this.lname;

    }
}
var nitin = new Person('Nitin', 'Thakur');
console.log(nitin.greet());
console.log('');
class Person2 extends Person{
    constructor(fname, lname){
        super(fname, lname);
    }
    greet(){
    return 'Hola! ' + this.fname + ' ' + this.lname;
    }
}
var nitin2 = new Person2('Nitin', 'Thakur');
console.log(nitin2.greet());
console.log('');

// -------- Building Objects ends here ---------

// -------- Odds and ends starts here ---------

// typeof
class Person3 {
    constructor(fname, lname){
        this.fname = fname;
        this.lname = lname;
    }
}
console.log(typeof Person3);
var nitin = new Person3('Nitin', 'Thakur');
console.log(typeof nitin);

// instanceof
console.log(nitin instanceof Person3); //true
console.log('');

// strict mode
// "use strict"; use this on top to avoid uncaught type errors this eventually means be stricter while executing the code
function Person4(){
    // "use strict"; //(uncomment this) scope only in this function
    var people;
    peopom = {}; // this will only give error when use strict is used
    console.log(peopom);
}
Person4();
console.log('');

// -------- Odds and ends, ends here ---------

// -------- Asynchronous Javascript ----------
// Syncronous actions have blocking calls, which means next line won't execute unless current task is completed
// Asynchronous actions have non-blocking calls, which means the function will let other lines to execute and wait to come back to its non-blocking call back

function print1() {
    const number1 = 1;
    console.log(number1);
}
function print2() {
    function getNumber2() {
        return 2;
    }
    const number2 = getNumber2();
    console.log(number2);
}
async function print3() { // non-blocking call execution will go to print4 and then comeback to print3 function
    // await (function(){
    //     setTimeout(() => {
    //         resolve('resolved');
    //       }, 2000);
    // }) if you uncomment it, it will happen only when whole global eecution is executed 
    console.log('3');
}
// async will go to message queue, and will execute at the end when call stack is empty, when call stack is empty js will take task from message queue and create a new execution context for async
function print4() {
    const number4 = 4;
    console.log(number4);
}
// if we want to run print3 function first we can simply call print4 from the end of print3 function
print1();
print2();
print3();
print4();
console.log('');

// Callback --------
// Function that is passed as an argument to another function, and then invoked from within that function.
function print(number){
    console.log(number);
}
const numberArray = [1,2,3,4];
numberArray.forEach(print);
console.log('');
// Pros - simplicity, popularity
// Cons - lack of readability

// Handling errors in asynchronous function ---------
// function  calculateSquare(number, callback) {
//     setTimeout(function(){
//         if(typeof number !== 'number'){
//             callback(new Error("Argument type should be a number!"), null);
//             return;
//         }
//         const square = number * number;
//         callback(null, square);
//     }, 0);
// }
// calculateSquare('bad string', function (error, square) {
//     if(error !== null){
//         console.log("Caught " + String(error));
//         console.log('');
//     }
//     else{
//         console.log("Square of the number is: " + square);
//     }
// });
// Commenting it out cause it is async function and will execute after global execution context is empty/over

// Promises ----------
// Promises is a special JS object that represents an eventual result of an asynchronous action.
// Promise states, pending, fulfilled & rejected
// Creating a promise
const myPromise = new Promise(function(resolve, reject){
    // output will show pending
    // reject("Reason!"); this will give uncaught error
});
console.log(myPromise);
const myPromise2 = new Promise(function(resolve, reject){
    resolve("Resolved!");
    reject("Reason!"); //this won't run since it is resolved
});
console.log(myPromise2);
console.log('');
//Then method - takes two argument, onFulfilled and onRejected
const myPromise3 = new Promise(function(resolve, reject){
    resolve("Hello World!");
});
myPromise3.then(function(value) {
    console.log('This is inside then function!');
    console.log(value);
    console.log('');
});
console.log('This is outside then function!');
// Squaring function using promises
function squaringNumber(number){
    const createPromise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(typeof number !== 'number'){
                return reject(new Error('Argument type should be number!'));
            }
            var square = number * number;
            resolve(square);
        });
    });
    return createPromise;
};
squaringNumber("Bad string").then(value => { //enter a number instead of "Bad string" to see success!
    console.log('Success: ' + value);
    },
    reason => {
        console.log('' + reason); //error
        console.log('');
    }
);
//Chaining
function squaringNumber(number){
    const createPromise = new Promise(function(resolve, reject){
        setTimeout(function(){
            if(typeof number !== 'number'){
                return reject(new Error('Argument type should be number!'));
            }
            var square = number * number;
            resolve(square);
        });
    });
    return createPromise;
};
squaringNumber(0).then(value=>{
    console.log(value);
    return squaringNumber(1);
}).then(value => {
    console.log(value);
    return squaringNumber(2);
}).then(value => {
    console.log(value);
    return squaringNumber(3);
}).then(value => {
    console.log(value);
    return squaringNumber(4);
}).then(value => {
    console.log(value);
    console.log('');
});
// Executing promises parallel, helps to run multiple https request at the same time(parallely) Promise.all()

// async/await functions javascript ---------
// async/await is a syntactic feature of programming languages that allows an asynchronous function to be structured in a way similar to ordinary synchronous function.
// async keyword
// promise inside async function
async function fst(){ //returns promise
    // return new Promise((reject, resolve) => {
    //     setTimeout(()=> resolve(true), 1);
    // });
}
const var1 = fst();
console.log(var1);
async function fst2(){
        // return Promise.reject(404); //this gives uncaught 404 promise
}
const var2 = fst2();
console.log(var2);

function hehe(){
    console.log('Hello!');
} 
console.log(hehe());