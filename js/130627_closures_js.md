# Closures

`Function.prototype.bind`
* accepts an object
* returns a function that, when called, calls the original function with the bound object as the `this` value
```java
if (!Function.prototype.bind) {
  Function.prototype.bind = function(thisObj) {
    var target = this;

    return function() {
      return target.apply(thisObj, arguments) ;
    };
  };
}
```

# Defer a method call using bind and setTimeout
```java
function bench(func) {
  var start = new Date().getTime();

  for(var i )
}