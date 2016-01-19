/**
 * Created by gabrielkunkel on 1/18/16.
 */

"use strict";

var alphabet: string[] = "abcdefghijklmnopqrstuvwxyz".toUpperCase().split("");

function decipher(stringToProcess: string, codeArray: string[], counterSet: number): string {
    var convertedArray: string[] = [];
    var arrayToProcess: string[] = stringToProcess.split("");


    arrayToProcess.forEach(function (letter: string): void {
        // find starting position on codeArray
        let pos: number = codeArray.indexOf(letter);
        var counter: number = counterSet;
        let symbolCheck: any = /\W/;

        if (symbolCheck.test(letter)) {
            convertedArray.push(letter);
        }
        else {
            while (counter > 0) {
                if (codeArray.length - pos <= counter) {
                    // change counter by math
                    counter = counter - (codeArray.length - pos);

                    // create new position at beginning (allowing for repeat)
                    pos = 0;
                }
                else {
                    // use math to find final position and add to array
                    pos = pos + counter;
                    counter = 0;
                }
            }
            convertedArray.push(codeArray[pos]);
        }
    }); // end of forEach

    return convertedArray.join("");
}
