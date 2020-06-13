var maxProfit = function(prices) {
    let max = 0
    for(let i =0;i<prices.length-1;i++){
        for (let j = i+1; j < prices.length; j++) {
            let p = prices[j]-prices[i]
            if(p > max) max = p
        }
    } 
    return max
};