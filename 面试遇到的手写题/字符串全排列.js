/*'abc'

function allSort(str) {

}


['abc', 'acb', 'bca', 'bac', ...]*/

// 要求 1、全排列 2、去重
function quickSort(str){
  let result =[];
  if(!str.length ||str.length===1){
    result = [str];
    return result;
  }
  for(let i=0;i<str.length;i++){
    let left = str[i];
    let strs = str.slice(0,i)+str.slice(i+1,str.length);
    let s = quickSort(strs);
    for(let j =0;j<s.length;j++){
      let allstr = left + s[j] ;
      result.push(allstr);
    }
  }
  return result;
}

console.log(quickSort('abc'));

//思路：  先遍历一遍所有的元素
//   a -> 剩余的元素 bc,递归求bc 的全排列，得到bc、cb  ，然后组合就是abc、acb
//   b -> 剩余的元素 ac，递归求ab的所有的组合，得到ac、ca，然后组合就是bac、bca
//   c -> 剩余的元素 ab，递归求ab的所有的组合，得到ab、ba，然后组合就是cab、cba

//最后输出所有的可能
