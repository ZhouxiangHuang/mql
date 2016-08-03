import React from "react";
import ReactDOM from "react-dom";
import UpperDiv from "./home/upperDiv";
import MiddleDiv from "./home/middleDiv";
import LowerDiv from "./home/lowerDiv";
import GuideMainPage from "./articlesList/guidePageMain";
import RestaurantMainPage from "./restaurantList/restaurantList";
import ArticleMain from "./articlePage/articleMain";
const restaurantData = require('../database/testData.json');
var resData;
var artData;

var $ = require('jQuery');


class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {page: "home"};
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

  componentDidMount() {
    $.get("http://localhost:3000/restaurant", function(result) {
      resData = result;
    });

    $.get("http://localhost:3000/articles", function(result) {
      artData = result;
      console.log("respond with articles", result);
    });
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
          <RestaurantMainPage changeToHome = {this.changeToHome} changeToGuide = {this.changeToGuide} resList = {restaurantData} resData = {resData}/>
          <LowerDiv />
        </div>
      )
    }
    if (this.state.page === "guide") {
      return (
        <div id='app'>
          <GuideMainPage changeToRes = {this.changeToRes} changeToHome = {this.changeToHome} artData = {artData}/>
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
