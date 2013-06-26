// A 'spy' replaces the function it is spying on.

describe("Spy Behavior", function() {
  it('should spy on a static method of Klass', function() {
    spyOn(Klass, 'staticMethod');
    Klass.staticMethod('foo argument');

    expect(Klass.staticMethod).toHaveBeenCalledWith('foo argument');
  });

  it('should spy on an instance method of a Klass', function() {
    var obj = new Klass();
    spyOn(obj, 'method');
    obj.method('foo argument');

    expect(obj.method).toHaveBeenCalledWith('foo argument');

    var obj2 = new Klass();
    spyOn(obj2, 'method');
    expect(obj2.method).not.toHaveBeenCalled();
  });

  it('should spy on Klass#methodWithCallback', function() {
    var callback = jasmine.createSpy();
    new Klass().methodWithCallback(callback);

    expect(callback).toHaveBeenCalledWith('foo');
  });
});

// Spies can be used to test constructor calls
describe('Spy Class Constructor', function () {

  it('should be possible', function () {
    var k;

    spyOn(namespace, 'Klass').andCallThrough();
    k = new namespace.Klass();

    expect(namespace.Klass).toHaveBeenCalled();
    expect(k instanceof namespace.Klass).toBeTruthy();
  });

  it('should spy the constructor argument', function () {
    var k;

    spyOn(namespace, 'Klass').andCallThrough();
    k = new namespace.Klass('some value');

    expect(namespace.Klass).toHaveBeenCalledWith('some value');
    expect(k.something).toBe('some value');
  });
});

// Spies can be very useful for testing AJAX or other asynchronous
 // behaviors that take callbacks by faking the method firing an async call.
describe( "Async Spies", function () {
  it('should test async call', function () {
    spyOn(Klass, 'asyncMethod');
    var callback = jasmine.createSpy();

    Klass.asyncMethod(callback);
    expect(callback).not.toHaveBeenCalled();

    var someResponseData = 'foo';
    Klass.asyncMethod.mostRecentCall.args[0](someResponseData);
    expect(callback).toHaveBeenCalledWith(someResponseData);
  });
});

// spy on console
describe( "Spies on methods and libraries", function () {
  it( "should watch calls to console", function () {
    var mySpy = spyOn(console, 'log');
    console.log("test1");
    console.log("test2");
    console.log("test3");

    expect(mySpy.callCount).toEqual(3);
  });

  it( "should intercept calls to Math.random", function () {
    spyOn(Math, 'random');
    var proxy = Math.random();

    // the spy tells us if the call happened
    expect(Math.random).toHaveBeenCalled();

    //but proxy should still be undefined because the spy intercepted the call
    expect(proxy).toBeUndefined();

  });
  it( "should pass-through calls to Math.random", function () {
    var mySpy = spyOn(Math, 'random');
    // if we redo the spy using andCallThrough()...
    mySpy.andCallThrough();
    proxy = Math.random();
    // we expect the proxy to have received a number
    expect(proxy).toBeDefined();
    expect(proxy).toBeGreaterThan(0);

  });

});

describe( "Stubbing with sinon", function () {
  it( "should set a fake return value for Math.floor(num)", function () {
    // Stub out Math.random so it always returns '4' (chosen by fair dice roll)
    sinon.stub(Math, 'floor').returns(3);
    // Double check that it worked.
    expect(Math.floor(57.9)).toEqual(3);
  });
});

describe( "Mocking with sinon", function () {
  it( "should capture the method call of Math.random()", function () {
    var mock = sinon.mock(Math);
  mock.expects("random").returns(42);

  var proxy = Math.random();

  expect(proxy).toEqual(42);
  mock.verify();
  });

});

