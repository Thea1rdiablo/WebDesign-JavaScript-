// code javascript 
// variable
var x = 5;
var y = 90;
// let x = 50;
console.log(x + y);

let a; // declare variable named: a
a = 100; // assign valure: 100 to variable: a
a = 200; // re-assign value to 200
a = "apple" //re-assign and change 
console.log(a);

// constant: a special variable that store final value:
const SCHOOL_URL = "istad.co"

// DOM: document object model (birdge between html file and user interface)
// DOM manipulate user interfaces by using DOM methods

let HEADING = document.getElementById('heading')
console.log(HEADING);
HEADING.innerHTML = "Hello World"
HEADING.setAttribute("class", "text-darkblue")
// document.querySelector 
document.querySelector("#heading")