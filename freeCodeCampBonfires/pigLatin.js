/**
 * Created by gabrielkunkel on 7/29/15.
 */


    function translate(str) {
        var element, first3 = str.slice(0, 3), first2 = str.slice(0, 2);
        var consonants = 'bcdfghjklmnpqrstvwxyz'.split('');
        var blends2 = ['bl', 'br', 'ch', 'cl', 'cr', 'dr', 'fl', 'fr', 'gl', 'gr', 'pl', 'pr', 'sc', 'sh', 'sk', 'sl', 'sm', 'sn', 'sp', 'st', 'sw', 'th', 'tr', 'tw', 'wh', 'wr'];
        var blends3 = ['sch', 'scr', 'shr', 'sph', 'spl', 'spr', 'squ', 'str', 'thr'];


        //var vowels = 'aeiou'.split('');
        var text = str.split('');

        // IF it is in the consanant array

        if (blends3.indexOf(first3) !== -1) {
            text.shift();
            text.shift();
            text.shift();
            text.push(first3);
            text.push('ay');

        } // blends 3 check using substr(0, 3)

        else if (blends2.indexOf(first2) !== -1) {
            text.shift();
            text.shift();
            text.push(first2);
            text.push('ay');
        } // blends 2 check using substr(0, 2)

        else if (consonants.indexOf(text[0]) === -1) {
            text.push('way');
        }
        else {
            element = text.shift();
            text.push(element);
            text.push('ay');
        }

        str = text.join('');



        return str;
    }

var thump = translate("glove");

console.log(thump);

