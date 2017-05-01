describe("Look for Kurby behavior",function(){
  it("is not devil",function(){
    var isDevil = true;
    expect(function(){new Kirby(isDevil)}).toThrow(new Error("Kirby can't be devil!"));
  });
});
