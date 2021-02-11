/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let possibleDuplicate = 0;
    let length = arr.length - 1;
    for(let element = 0; element <= length - possibleDuplicate ; element ++ ) {
        if (arr[element] == 0){
            if(element == length - possibleDuplicate){
               arr[length] = 0;
                length--;
                break;
            }
            possibleDuplicate++;
        }
    }
    
    let last = length - possibleDuplicate;
    for(let i = last; i >= 0 ; i--){
        if(arr[i] == 0){
            arr[i + possibleDuplicate] = 0;
            possibleDuplicate--;
            arr[i + possibleDuplicate] = 0;
        } else {
            arr[i + possibleDuplicate] = arr[i];
        }
    }
};