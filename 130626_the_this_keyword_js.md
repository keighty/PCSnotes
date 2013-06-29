# The this keyword js

`this` usually points to the `self`, or the object that is receiving the method call. Not so in javascript, where the `this` value is decided when entering an execution context.

1. `this` is set implicitly when calling a function using ()
2. `this` is set explicitly when using a function's `call` or `apply` method
```java
circle.diameter.call({radius: 5});
```
The value of `arguments[0]` is going to be `this`, which will refer to the circle object.

Note! When passing methods as callbacks, the impicit `this` keyword is lostunless the object on which it should execute is passed along with it.

