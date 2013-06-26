describe( "Functions", function () {
  it( "should have a length property", function () {
    function sample(message, expr){
      return true;
    }

    expect(sample.length).toEqual(2);
  });
});