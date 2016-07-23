import React, {Component} from 'react';
import ArticleImage from './articleImage';

export default class MiddleDiv extends Component {
  render() {
    return (
      <div id="middleDiv">
        <h1 id="middleHeading">美食推荐</h1>
        <ArticleImage />
      </div>
    )
  }
}
