describe('triangleTest', function() {

  it("true for a shape that has three sides", function() {
    expect(triangleTest(1, 2, 3)).to.equal(true);
  });

  it("is a triangle", function() {
    expect(triangleTest(2, 2, 10)).to.equal(false);
  });

  it("is an equilateral", function() {
    expect(triangleTest(3, 3, 3)).to.equal("equilateral");
  });

  it("is an isosceles", function() {
    expect(triangleTest(8,8,6)).to.equal("isosceles");
  });
  
});
