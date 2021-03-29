let nums = [];
let a=0;
function resolve(num) {
  if(num ===1 || num === 2 || num ===3){
    nums[a++] = num;
    return nums;
  }
  for(let i =2;i<=num;i++){
    if(num % i === 0){
      nums[a++] = i;
      if((num/i) !== 1 ){
        resolve(num / i);
      }
      break;
    }
  }
  return nums;
}
console.log(resolve(30))

//先找出最小能整除的，再把整除的数递归
