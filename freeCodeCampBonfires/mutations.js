/**
 * Created by gabrielkunkel on 7/21/15.
 */

function mutation(arr) {
    var i;
    arr[1] = arr[1].toLowerCase();
    arr[0] = arr[0].toLowerCase();
    var dumbCockArray = arr[1].split('');
    var fuckShitArray = arr[0].split('');

    for(i = 0; i < dumbCockArray.length; i += 1) {
        var shakedown = fuckShitArray.indexOf(dumbCockArray[i]);
        if(shakedown === -1) { return false;}
    }
    return true;
}

var mute = mutation(['zyxwvutsrqponmlkjihgfedcba', 'qrstu']);

console.log(mute);

