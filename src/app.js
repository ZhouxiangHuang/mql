import React from "react";
import ReactDOM from "react-dom";
import UpperDiv from "./home/upperDiv";
import MiddleDiv from "./home/middleDiv";
import LowerDiv from "./home/lowerDiv";
import GuideMainPage from "./articlesList/guidePageMain";
import RestaurantMainPage from "./restaurantList/restaurantList";
import ArticleMain from "./articlePage/articleMain";
const database = require('../database/testData.json');

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: "res"};
    this.changeToRes = this.changeToRes.bind(this);
    this.changeToHome = this.changeToHome.bind(this);
    this.changeToGuide = this.changeToGuide.bind(this);
  }

  changeToRes() {
    this.setState({page: "res"});
  }

  changeToHome() {
    this.setState({page: "home"});
  }

  changeToGuide() {
    this.setState({page: "guide"});
  }

  render() {
    if (this.state.page === "home") {
      return (
        <div id='app'>
          <UpperDiv changeToRes = {this.changeToRes} changeToGuide = {this.changeToGuide}/>
          <MiddleDiv />
          <LowerDiv />
        </div>
      )
    }
    if (this.state.page === "res") {
      return (
        <div id='app'>
          <RestaurantMainPage changeToHome = {this.changeToHome} changeToGuide = {this.changeToGuide} resList = {database}/>
          <LowerDiv />
        </div>
      )
    }
    if (this.state.page === "guide") {
      return (
        <div id='app'>
          <GuideMainPage changeToRes = {this.changeToRes} changeToHome = {this.changeToHome}/>
          <LowerDiv />
        </div>
      )
    }
    if (this.state.page === "article") {
      return (
        <div id='app'>
          <ArticleMain changeToRes = {this.changeToRes} changeToHome = {this.changeToHome} changeToGuide = {this.changeToGuide}/>
          <LowerDiv />
        </div>
      )
    }
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
