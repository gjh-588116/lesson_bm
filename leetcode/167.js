var twoSum = function(numbers, target) {
    let a = 0;
    let b = numbers.length-1;
    while(a < b){
        const aNums = numbers[a];
        const bNums = numbers[b];
        if(aNums+bNums>target){
           b--; 
        }
        if(aNums+bNums<target){
            a++;
        }
        if(aNums+bNums===target){

            return [a+1,b+1]
        }
      
    }
};