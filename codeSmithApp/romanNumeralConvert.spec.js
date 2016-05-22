/**
 * Created by gabrielkunkel on 5/21/16 in JavaScript.
 */

/*
 x1     ->    I
 x4     ->    IV
 x5     ->    V
 x9     ->    IX
 x10    ->    X
 x40    ->    XL
 x50    ->    L
 x90    ->    XC
 x100   ->    C
 x400   ->    CD
 x500   ->    D
 x900   ->    CM
 x1000  ->    M




 {
  1: 'I'
  5: 'V'
  10: 'X'
  50: 'L'
  100: 'C'
  500: 'D'
  1000: 'M'
 }


 */


describe("Roman Numeral Function", function () {

  it("should be defined, 'romanNumeral' ", function() {
    expect(romanNumeral).toBeDefined();
  }); // end it

  it("should return 'I' for 1", function() {
    expect(romanNumeral(1)).toEqual("I");
  }); // end it

  it("should return 'II' for 2", function() {
    expect(romanNumeral(2)).toEqual("II");
  }); // end it

  it("should return 'IV' for 4", function() {
    expect(romanNumeral(4)).toEqual("IV");
  }); // end it

  it("should return 'V' for 5", function() {
    expect(romanNumeral(5)).toEqual("V");
  }); // end it
  
  it("should return 'IX' for 9", function() {
    expect(romanNumeral(9)).toEqual("IX");
  }); // end it

  it("should return 'X' for 10", function() {
    expect(romanNumeral(10)).toEqual("X");
  }); // end it
  
  it("should return 'XIV' for 14", function() {
    expect(romanNumeral(14)).toEqual("XIV");
  }); // end it
  
  it("should return 'XXVIII' for 28", function() {
    expect(romanNumeral(28)).toEqual("XXVIII");
  }); // end it

  it("should return 'XL' for 40", function() {
    expect(romanNumeral(40)).toEqual("XL");
  }); // end it
  
  it("should return 'XLII' for 42", function() {
    expect(romanNumeral(42)).toEqual("XLII");
  }); // end it

  it("should return 'L' for 50", function() {
    expect(romanNumeral(50)).toEqual("L");
  }); // end it

  it("should return 'LII' for 52", function() {
    expect(romanNumeral(52)).toEqual("LII");
  }); // end it
  
  it("should return 'XC' for 90", function() {
    expect(romanNumeral(90)).toEqual("XC");
  }); // end it

  it("should return 'XCVI' for 96", function() {
    expect(romanNumeral(96)).toEqual('XCVI');
  }); // end it

  it("should return 'C' for 100", function() {
    expect(romanNumeral(100)).toEqual('C');
  }); // end it

  it("should return 'CLXVIII' for 168", function() {
    expect(romanNumeral(168)).toEqual('CLXVIII');
  }); // end it

  it("should return 'CD' for 400", function() {
    expect(romanNumeral(400)).toEqual('CD');
  }); // end it

  it("should return 'D' for 500", function() {
    expect(romanNumeral(500)).toEqual('D');
  }); // end it
  
  it("should return 'CM' for 900", function() {
    expect(romanNumeral(900)).toEqual('CM');
  }); // end it

  it("should return 'M' for 1000", function() {
    expect(romanNumeral(1000)).toEqual('M');
  }); // end it
  
}); // end describe