import React from 'react'
import ReactDOM from 'react-dom';//index.js 入口文件
import CommentApp from './CommentApp';
// css in js webpack
import './index.css'; //像js引入 跟link 标签say 拜拜


ReactDOM.render(
  <CommentApp />,
  document.getElementById('root')
)