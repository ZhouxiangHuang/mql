import React, {Component} from 'react';
import Article from './article';

export default class GuideArticles extends Component {

  render() {
    var articleArray = [];
    for (var i = 0; i < this.props.artData.length; i++) {
      articleArray.push(
        <div id="article">
        <Article articleData = {this.props.artData[i]}/>
        </div>
      )
    }
    console.log("received by chiild", this.props.artData);
    return (
      <div id="guideArticles">
        {articleArray}
        <div id="articleImg"></div>
      </div>
    )
  }
}
