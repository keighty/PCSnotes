/* JavaScript Foundations: Variables*/

// javascript variables are dynamically typed
var color = ["this", "is", "an", "array"];
var color = "red";

var myDiv = document.getElementById('myDiv');
myDiv.style.background = "black";
myDiv.style.color = "white";

// vars can start with A-Z a-Z _ $

// var 3colors = "red green blue";
  // throws Uncaught SyntaxError: Unexpected token illegal

// var winning%;
  // throws Uncaught SyntaxError: unexpected token %

// var person-name = "Jim";
  // throws Uncaught SyntaxError: unexpected token -

// reserved words
// var continue = true
  // throws Uncaught SyntaxError: Unexpected token continue

// ########### Null and undefined

var myVar;

// tests if a variable is undefined
// this is best practice for testing a variable
console.log(typeof myVar === "undefined");
// can't trust the actual value of undefined in practice
console.log(myVar === undefined);

var x = null

if(myVar == null){
  console.log("if");
}else {
  console.log("else");
}
// undefined and null are so similar that the == method doesn't discriminate

// undefined == null => true
// undefined === null => false

// ############## SCOPE

var world = "World!"; // global scope

function sayHello() {
  var hello = "Hello "; // local scope
  console.log(hello + world);
}
sayHello();

// always declare variables with var
// vars are FUNCTIONALLY scoped (function-wide, not block-wide)

function doSomething(doit) {
  var color = "blue";
  if (doit) {
    var color = "red"
    console.log("Color in if(){} is: ", color);
  }
  console.log("Color after if(){} is: ", color);
}

doSomething(false); //color returns blue
doSomething(true); // color returns red even though redeclared inside if,
                    // it is still functionally scoped

// HOISTING
function anotherThing(doit){
  if(doit) {
    var number = 10;
  }
}
// number is hoisted into the function scope just like this:
function anotherThing(doit){
  var number;
  if(doit){
    number = 10
  }
}
// so, declare all variables at the top of the function

// define multiple variables like this
var color = "green",
    number,
    firstname = "katie";

// data munging: taking data that is stored in one format and changing it into another format




