/*
给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

说明：

你的算法应该具有线性时间复杂度。 你可以不使用额外空间来实现吗？

示例 1:

输入: [2,2,1]
输出: 1
示例 2:

输入: [4,1,2,1,2]
输出: 4
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = new Map();
    for(let i =0;i<nums.length;i++){
       const count =  map.get(nums[i]);
       let counts = count ? count+1  : 1;
       map.set(nums[i],counts)
    }
    for (var [key, value] of map) {
        if(value === 1){
            return key;
        }
    }
};
console.log(singleNumber([4,1,2,1,2]));
//思路做hash 表，先把所有的数字出现的次数做统计，然后判断次数为1的返回对应的key

