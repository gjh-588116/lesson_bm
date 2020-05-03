/**
 * @author gjh
 * @data 2020-4-14
 * @func 爬楼梯算法
 * @param {@type number} n 
 */
// function f(n){
//     const w = new Map(); //  es6 新的数据类型 map
//     // if (n >= 40) throw new Error('内存会溢出哦， 亲!')
//     if(n ==1)return 1;
//     if(n ==2)return 2;
//     const ret = f(n-1) + f(n-2);
//     // 存一下结果
//     w.set(n,ret);
//     return ret;
// }
// console.log(f(10));
// // function f(n){
// //     if(n ==1)return 1;
// //     return f(n-1)+1;
// // }
function f(n){
    if(n ==1)return 1;
    if(n ==2)return 2;
    // 重复计算的 时间和内存就会更好
    //变量可以 
    let ret = 0,
        pre = 2,//前一个是2---重复使用这个空间
        prepre = 1;
    for(let i = 3; i <=n; i++){
        ret = pre +prepre;
        prepre = pre;
        pre = ret; 
    }
    return ret;
}