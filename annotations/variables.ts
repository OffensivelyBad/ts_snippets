let apples: number = 5;
let speed: string = 'fast';
let hasName: boolean = true;

let nothingMuch: null = null;
let nothing: undefined = undefined;

// built in objects
let now: Date = new Date();

// Array
let colors: string[] = ['red', 'green', 'blue'];
let myNumbers: number[] = [1, 2, 3];
let truths: boolean[] = [true, true, false];

// Classes
class Car {}
let car: Car = new Car();

// Object literal
let point: { x: number; y: number } = {
  x: 10,
  y: 20
};

// Function
const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};


// When to use annotations
// 1) function that returns the 'any' types
const json = '{ "x": 10, "y": 20 }';
const coordinates = JSON.parse(json);
const coordinateWithType: { x: number, y: number }= JSON.parse(json);
console.log(coordinateWithType.x);

// When we declare a variable on one line
// and initialize it later
let words = ['red', 'green', 'blue'];
let foundWord;
let typeFoundWord: Boolean;

for (let i = 0; i < words.length; i++) {
  const word = words[i];
  if (word === 'green') {
    foundWord = true;
    typeFoundWord = true;
  }
}

// 3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    numberAboveZero = numbers[i];
  }
}
