// var removeDuplicates = function(nums) {
//     var i =0;
//     let j =0;
//     let temp=nums[j+1];
//     while(j < nums.length-1){
//         if(temp==nums[j+1]){
//             j++;
//         }else{
//             nums[i+1]=nums[j+1];
//             temp = nums[j+1];
//             i++;
//         }
//     }
//     return i;
// };
// var removeDuplicates = function(nums) {
//     var i =0;
//     let j =0;
//     let temp=nums[i]

// //     while(j<=nums.length-1){
// //         if(temp==nums[j+1]){
// //             j++;
// // }else{
// //         nums[i+1]=nums[j+1];
// //         temp=nums[j+1]
// //         i++;
// // }
    
// //     }
// //     return i;
//     };
var removeDuplicates = function(nums) {
    var i =0;
    let j =0;
    let temp=nums[i]
    while (j <= nums.length - 1) {
        if (temp == nums[j + 1]) {
            j++;
        } else {
            nums[i + 1] = nums[j + 1];
            temp = nums[j + 1]
            i++;
        }

    }
    return i;
};