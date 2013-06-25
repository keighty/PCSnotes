// This is a test suite for learning new things about javascript

describe( "Arrays", function () {
  it( "- splice should return removed items", function () {
    var arr = [1, 2, 3, 4, 5];
    var result = arr.splice(2, 3);

    expect([1, 2]).toEqual(arr);
    expect([3, 4, 5]).toEqual(result);
  });
});