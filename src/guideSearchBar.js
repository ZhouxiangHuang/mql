import React, {Component} from 'react';

export default class GuideSearchBar extends Component {
  render() {
    return (
      <div id="guideSearch">
        <input type="text" placeholder="  美食/餐厅/地点"></input>
        <button>搜索</button>
      </div>
    )
  }
}
