var findKthLargest = function (nums, k) {
    let len = nums.length;
    for (let i = 0; i < len - 1; i++) {
        for (let j = 0; j < len - 1 - i; j++) {
            let a = j + 1
            if (nums[j] < nums[a]) {
                [nums[j], nums[a]] = [nums[a], nums[j]];
            }
        }
    }
    return nums[k - 1];
};
let arr = [3,2,1,5,6,4]
let a =2 ;
console.log(findKthLargest(arr,a));