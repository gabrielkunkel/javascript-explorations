/**
 * Created by gabrielkunkel on 1/18/16.
 */

declare var describe: any;
declare var it: any;
declare var expect: any;
declare var decipher: any;
declare var alphabet: string[];
declare var jasmine: any;


describe("Caesar's Cipher", () => {
    
    it("should have an alphabet that's an array type", () => {
      expect(alphabet).toEqual(jasmine.any(Array));
    }); // end it

    it("should return a character 13 alphabet steps", () => {
      expect(decipher("A", alphabet, 13)).toEqual("N");
    }); // end it

    it("should return a character 13 alphabet steps round to the beginning", () => {
      expect(decipher("S", alphabet, 13)).toEqual("F");
    }); // end it

    it("should give us 'A' for 'N'", () => {
        expect(decipher("N", alphabet, 13)).toEqual("A");
    }); // end it

    it("should return translated code", () => {
        expect(decipher("SERR PBQR PNZC", alphabet, 13)).toEqual("FREE CODE CAMP");
    }); // end it

    it("should return translated code with exclamation point", () => {
        expect(decipher("SERR CVMMN!", alphabet, 13)).toEqual("FREE PIZZA!");
    }); // end it

    it("should return translated code with question mark", () => {
        expect(decipher("SERR YBIR?", alphabet, 13)).toEqual("FREE LOVE?");
    }); // end it

    it("should return translated code with period", () => {
        expect(decipher(
            "GUR DHVPX OEBJA QBT WHZCRQ BIRE GUR YNML SBK.",
            alphabet,
            13)).toEqual("THE QUICK BROWN DOG JUMPED OVER THE LAZY FOX.");
    }); // end it

    it("should return translated code with a small code array", () => {
      expect(decipher(
          "ABB. B!CCAAB",
          ["A", "B", "C"],
          10)).toEqual("BCC. C!AABBC");
    }); // end it

    // todo: potential optimization... with a code array that is smaller cut down setCounter

}); // end describe
