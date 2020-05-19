// call,apply  (一类)修改this的指向
// bind： 调用函数除了bind this之外 ,可以让我们传递参数
function sum(a,b,c){
    return a + b + c;
}
sum.call(null,1,10,20) //参数必须传递完整
 //bind 可以不完整，会返回一个函数，认我们传递剩下的参数
// sum abc
// ab
let add11 = sum.bind(null , 1 , 10); 
console.log(add11);
let res = add11(20);
console.log(res);

function test(reg,str){
    return reg.test(str);
}
let str = `
`
let str1 = `123`,str2 =`
456`,str3 = `789`;
let whiteSpace = /\n/g
// ``输入过的 都能帮你保留下来
// \n n:new line(换行)
// \t t:tab
// glob:全局
console.log(test(whiteSpace,str));
console.log(test(whiteSpace,str1));
console.log(test(whiteSpace,str2));
console.log(test(whiteSpace,str3));

let hasWhiteSpace = test.bind(null ,whiteSpace);
console.log(hasWhiteSpace(str));
console.log(hasWhiteSpace(str3));
console.log(hasWhiteSpace(str1));

let hasTabSpace = test.bind(null,/\t/g);
console.log(hasTabSpace('\t123'));
let hasNumber = test.bind(null,/[0-9]/g);
console.log(hasNumber('abc123'));