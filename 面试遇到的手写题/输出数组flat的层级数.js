// 找出数组的长度
function flatArr(arr){
  let num = 1;
  let fn = function(arr){
    let flag= 0;
    for(let i=0;i<arr.length;i++){
      if(Array.isArray(arr[i])){
        flag++;
        fn(arr[i]);
      }
    }
    if(flag){
      num++;
    }
  }
  fn(arr);
  return num;
}
console.log(flatArr([1,2,[3,4,[5,6],[9,11]],[7,8]]));

// 判断每层是不是数组，进行往下递归，但是每一层遍历的时候，只要有一项是数组的时候，进行标识，层级才可以+1
