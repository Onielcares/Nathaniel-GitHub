"use strict";
const character = 'Oniel';
console.log(character);
const inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(input => {
    console.log(input);
});
const circ = (diameter) => {
    return diameter * Math.PI;
};
console.log(circ(20));
function respondToIfeoma(question) {
    if (question.includes("Are you foolish")) {
        return "I should ask you";
    }
    else {
        return "I'm not sure how to respond to that.";
    }
}
console.log(respondToIfeoma("Are you foolish?"));
let nickName = 'Oniel';
let nickNumber = 10;
console.log(nickName);
console.log(nickNumber);
// Function Signature
function greet(name) {
    console.log(`Hello, ${name}!`);
}
greet('Oniel');
