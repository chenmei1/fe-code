/*
验证回文串
给定一个字符串，验证它是否是回文串，只考虑字母和数字字符，可以忽略字母的大小写。

说明：本题中，我们将空字符串定义为有效的回文串。

示例 1:

输入: "A man, a plan, a canal: Panama"
输出: true
示例 2:

输入: "race a car"
输出: false
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.replace(/[^0-9a-zA-Z]/g,'').toUpperCase();
    let i=0;
    let j=str.length-1;
    let flag = true;
    while(i<str.length && j>=0){
        if(str[i] === str[j]){
            i++;
            j--;
        }else{
            flag =  false;
            break;
        }
    }
    return flag;
};

//思路1：通过正则匹配出数字和字符，然后改写成大写或者小写,首尾指针，需要注意的时候正则 [^0-9a-zA-Z]  中的^  
//思路2：把过滤的数组，反转如果等于本身证明是回文字符串

var isPalindrome = function(s) {
    let str = s.replace(/[^0-9a-zA-Z]/g,'').toUpperCase();
    let reverStr = str.split('').reverse().join('');
    return str === reverStr;
}

