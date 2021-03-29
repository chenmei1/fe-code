/* 编程题：判断一个字符串是否完全由某个子串重复组成
举例如下：
abcabcabc     true
abababcd       false
abc                 false
aaaaaaaa      true */

function repeatStr(str){
  for(let i =0;i<str.length/2;i++){
    let strs = str.slice(0,i);
    let strArr = str.split(strs);
    let flag = strArr.every(item => item === '');
    if(flag) return true;
  }
  return false;
}


function newReatStr(str){
  return (str+str).indexOf(str,1) !== str.length;
}

console.log(newReatStr('abad'));
