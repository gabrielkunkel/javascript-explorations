/**
 * Created by gabrielkunkel on 7/30/15.
 */

function pair(str) {
    var firstElements = str.split(''); //array of first elements
    var i = 0, firstElementsLength = firstElements.length, workingElementHolder;
    var finalArray = [], workingArrayHolder = [];

    for (i; i < firstElementsLength; i += 1) {
        workingElementHolder = firstElements[i];
        workingArrayHolder = [];

        if(workingElementHolder === 'A') {
            workingArrayHolder.push(workingElementHolder);
            workingArrayHolder.push('T');
        }
        else if (workingElementHolder === 'T') {
            workingArrayHolder.push(workingElementHolder);
            workingArrayHolder.push('A');
        }
        else if (workingElementHolder === 'G') {
            workingArrayHolder.push(workingElementHolder);
            workingArrayHolder.push('C');
        }
        else if (workingElementHolder === 'C') {
            workingArrayHolder.push(workingElementHolder);
            workingArrayHolder.push('G');
        }

        finalArray.push(workingArrayHolder);
    }

    return finalArray;
}

var paired = pair("ATCGA");
// should return [['A','T'],['T','A'],['C','G'],['G','C'],['A','T']]

console.log(paired);

phantom.exit();