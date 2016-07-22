import React, {Component} from 'react';

export default class Navbar extends Component {
  render() {
    return (
      <div id="nav">
        <p class='navButton' id="home">首页</p>
        <p class='navButton'>餐厅</p>
        <p class='navButton'>指南</p>
        <p class='navButton'>关于我们</p>
      </div>
    )
  }
}
