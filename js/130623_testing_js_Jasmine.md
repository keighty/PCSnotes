#Testing your javascript with jasmine

TDD in its simplest form is just this:
1. Write your tests
2. Watch them fail
3. Make them pass
4. Refactor
5. Repeat

BDD is more complex:
* Establishing the goals of different stakeholders required for a vision to be implemented
* Involving stakeholders in the implementation process through outside-in software development
* Using examples to describe the behavior of the application, or of units of code
* Automating those examples to provide quick feedback and regression testing

BDD is more about FEATURES
TDD is more about functions

Jasmine does not require a DOM

###Basic Syntax
```java
describe('JavaScript addition operator', function () {
    it('adds two numbers together', function () {
        expect(1 + 2).toEqual(3);
    });
});
```
```
week4hw1/
├── SpecRunner.html   // this file runs the test in the browser
├── lib               //these are the jasmine framework files
│   └── jasmine-1.3.1
│       ├── MIT.LICENSE
│       ├── jasmine-html.js
│       ├── jasmine.css
│       └── jasmine.js
├── spec              // testing files go here
│   ├── PlayerSpec.js
│   └── SpecHelper.js
└── src               // js files to test go here
    ├── Player.js
    └── Song.js
```

```java
it("throws an error when passed an unknown to-unit", function () {
    var testFn = function () {
        Convert(1, "cm").to("furlongs");
    }
    expect(testFn).toThrow(new Error("unrecognized to-unit"));
});
```

notice that I’m wrapping the actual conversion in a function and passing
that to the expect function.
That’s because we can’t call the function as the expect parameter; we need to
hand it a function and let it call the function itself. Since we need to
pass a parameter to that to function, we can do it this way.

##Jasmine Matchers
* expect(x).toEqual(x);
* expect(x).toBeDefined();
* expect(x).toBeUndefined();
* expect(x).toBeNull();
* expect(x).toBeTruthy();
* expect(x).toBeFalsy();
* expect(x).toBeLessThan(y);
* expect(x).toBeGreaterThan(y);
* expect(x).toBeCloseTo(y);
* expect(x).toMatch(<regex> or string);
* expect(["x", "y", "z"]).toContain("x");
* expect(x).toThrow();
* Any matcher can evaluate to a negative assertion by chaining the
call to expect with a not before calling the matcher.


##Jasmine Before and After
```java
describe( "anObject", function () {
  beforeEach(function () {
    obj.setState("clean");
  });

  afterEach("anObject", function () {
    obj.setState("clean");
  });
});
```
## Write custom matchers
```java
beforeEach(function () {
  this.addMatchers({
    toBeDivisibleByTwo: function() {
        return (this.actual % 2) === 0;
    }
  });
});


it('is divisible by 2', function() {
  expect(gimmeANumber()).toBeDivisibleByTwo();
});
```
##Disabling Specs and Suites

Suites and specs can be disabled with the xdescribe and xit functions,
respectively. These suites and specs are skipped when run and thus their
results will not appear in the results

##Spies

Jasmine’s test doubles are called spies.

A spy can stub any function and tracks calls to it and all arguments.
There are special matchers for interacting with spies.

Create a spy like this: `spyOn(foo, 'getBar');`

#### Spy Matchers
* expect(x).toHaveBeenCalled() (return true if the spy was called)
* expect(x).toHaveBeenCalledWith(y) (returns true if the argument
list matches any of the recorded calls to the spy)

Example:
```java
describe("A spy", function() {
  var foo, bar = null;

  beforeEach(function() {
    foo = {
      setBar: function(value) {
        bar = value;
      }
    };

    spyOn(foo, 'setBar');

    foo.setBar(123);
    foo.setBar(456, 'another param');
  });

  it("tracks that the spy was called", function() {
    expect(foo.setBar).toHaveBeenCalled();
  });

  it("tracks its number of calls", function() {
    expect(foo.setBar.calls.length).toEqual(2);
  });

  it("tracks all the arguments of its calls", function() {
    expect(foo.setBar).toHaveBeenCalledWith(123);
    expect(foo.setBar).toHaveBeenCalledWith(456, 'another param');
  });

  it("allows access to the most recent call", function() {
    expect(foo.setBar.mostRecentCall.args[0]).toEqual(456);
  });

  it("allows access to other calls", function() {
    expect(foo.setBar.calls[0].args[0]).toEqual(123);
  });

  it("stops all execution on a function", function() {
    expect(bar).toBeNull();
  });
});
```

* `spyOn(foo, 'getBar').andCallThrough();`
 (the spy will still track all calls to it but in addition it will
delegate to the actual implementation.

* `spyOn(foo, 'getBar').andReturn(745);`
 (all calls to the function will return a specific value)

* `spyOn(foo, 'getBar').andCallFake(function(){});`
 (all calls to the spy will delegate to the supplied function)

* `jasmine.createSpy("whatamI");`
 (when there is not a function to spy on, jasmine can create a
 bare spy)

##Mocks
* jasmine.createSpyObj()
 (allows you to create a mock with multiple spies)

```java
 describe("Multiple spies, when created manually", function() {
  var tape;

  beforeEach(function() {
    tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

    tape.play();
    tape.pause();
    tape.rewind(0);
  });

  it("creates spies for each requested function", function() {
    expect(tape.play).toBeDefined();
    expect(tape.pause).toBeDefined();
    expect(tape.stop).toBeDefined();
    expect(tape.rewind).toBeDefined();
  });

  it("tracks that the spies were called", function() {
    expect(tape.play).toHaveBeenCalled();
    expect(tape.pause).toHaveBeenCalled();
    expect(tape.rewind).toHaveBeenCalled();
    expect(tape.stop).not.toHaveBeenCalled();
  });

  it("tracks all the arguments of its calls", function() {
    expect(tape.rewind).toHaveBeenCalledWith(0);
  });
});
```

##Match Anything
* jasmine.any takes a constructor or “class” name as an expected value.
 It returns true if the constructor matches the constructor of the
 actual value.
 ```java
describe("jasmine.any", function() {
  it("matches any value", function() {
    expect({}).toEqual(jasmine.any(Object));
    expect(12).toEqual(jasmine.any(Number));
  });

  describe("when used with a spy", function() {
    it("is useful for comparing arguments", function() {
      var foo = jasmine.createSpy('foo');
      foo(12, function() {
        return true
      });

      expect(foo).toHaveBeenCalledWith(jasmine.any(Number), jasmine.any(Function));
    });
  });
});
```

#Jasmine and Asynchronicity
There are two Jasmine functions that help you with asynchronicity:
* runs() blocks execute procedurally, so you don't have to worry about
 asynchronous code screwing everything up.
* waitsFor(function(){}, message, timeout)
 waits for some condition to be true, and then it continues on

#Sinon

###Spies store data about calls in four arrays:
First, stub the jQuery method $.ajax():
 (Doing this does not interfere with normal operation of jQuery.ajax, but it wraps the method and records data.)
```java
sinon.spy(jQuery, "ajax");
jQuery.getJSON("/some/data");
```
* `jQuery.ajax.args`

A nested array of arguments received by the spy.
To retrieve the first argument of the first call, you'd do jQuery.ajax.args[0][0]
 where the first 0 is the call number and the second is the argument index.

* `jQuery.ajax.returnValues`

An array of each call's return value.
To retrieve the value returned the first time the spy was called,
 you'd do jQuery.ajax.returnValues[0]. For calls that don't have an
 explicit return value, the array stores undefined.

* `jQuery.ajax.exceptions`

An array of exceptions thrown by the spy.
If the spy does not throw an exception in any given call,
 undefined is stored in the array. The array always contains one entry
 per call, regardless of whether it throws or not.

* `jQuery.ajax.thisValues`

An array of this values.
For each call, the spy stores the value of this in this array, which
 can be useful when testing that functions are passed callbacks bound to
 a specific object, or that callbacks are called with the right context
 using call or apply.

###More complex spy method calls
* jQuery.ajax.calledWith(arg1, arg2, ...)
* jQuery.ajax.calledWithExactly(arg1, arg2, ...)
* jQuery.ajax.alwaysCalledWith(arg1, arg2, ...)
* jQuery.ajax.alwaysCalledWithExactly(arg1, arg2, ...)
* jQuery.ajax.returned(returnValue)
* jQuery.ajax.alwaysReturned(returnValue)
* jQuery.ajax.threw(exceptionOrType)
* jQuery.ajax.alwaysThrew(...)
* jQuery.ajax.calledOn(thisObj)
* jQuery.ajax.alwaysCalledOn(...)

##Create a stub
`var handler = sinon.stub();`

##Create a mock
Mock objects are like both stubs and spies, and additionally have
pre-programmed behavior verification - so-called expectations -
 built in. Mocks state their success criteria upfront, rather than the
 usual closing assertions, and fail immediately upon receiving unexpected
 calls. Finally, a call to mock.verify() verifies that indeed all
  expectations are met.

`var mock = sinon.mock();`