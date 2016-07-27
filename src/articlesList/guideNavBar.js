import React, {Component} from 'react';

export default class GuideNavBar extends Component {
  render() {
    return (
      <div id="guideNavBar">
        <p class='navButton' id="home" onClick = {this.props.changeToHome}>首页</p>
        <p class='navButton' onClick = {this.props.changeToRes}>餐厅</p>
        <p class='navButton' onClick = {this.props.changeToGuide}>指南</p>
        <p class='navButton'>关于我们</p>
      </div>
    )
  }
}
