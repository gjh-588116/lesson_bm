import React from 'react';
import { fromJS } from 'immutable';
import ImmutableComponent from './componets/common';
import logo from './logo.svg';
import Header from './componets/Header'
import './App.css';

class App extends ImmutableComponent {
  // 最外层数据 依然是个原生js 对象 ？？
  // redux  
  state = {
    title: fromJS([1,2,3,[]])   // '123'  本身就是不可变的
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        title: fromJS([1,2,3,[]])
      })
    }, 3000)
  }
  render() {
    console.log('app render');
    return (
      <div>
        123456
        <Header title={this.state.title}/>
      </div>
    )
  }
}

export default App;
