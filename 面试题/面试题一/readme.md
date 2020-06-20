1. ### CSS选择器有哪些？哪些属性可以继承？CSS优先级算法如何计算？###
2. ### 如何水平并垂直据中如下元素，完善 .container 与 .center ###
```js <div class="container"> <div class="center"></div> </div> .container { with: 400px; height: 800px; }.center { width: 200px; height: 400px; } ```
3. JS如何获取指定元素的宽和高
请写出一个函数，给定任意一个值，判断其属于JavaScript中的哪一种数据类型
/*** @returns {String} */function type(val) { // ... 写出你的实现方法 }// test let a = 3; // type(a) => 'Number' let b = [2, 1]; // type(b) => 'Array' let c = (a, b) => a+b; // type(c) => 'Function' let d = { a, b } // type(d) => 'Object' let e = null // type(d) => 'Null' let f = /\.png$/ // type(f) => 'RegExp' let g = Symbol('fool') // type(g) => 'Symbol'
请使用正则表达式完成如下任务
(1) 提取url中参数名与其对应的值，结果以对象形式保存，若存在多个同名参数，则应以数组记录其所
有的对应值
const url = 'https://www.example.com?key=cb339f0bc8b24&city=%E6%9D%AD%E5%B7%9E&timestamp=159220 // { key: 'cb339f0bc8b24', city: '杭州', timestamp: 1592204275623 } const url = 'https://www.example.com?name=jack&gender=1&name=foo&gender=2&keywords=%5B%E4%B8%8A // { name: ['jack', 'foo'], gender: [1, 2], keywords: '[上海,杭州]' }
(2) 将 驼峰式 命名的属性改为 下划线 式 const camelCase = { searchInfo: 'content of search', district: '杭州', aLongBoringUselessWord: 'jkdojwf' }// => { search_info: 'content of search', district: '杭州', a_long_boring_useless_word: 'jkdojw
4. 将一个嵌套数组扁平化，要求使用 reduce 方法
const nestedArray = [[1, [2, [3, [4]]]], [5], [6], [7, [8]]] // => [1, 2, 3, 4, 5, 6, 7, 8]
写出以下代码运行后，正确的输出顺序？
5. setTimeout(() => { console.log('aaa') }, 0) new Promise((resolve) => { console.log('bbb') }).then(() => { console.log('ccc') })console.log('ddd')
写出 foo 与 bar 执行后控制台中应该显示的信息
6. var name = 'JavaScript' const version = 'es2015' const language = { name: 'Python', version: 'v3.7.1' }function foo() { console.log(`${this.name}----${this.version}`) }const bar = foo.bind(language) foo() bar()
7. 如何提前终止 delay 函数中的promise (可以对 delay 做适当改造)
function delay(time) { return new Promise(resolve => { setTimeout(resolve, time); }) }delay(3000).then(() => { // do somethin here }) Vue如何实现数据与视图的双向绑定，请简单实现一个双向绑定功能
<!-- html --> <div id="app"> {{ data.name }} {{ data.gender }} </div> const data = { name: 'Coder', gender: 'male' } // 要求当data.name或data.gender属性值发生改变时，页面对应的数据显示也将发生改变 在Vue中，说说你知道的组件间通信方式，至少4种
说说你在学习Vue过程中，遇到的最大困难是什么?如何解决的?