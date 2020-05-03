var isPalindrome = function(x) {
    if(x < 0) return false;
    const str = x.toString(); //toString可以把number对象转换成字符串
    let i = 0 ;
    let j = str.length - 1 ;
    let flag = true ;
    while (i < j) {
        if (str[i] !== str[j]) {
            flag = false;
            break;
        }
        i++
        j--
    }
    return flag
};