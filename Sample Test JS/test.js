var myarray = [];

var i = 0
while(i < 5 ) {
    myarray.push(i)
    i++;
}

console.log(myarray);

var ourarray = [];

for (var i = 0; i < 10; i++) {
    ourarray.push(i)
}

console.log(ourarray);

var ourarray = [];

for (var i = 1; i < 10; i+= 2) {
    ourarray.push(i)
}

console.log(ourarray);

var ourarray = [];

for (var i = 100; i > 0; i-= 2) {
    ourarray.push(i)
}

console.log(ourarray);

var arr = [ 9, 10, 11, 12];
var total = 0;

for (var i = 0; i < arr.length; i++) {
    total += arr[i];
}

console.log(total);