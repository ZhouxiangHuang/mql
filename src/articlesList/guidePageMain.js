import React, {Component} from 'react';
import GuideNavBar from "./guideNavBar";
import GuideArticles from "./guideArticles";
import GuideSearchBar from "./guideSearchBar";

export default class GuigeMainPage extends Component {
  render() {
    return (
      <div>
        <GuideSearchBar />
        <GuideNavBar changeToHome = {this.props.changeToHome} changeToRes = {this.props.changeToRes}/>
        <GuideArticles artData = {this.props.artData}/>
      </div>
    )
  }
}
