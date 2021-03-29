/*
给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 

示例 1：

输入：[3,2,3]
输出：3
示例 2：

输入：[2,2,1,1,1,2,2]
输出：2
 
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = new Map();
    for(let i =0;i<nums.length;i++){
       const count =  map.get(nums[i]);
       let counts = count ? count+1  : 1;
       map.set(nums[i],counts)
    }
    for (var [key, value] of map) {
        if(value >= Math.ceil(nums.length/2)){
            return key;
        }
    }
};

// 思路：同出现一次数字的一样，但是需要取 Math.ceil 向上取整。