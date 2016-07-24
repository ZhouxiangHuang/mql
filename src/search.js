import React, {Component} from 'react';

export default class Search extends Component {
  render() {
    return (
      <div id="search">
          <input placeholder="浪漫餐厅" id="searchBox"></input>
          <button class="btn">搜索</button>
      </div>
    )
  }
}
