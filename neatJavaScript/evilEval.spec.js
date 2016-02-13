/**
 * Created by gabrielkunkel on 1/31/16 in JavaScript.
 */

describe("Eval in experimentation", function () {

  it("takes a string of function js and runs it", function() {
    var a = eval("(function() { return 'We just used eval.' })");

    expect(a()).toEqual('We just used eval.');
  }); // end it

  it("takes a small expression and processes with eval", function() {
    var a = eval("4 * 5");

    expect(a).toBe(20);
  }); // end it
  
  it("only evaluates one expression", function() {
    var a = eval("(function(){ return 'We just '})(); (function(){ return 'used eval.' })()");

    expect(function(){ return a()}).toThrow();
  }); // end it


  it("can take an assembled string", function() {
    var a = eval("(" + "function() { return 'string!' }" + ")");

    expect(a()).toEqual('string!');
  }); // end it

  it("can process a number of functions all wrapped in one", function() {
    var completeFunction = "function() {" +
        "var b = function() { return 'Inner Function!' };" +
        "var c = b();" +
        "return c;" +
      "}";
    var a = eval("(" + completeFunction + ")");

    expect(a()).toEqual('Inner Function!');
  }); // end it


  it("can process a boolean expression", function() {
    var giveMeANumber = function() {
      return 2;
    };
    var evaluatedBoolean = eval("giveMeANumber() === 2");

    expect(evaluatedBoolean).toBe(true);
  }); // end it


}); // end describe