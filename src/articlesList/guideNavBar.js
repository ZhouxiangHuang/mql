import React, {Component} from 'react';

export default class GuideNavBar extends Component {
  render() {
    return (
      <div id="guideNavBar">
        <img id="logo" src="./icons/wangao.png"></img>
        <button class='navButton' id="home" onClick = {this.props.changeToHome}>首页</button>
        <button class='navButton' onClick = {this.props.changeToRes}>餐厅</button>
        <button class='navButton' onClick = {this.props.changeToGuide}>指南</button>
        <button class='navButton'>关于我们</button>
      </div>
    )
  }
}
