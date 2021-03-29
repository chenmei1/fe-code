//计算数组的层级
let num = 1;
function computedDepth(arr){
  let flag = false;
  for(let i =0; i<arr.length;i++){
    if(Array.isArray(arr[i])){
      flag = true;
      computedDepth(arr[i])
    }
    if(i ===arr.length-1){
      if(flag) num++;
    }
  }
  return num;
}
console.log(computedDepth([2,[3,4,[5,6,[7,8]]]]));