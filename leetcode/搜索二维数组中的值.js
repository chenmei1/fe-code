/*
编写一个高效的算法来搜索 m x n 矩阵 matrix 中的一个目标值 target 。该矩阵具有以下特性：

每行的元素从左到右升序排列。
每列的元素从上到下升序排列。
 

示例 1：


输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 5
输出：true
示例 2：


输入：matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], target = 20
输出：false

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let col = matrix[0].length-1;
    let raw = matrix.length;
    let i= 0;
    let j = col;
    let flag = false;
    while(i<raw && j>=0){
        let num= matrix[i][j];
        if(num === target){
            flag = true;
            break;
        }else if(target > num){
            i++;
        }else if(target < num){
            j--;
        }
    }
    return flag;
};

//思路：从左上角开始，i，j 两个指针，分别表示一维和二维的数组，一次去增加和减少

