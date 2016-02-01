/**
 * Created by gabrielkunkel on 1/29/16 in JavaScript.
 */

xdescribe("symmetric difference algorithm", function () {

  it("takes two equal single element arrays and returns an empty array", function() {
    expect(symDiff([3], [3])).toEqual([]);

  }); // end it

  xit("takes two arrays and returns the elements that are unique to each", function() {
    expect(symDiff([1,2,3], [5,2,1,4])).toEqual([3,5,4]);
  }); // end it


}); // end describe