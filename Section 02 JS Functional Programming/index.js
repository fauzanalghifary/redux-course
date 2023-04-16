// import { compose, pipe } from 'lodash/fp.js'

//  import lodash, use common js
const { compose, pipe } = require("lodash/fp.js");
const { produce } = require("immer");

// Function

function greeting() {
  return function () {
    return "Hello World";
  };
}

let aFunction = greeting();
console.log(aFunction());

//  Higher Order Function

let numbers = [1, 2, 3, 4];

numbers.map((number) => number * 2);

// Function Composition and Currying

let username = " Harley ";
// let message = "Hello " + username.trim() + "!";

const trim = (name) => name.trim();
const generateMessage = (message) => (name) => `Hello ${name}, ${message}!`;
const covertToUpperCase = (name) => name.toUpperCase();

let message = generateMessage(covertToUpperCase(trim(username)));

// const newFunc = compose(generateMessage, covertToUpperCase, trim);
const newFunc = pipe(trim, covertToUpperCase, generateMessage("How are you"));
let newMessage = newFunc(username);

console.log(message);
console.log(newMessage);

// Currying

function multi(a) {
  return function (b) {
    return a * b;
  };
}

const multiple = (a) => (b) => a * b;

let result1 = multi(2)(3);
let result2 = multiple(2)(3);
console.log(result1);
console.log(result2);

//  Pure Function

// a function that always returns the same result if the same arguments are passed in. It does not depend on any state, or data, change during a program’s execution. It must only depend on its input arguments.
// or to put it simply: a function that returns the same result if given the same arguments.

//  Immutability

//  Immutability is the concept that data cannot be changed. In other words, data is immutable if it cannot be changed after it’s created.
// it can increase the predictability of your application and make it easier to debug. and also faster change detection

// Immutability in Objects

const employee = {
  name: "Harley",
  age: 30,
  company: {
    name: "Google",
    location: "Mountain View",
  },
};

// const newEmployee = Object.assign({}, employee, { age: 31 });

// const newEmployee = {
//   ...employee,
//   age: 31,
//   company: {
//     ...employee.company,
//     location: "New York",
//   },
// };

// using immer
const newEmployee = produce(employee, (draft) => {
  draft.age = 31;
  draft.company.location = "New York";
});

console.log(employee);
console.log(newEmployee);

// Immutability in Arrays

const numbers2 = [1, 2, 3, 4];

const addedNumbers = [...numbers2, 5];

const index = numbers2.indexOf(2);
const addedNumbers2 = [
  ...numbers2.slice(0, index),
  5,
  ...numbers2.slice(index),
];

console.log(addedNumbers2);

const updated = numbers2.map((n) => (n === 2 ? 20 : n));
console.log(updated);

const removed = numbers2.filter((n) => n !== 2);
console.log(removed);
