//不带flat 层级的
function flat(arr){
  let result =[];
  for(let i=0;i<arr.length;i++){
    result = result.concat(Array.isArray(arr[i]) ? flat(arr[i]) : [arr[i]]);
  }
  return result;
}
// console.log(flat([2,[3,4,[5,6]]]));


// 带flat 层级
function flat(arr,depth){
  let result =[];
  if(depth >0){
    for(let i=0;i<arr.length;i++){
      result = result.concat(Array.isArray(arr[i],depth-1) ? flat(arr[i]) : [arr[i]]);
    }
  }else{
    result = arr.slice();
  }
  return result;
}
// console.log(flat([2,[3,4,[5,6]]],2));

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