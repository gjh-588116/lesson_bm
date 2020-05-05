var twoSum = function(nums, target) {
    let arr = []; //坐标放进去
    for (let i = 0;  i < nums.length; i++) {  //暴力解法
      // 循环一遍
      for (let j = i + 1;  j < nums.length; j++) { //内层循环
        // 不能自恋
        if (nums[i] + nums[j] === target) {
          arr = [i, j];
          return arr;
        }
      }
    }
  }
  const twoSum = function(nums,target){

  };