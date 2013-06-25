var Klass = function () {
};

Klass.staticMethod = function (arg) {
  return arg;
};

Klass.prototype.method = function (arg) {
  return arg;
};

Klass.prototype.methodWithCallback = function (callback) {
  return callback('foo');
};


// Spies can be used to test constructor calls
var namespace = {
  Klass : function (something) {
    this.something = something;
  }
};

// Spies can be very useful for testing AJAX or other asynchronous
// behaviors that take callbacks by faking the method firing an async call.

Klass.asyncMethod = function (callback) {
  someAsyncCall(callback);
};