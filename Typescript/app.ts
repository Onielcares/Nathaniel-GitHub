const character = 'Oniel';

console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs);

inputs.forEach(input => {
  console.log(input);
});

const circ = (diameter: number) => {
  return diameter * Math.PI;
}

console.log(circ(20));

function respondToIfeoma(question: string){   
  if (question.includes("Are you foolish")) {   
      return "I should ask you";     } 
else {       
  return "I'm not sure how to respond to that.";     } 
}  

console.log(respondToIfeoma("Are you foolish?"));

// types and functions and Signature and Arrays and Objects

type Oniel = string | number;

let nickName: Oniel = 'Oniel';
let nickNumber: Oniel = 10;

console.log(nickName);
console.log(nickNumber);

// Function Signature
function greet(name: string) {
  console.log(`Hello, ${name}!`);
}

greet('Oniel');

const anchor = document.querySelector('a');

if (anchor) {
  console.log(anchor.href);
}

const form = document.querySelector('form')!;

console.log(form);

const form2 = document.querySelector('.new-item-form') as HTMLFormElement;

const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

form2.addEventListener('submit', (e: Event) => {
  e.preventDefault();

  console.log(type.value, tofrom.value, details.value, amount.valueAsNumber);
});