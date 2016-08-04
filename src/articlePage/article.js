import React, {Component} from 'react';

export default class Article extends Component {
  render() {
    var art = this.props.content;

    return (
      <div class="article">
        <article>
          <header>
            <h2>{art.art_title}</h2>
            <h5>{art.author}</h5>
            <h5>Tags:</h5>
          </header>
            <p>{art.content}</p>
            <img src="https://chihuowus.blob.core.windows.net/media/Default/Posts/vancouver/Pekingduck-02.jpg"></img>
        </article>
      </div>
    )
  }
}
