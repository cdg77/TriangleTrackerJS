describe('triangleTest', function() {

  it("is a triangle", function() {
    expect(triangleTest(2, 2, 10)).to.equal(false);
  });

  it("is an equilateral", function() {
    expect(triangleTest(3, 3, 3)).to.equal("equilateral");
  });

  it("is an isosceles", function() {
    expect(triangleTest(8,8,6)).to.equal("isosceles");
  });

  it('is a scalene triangle', function() {
    expect(triangleTest(5, 6, 9)).to.equal('scalene');
  });
});
