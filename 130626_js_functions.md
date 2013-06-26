#Functions are FIRST CLASS OBJECTS:
* can have properties assigned to them: ```assert.count```
* inherit from Function.prototype which inherits from Object.prototype
* the prototype property is an object that will serve as the prototype
 for any object created by using the function as a constructor
 * the length property of a function indicates how many formal parameters
 it has (Arity)

##1. Function Declaration
```java
function assert(message, expr) {
  if (!expr) {
    throw new Error(message);
  }

  assert.count++;

  return true;
}

assert.count = 0;
```

##2. Function Expression
```java
var assert = function(message, expr) {
  if (!expr) {
    throw new Error(message);
  }

  assert.count++;

  return true;
};

assert.count = 0;
```
* Function expressions must be terminated by a semi-colon
* These functions are anonymous
* Functions stay anonymous to the enclosing scope

##3. Named Function Expression
```java
var assert = function assert(message, expr) {
  if (!expr) {
    throw new Error(message);
  }

  assert.count++;

  return true;
}

assert.count = 0;
```

##4. Function Constructor
* can be used to create new functions: `Function(p1, p2, ...., pn, body);`
* can be used in a `new` expression: `new Function(p1...);`
```java
var assert = Function("message", "expr",
  "if (!expr) { throw new Error(message); }" +
  "assert.count++; return true;");
assert.count = 0;
```
--------------------------------
# Calling Functions
1. Directly, using parentheses
```java
assert("should be true", typeof assert === "function");
```
2. Indirectly, using the `call` and `apply` methods
```java
var arrayMaker = {
    someProperty: 'some value here',
    make: function (arg1, arg2) {
        return [ this, arg1, arg2 ];
    }
};

var gasGuzzler = { year: 2008, model: 'Dodge Bailout' };
makeArray.apply( gasGuzzler, [ 'one', 'two' ] );
// => [ gasGuzzler, 'one' , 'two' ]
makeArray.call( gasGuzzler,  'one', 'two' );
// => [ gasGuzzler, 'one' , 'two' ]
```

------------------------
#jQuery plugins

A jQuery plugin is simply a new method that we use to extend jQuery's
 prototype object. By extending the prototype object you enable all
 jQuery objects to inherit any methods that you add. As established,
 whenever you call jQuery() you're creating a new jQuery object, with
 all of jQuery's methods inherited.
