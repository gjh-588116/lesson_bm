var searchInsert = function(nums, target) {
    let a = nums[0];
    if(target > a){
        for(let i = nums.length ; i >= 0 ;i--){
            if(nums[i] < target) return i+1;
        }
    }else return 0;
};