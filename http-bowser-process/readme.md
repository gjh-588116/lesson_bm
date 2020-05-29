## req 
浏览器上有 xhr fetch
node : http.get()

xxx方法 -> http 请求 ->  一样的

http: 超文本传输协议
- 调用xhr
```js
const xhr = new Xhlhttprequest();
xhr.setheader('Content-Type';'application/json')
xhr.open('POST','api.com',true);
xhr.send({a:1,b:2})
```
报文:
- 首行
- 首部
- \r\n
- 实体
## 解析 
FSN(finate state ,machine)
Infinity: 正无穷 负无穷 


浏览器解析报文:body(html),header,响应头
html怎么渲染出来了？ 浏览器也要解析html
js怎么被执行？浏览器也要解析js
解析成什么？

## 编译原理
代码都是字符串
- 词法分析(分词)
- 语法分析
- 生成中间代码
- 生成目标代码