var character = 'Oniel';
console.log(character);
var inputs = document.querySelectorAll('input');
console.log(inputs);
inputs.forEach(function (input) {
    console.log(input);
});
var circ = function (diameter) {
    return diameter * Math.PI;
};
console.log(circ(20));

function respondToIfeoma(question) {
    if (question.includes("are you foolish")) {
        return "I should ask you";
    }
    else {
        return "I'm not sure how to respond to that.";
    }
}
console.log(respondToIfeoma("are you foolish?"));
