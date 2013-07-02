# Object and prototypal inheritance js
###Arguments Object
All of a functions arguments are available through the array-like object `arguments`
* `arguments` is only array-like in its length and numeric index properties
* it does not provide array methods
```java
function assert(message, expr) {
  if (arguments.length < 2) {
    throw new Error("Provide message and value to test.");
  }
  if (!arguments[1]) {
    throw new Error(arguments[0]);
  }
  assert.count++;
  return true
}

assert.count = 0;
```
#Scope and Execution Context
javascript has two kinds of scope:
1. global
2. function
```java
for(var i = 0; i < arguments.length; i++)
```
The `i` variable is in the global scope even before it is declared inside the for loop.
* a common error in methods that use more than one loop is to redeclare the `i` variable in every loop

"Whenever control is transferred to EMCAScript executable code, control is entering an execution context. Active execution context logically form a stack. The top execution context on this stack is the running execution context."

###Variable Object.
Any variables and functions defined inside the execution context are added to the variable object.

The effects of this algorithm is known as _hoisting_ of functions and variable declarations:
* functions are hoisted in their entirety
* variables only have their declaration hoisted
```java
var testScop = function() {
  function sum() {

    assertUndefined(i);

    for(var i = 0; i < arguments.length; i++){
      // more code
    }
  }
}
```
`assertUndefined(i)` will return true, because the code is interpreted as this:
```java
var testScop = function() {
  function sum() {
    var i;
    assertUndefined(i);

    for(i = 0; i < arguments.length; i++){
      // more code
    }
  }
}
```
###Global Object
aka `window` object
```java
var global = this;

describe("The Global Object", function() {
  it("the window should be the global object", function() {
    expect(global).toBe(window);
    expect(global.window).toBe(window);
    expect(window.window).toBe(window);
  });
});
```
in this way, using `var` to declare a variable is the same as assigning a property to the global object:
```java
var chunky = function() {...};
this.chunky = function() {...};
```
_NOTE_ these statements are not _strictly_ equivalent, as the `var` declaration is hoisted, but the property assignment is not.

#Conditional Function Declaration
You CANNOT/SHOULD NOT use function declarations in conditionals. Take this example:
```java
if (String.prototype.trim) {
  function trim(str) {
    return str.trim();
  }
else {
  function trim(str){
    return str.replace(/^\s+|\s+$/g, "");
  }
}
```
What is wrong with that, you might ask? HOISTING! Both functions are hoisted up to the global variable before execution, which means that the second one always overwrites the first one.

This is a better method:
```java
if(!String.prototype.trim) {
  String.prototype.trim = function trim() {
    return this.replace(/^\s+|\s+$/g, "")
  }
}
```
This way, we are not overwriting any browser-available Trim methods, AND was have named it so that it will be more visible in a stack trace in case something goes wrong.

