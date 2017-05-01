import Kirby from '../src/kirby'

describe("Look for Kirby behavior",function(){
  it("is not devil",function(){
    var isDevil = true;
    expect(function(){new Kirby(isDevil)}).toThrow(new Error("Kirby can't be devil!"));
  });
});
