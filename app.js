let name = 'Blake';     // Declare name, give it the value of 'Blake'
const states = 50;      // Declare states, give it the value of 50

let x = 5;              // Declare x, give it the value of 5
let y = 4;              // Declare y, give it the value of 4
let z = x + y;          // Declare z, give it the value of x + y

/*
The code below will display the
first alert if the name begins
with the letter 'L' or the second
alert if the name begins with a
different letter
*/
if(name.charCodeAt(0) >= 76) {
    alert('Back of the Line!');
} else {
    alert('Next!');
}