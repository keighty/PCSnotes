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
describe( "Spy on console", function () {
  it( "should watch calls to console", function () {
    var mySpy = spyOn(console, 'log');
    console.log("test1");
    console.log("test2");
    console.log("test3");

    expect(mySpy.callCount).toEqual(3);
  });
});


