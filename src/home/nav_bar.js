import React, {Component} from 'react';

export default class Navbar extends Component {

  render() {
    return (
      <div id="nav">
        <img id="logo"></img>
        <button class='navButton homeNav' id="home">首页</button>
        <button class='navButton homeNav' onClick = {this.props.changeToRes}>餐厅</button>
        <button class='navButton homeNav' onClick = {this.props.changeToGuide}>指南</button>
        <button class='navButton homeNav id="aboutUs"'>关于我们</button>
      </div>
    )
  }
}
