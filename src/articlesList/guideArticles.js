import React, {Component} from 'react';
import ArticleDiv from './articleDiv';

export default class GuideArticles extends Component {

  render() {
    var articleArray = [];
    for (var i = 0; i < this.props.artData.length; i++) {
      articleArray.push(
        <ArticleDiv articleData = {this.props.artData[i]} changeToArticle = {this.props.changeToArticle} />
      )
    }
    return (
      <div id="guideArticles">
        {articleArray}
      </div>
    )
  }
}
