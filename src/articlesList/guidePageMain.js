import React, {Component} from 'react';
import GuideNavBar from "./guideNavBar";
import GuideArticles from "./guideArticles";
import GuideSearchBar from "./guideSearchBar";
import ArticleMain from "../articlePage/articleMain";

var content;

export default class GuigeMainPage extends Component {
  constructor(props) {
    super(props);
    this.state = {page: "main"};
    this.changeToArticle = this.changeToArticle.bind(this);
  }

  changeToArticle(title) {
    this.props.artData.forEach(function(obj) {
      if (obj.art_title === title) content = obj;
    });
    this.setState({page: "article"});
  }

  render() {
    if (this.state.page === "article") {
        return (
          <div>
            <ArticleMain artData = {content} />
          </div>
        )
    }

    return (
      <div>
        <GuideSearchBar />
        <GuideNavBar changeToHome = {this.props.changeToHome} changeToRes = {this.props.changeToRes} />
        <GuideArticles artData = {this.props.artData} changeToArticle = {this.changeToArticle} />
      </div>
    )
  }
}
