//暴力方法
// var searchRange = function(nums, target) {
//     let res = [-1,-1];
//     for(let i=0;i<nums.length;i++){
//       if(nums[i] === target){
//         res[0] = i;
//         break;
//       }
//     }
//     for(let i = nums.length-1;i>=0;i--){
//       if(nums[i] === target){
//         res[1] = i;
//         break;
//       }
//     }
//     return res;
//   };
//二分查找
var searchRange = function(nums, target) {
  let start = 0;
  let end = nums.length -1;
  let middle = -1;
  let flag = false;
  while(start<=end){
    middle = nums[Math.floor((start+ end)/2)];
    if(nums[middle]> target){
      end = middle -1;
    }else if(nums[middle] < target){
      start = middle +1;
    }else{
      flag = true;
      break;
    }
  }

  start = middle;
  end = middle;
  while(start-1>=0 && nums[start-1]=== target){
    start--;
  }
  while(end+1 <nums.length-1 && nums[end-1]=== target){
    end++;
  }
  return [start,end];
}

  console.log(searchRange([1,3,4,5,5,9],5));