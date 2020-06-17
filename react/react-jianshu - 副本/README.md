## 组件 重新渲染
有哪几种情况引起？
- state：  state 变了
- 地址 -》 react-router  -》 ？
- props 变了
- context 变了，react.createContext()


## 减少重新渲染
state props 对比过后没有任何变化 =》没有必要渲染

