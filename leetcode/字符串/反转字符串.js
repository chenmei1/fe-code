/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let i =0;
    let j = s.length-1;
    while(j>=i){
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
    }
    return s; 
};

//思路： 通过双指针，注意循环结束的条件；