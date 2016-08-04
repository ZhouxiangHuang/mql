import React, {Component} from 'react';
import GuideNavBar from "../articlesList/guideNavBar";
import Article from "./article";


export default class ArticleMain extends Component {
  render() {
    return (
      <div>
        <GuideNavBar changeToRes = {this.props.changeToRes} changeToHome = {this.props.changeToHome} changeToGuide = {this.props.changeToGuide}/>
        <Article content = {this.props.artData} />
      </div>
    )
  }
}
