// This is a test suite for learning new things about javascript
var Fn = Function, global = Fn('return this')();

describe( "Arrays", function () {
  it( "- splice should return removed items", function () {
    var arr = [1, 2, 3, 4, 5];
    var result = arr.splice(2, 3);

    expect([1, 2]).toEqual(arr);
    expect([3, 4, 5]).toEqual(result);
  });
});

describe( "Global Object", function () {
  it( "should be synonymous with window", function () {
    expect(global).toBe(window);
    expect(global.window).toBe(window);
    expect(window.window).toBe(window);
  });
});