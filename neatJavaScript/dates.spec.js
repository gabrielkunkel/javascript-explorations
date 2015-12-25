describe("Date objects", function () {

  it("can be compared", function() {
    var now = new Date();
    var earlier = new Date(1984, 1, 1);

    expect(now > earlier).toBe(true);
  }); // end it

}); // end describe