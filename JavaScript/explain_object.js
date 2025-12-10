// Creating an object using the Object constructor

// 1. Start--
// let person = new Object();
// person.firstName = "Akshat";
// person.lastName = "Upasani";
// person.age = 24;
// person.eyeColor = "Brown";
// console.log(person);
// 1. End--

// Creating an object using object literal syntax

// 2. start--
// let person = {
//   firstName: "Akshat",
//   lastName: "Upasani",
//   age: 24,
//   eyeColor: "Brown",
// };

// Assigning one object to another variable creates a reference, not a copy
// let person1 = person;
// person1.age = 51;
// console.log(person1);
// console.log(person);
// 2. end--

// Creating an object using object literal syntax

// 3 . start--
// let person = {
//   firstName: "Akshat",
//   lastName: "Upasani",
//   age: 24,
//   eyeColor: "Brown",
// };


// Shallow copy using spread operator (copies top-level properties only)

// let person1 = { ...person }
// person1.age = 51;
// console.log(person1);
// console.log(person);

// 3. end--


// Creating a nested object with another object as a property
// 4 start--

// let person = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   address: {
//     street: "123 main st",
//     city: "New York",
//     state: "NY",
//   },
// };

// Shallow copy using spread operator (does NOT deeply copy nested objects)
// let person1 = { ...person };
// person1.eyeColor = "green";
// console.log(person);
// console.log(person1);

// 4 end--



// 5 start-- 

let person = {
  firstName: "John",
  lastName: "Doe",
  age: 50,
  eyeColor: "blue",
  address: {
    street: "123 main st",
    city: "New York",
    state: "NY",
  },
};

// Deep copy using structuredClone (copies all nested objects/arrays)
let person1 = structuredClone(person); // method1
person1.address.city = "Los Angeles";
console.log(person);
console.log(person1);

// 5 end--

