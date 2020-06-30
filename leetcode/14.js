var longestCommonPrefix = function (strs) {
    if (strs.length === 0) return '';
    let ans = strs[0];
    for (let j = 0; j < ans.length; j++) {
      for (let i = 1; i < strs.length ; i++) {
        if (ans[j] !== strs[i][j]) return ans.slice(0, j);
      }
    }
    return ans;
};