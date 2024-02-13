function print(str){
    console.log(str);
}


// For Loop - to print even numbers untill 10
for(let i=1;i<=10;i++){
    if(i%2==0){
        console.log(i);
    }
}
console.log("----------------------------------");

// Nested for loops - example
for(let i=0; i< 10; i++){
    for(let j=1; j<=10; j++){
        if(i==j){
            console.log(i+","+j);
        }
    }
}

console.log("----------------------------------");

// https://stackoverflow.com/questions/523643/difference-between-and-in-javascript
// Difference between == and === in javascript
console.log(1 == "1");
console.log(1 === "1")

console.log("----------------------------------");

// Example for Break and Continue 
for(let i=0;i<10;i++){
    if(i==5){
        break;
    }
    console.log(i);
}

console.log("----------------------------------");

for(let i=0;i<10;i++){
    if(i==5){
        continue;
    }
    console.log(i);
}
console.log("----------------------------------");


// While loop
let e = 20;
while(e>0){
    console.log(e);
    e--;
}
console.log("----------------------------------");


// Do While loop
let f = 20;
do{
    console.log(f);
    f--;
}while(f>20)
console.log("----------------------------------");


// FizzBuzz Challenge
for(let i=1;i<=100;i++){
    if(i%3 === 0 && i%5 === 0){
        console.log("FizzBuzz");
    }
    else if(i%3 === 0){
        console.log("Fizz");
    }
    else if(i%5 === 0){
        console.log("Buzz");
    }
    else{
        console.log(i);
    }
}
console.log("----------------------------------");

// For-of loop and for-in loop
const items = ["Suman", "Ramesh", "Sai", "Gopya"];

for(let i =0 ; i < items.length; i++){
    console.log(items[i]);
}
console.log("----------------------------------");

for(let item of items){
    console.log(item);
}

console.log("----------------------------------");

for(let key in items){
    console.log(items[key]);
}

console.log("----------------------------------");


// Higher order array methods
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
// ForEach loop syntax
const socials = ["Facebook", "Whatsapp", "Instagram", "Twitter", "Youtube"];
socials.forEach(x=>console.log(x));

console.log("----------------------------------");


let count=0;
socials.forEach(x=>{
    count++;
    console.log(x + " " + count);
});
console.log("----------------------------------");

socials.forEach((item, index, arr)=>{
    console.log(item + " " + index + " " + arr);
});
console.log("----------------------------------");

let todos = [
    { name : "Hello", Id : 1},
    { name : "World", Id : 2},
    { name : "I am", Id : 3},
    { name : "Suman", Id : 4},
]

todos.forEach((item) => console.log(item.name + " " + item.Id));
console.log("----------------------------------");


// Array filter method example

let numbers = [1,2,3,4,5,6,7,8,9,10];
const evens = numbers.filter((n) => n%2 === 0);
print(evens);
print("----------------------------------");


let ages = [24,34,2,22,10,5,56];
const adults = ages.filter(age => age > 18);
print(adults);
print("----------------------------------");


// Array map Method examples
let nums = [1,2,3,4,5];
const doubledNumbers = nums.map(n => 2*n);
print(doubledNumbers);
print("----------------------------------");

const squareAndDouble = nums.map(n => n*n).map(k => 2*k);
print(squareAndDouble);
print("----------------------------------");


const companies = [
    {id : 1, name : "Godrej", category: "Soaps"},
    {id : 2, name : "Micromax", category: "Mobiles"},
    {id : 3, name : "Apple", category: "Laptops"},
    {id : 4, name : "Natraj", category: "Pencils"},
]

var shortenedCompanies = companies.map(company => {
    return { name : company.name, category : company.category};
});

print(shortenedCompanies);
print("----------------------------------");


// Array reduce method examples

const num = [1,2,3,4,5,6];
let sum = num.reduce((total, current) => total + current, 0);
print(sum);
print("----------------------------------");


const cart = [
    {name : "Apples", quantity : 1},
    {name : "Bananas", quantity : 3},
    {name : "Mangoes", quantity : 10},
    {name : "Onions", quantity : 15},
];

let totalItems = cart.reduce((sum,curr) => sum + curr.quantity, 0);
print(totalItems);
print("----------------------------------");



// Array Challenges

// Challenge 1
const people = [
    {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@gmail.com',
      phone: '111-111-1111',
      age: 30,
    },
    {
      firstName: 'Jane',
      lastName: 'Poe',
      email: 'jane@gmail.com',
      phone: '222-222-2222',
      age: 25,
    },
    {
      firstName: 'Bob',
      lastName: 'Foe',
      email: 'bob@gmail.com',
      phone: '333-333-3333',
      age: 45,
    },
    {
      firstName: 'Sara',
      lastName: 'Soe',
      email: 'Sara@gmail.com',
      phone: '444-444-4444',
      age: 19,
    },
    {
      firstName: 'Jose',
      lastName: 'Koe',
      email: 'jose@gmail.com',
      phone: '555-555-5555',
      age: 23,
    },
  ];

  // Get name and email of people who are 25 and under 
  let youngPeople = people.filter(p => p.age <= 25).map(k => {
    return {
        name : k.firstName+" "+k.lastName,
        email : k.email,
    }
  })
  print(youngPeople);


  // Challenge 2
  const numbs = [2, -30, 50, 20, -12, -9, 7];

  // Add all positive numbers in the array
  let total = numbs
    .filter(n => n > 0)
    .reduce((sum, curr)=> sum + curr, 0);

  print(total);


  // Challenge 3
  // Create a new array called `capitalizedWords` with the words from the `words` array with the first letter of each word capitalized.

  const words = ['coder', 'programmer', 'developer'];
  let capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
  print(capitalizedWords);