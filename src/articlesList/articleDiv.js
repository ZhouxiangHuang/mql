import React, {Component} from 'react';

export default class ArticleDiv extends Component {
  render() {
    var data = this.props.articleData;
    var that = this.props;

    function change() {
      that.changeToArticle(data.art_title);
    }

    return (
      <div id="article">
        <h2 onClick = {change}>{data.art_title}</h2>
        <h5>{data.author}</h5>
        <p>{data.content}</p>
        <div id="articleImg"></div>
      </div>
    )
  }
}
