// JavaScript Functions
function sayHello (name, greeting) {
  if (typeof greeting === "undefined") {
    greeting = "Hello";
  }
  console.log(greeting + " World! " + name);

  return name.length;

}
// functions take inputs called arguments
// RETURN VALUE is the output of a function
sayHello("Katie", "Greetings");
sayHello("Jim");

// scope === namespace for variables
var color = 'black';

function showColor() {
  var color = 'green';
  console.log('showColor color', color);
  console.log('can i reach the global color?', self.color);
}

showColor(); // => green
console.log('global color', color); // => black

// ANONYMOUS Functions
// functions without names

var myFunction = function () {
  console.log('myFunction was called');
};

var callTwice = function(targetFunction) {
  targetFunction();
  targetFunction();
};

callTwice(myFunction);

//use () at the end of the function name to call the function
//do not use the () at the end of the function if you pass as variable

callTwice(function () {
  console.log("hello from anonymous function");
});

// self-executing anonymous function
(function () { //these () are syntax parens
  var a, b, c;
  // ...
  console.log("hi from anon function");
})(1, 'hello'); //these () are function execution parens

// common JavaScript operations:
var button = document.getElementById("action");
var input = document.getElementById("text_field");

button.addEventListener('click', function () {
  console.log('clicked');
  input.setAttribute('value', "Hello World!");
});

