// // var x = "100";
// // // var x = "100";
// // function fun(params) {
// //     document.write(x)
// // }
// // var x = "25";
// // document.write(x)

// // // Declare a variable a number of times

// // let y = "50";
// // y = "40";
// // y = "30";
// // document.write(y)
// // // Declare a variable once and value once

// // const z = "100";
// // z = "200";
// // document.write(z)
// // // Declare a variable once and no other value

// // STATEMENTS

// // IF Statements

a = 10;
b = 20;
if (a < b) {
    document.write("a is less than b")
}

// // IF ELSE Statements

a = 10;
b = 20;
if (a > b) {
    document.write("a is greater than b")
} else {
    document.write("a is lesser than b")
}

// CONDITION TENARY OPERATOR

var x = 100;
var y;
// y = (x > 50) ? "x is greater than 50" : "x is lesser than 50";
x == 100 ? (y = "Yes") : (y = "No");
document.write(y);


// SWITCH STATEMENTS

var day = 9;
switch (day) {
    case 1:
        document.write("Today is <br>");
        document.write("Monday");
        break;
    case 2: // if day == 2
        document.write("Tuesday");
        break;
    case 3:
        document.write("Wednesday");
        break;
    case 4:
        document.write("Thursday");
        break;
    case 5:
        document.write("Friday");
        break;
    case 6:
        document.write("Saturday");
        break;
    case 7:
        document.write("Sunday");
        break;
    default:
        document.write("Invalid Day");
}

