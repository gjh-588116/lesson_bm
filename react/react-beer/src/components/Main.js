import React from 'react';
import Header from './Header';
import Search from './Search';
import { Link } from 'react-router-dom';
class Main extends React.Component {
  constructor() {
    super();
  }
  componentDidMount(){
    const params = this.props.params;
    const searchTerm = params.searchTerm || undefined;
    console.log(searchTerm);
    this.loadBeeers(searchTerm);
  }
  loadBeeers(){
    
  }
  render() {
    return (
      // 每个页面， 由组件构成
      <div className="wrapper">
        <Header siteName="Beer me!" />
        <Search/>
        {/* <Link to="/about">About</Link> */}
      </div>
    )
  } 
}


export default Main;