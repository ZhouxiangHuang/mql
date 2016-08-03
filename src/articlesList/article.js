import React, {Component} from 'react';

export default class Article extends Component {
  render() {
    var data = this.props.articleData;
    return (
      <div id="article">
        <h2>{data.art_title}</h2>
        <h5>{data.author}</h5>
        <p>{data.content}</p>
        <div id="articleImg"></div>
      </div>
    )
  }
}
