import React, {Component} from 'react';
import GuideNavBar from "../articlesList/guideNavBar";
import GuideSearchBar from "../articlesList/guideSearchBar";
import ResInfo from "./restaurantInfo";
var resData;

var $ = require('jQuery');


export default class RestaurantMainPage extends Component {
  componentDidMount() {
    console.log("componentdidmount called");
    $.get("http://localhost:3000/restaurant", function(result) {
      resData = result;
    });
  }


  render() {
    return (
      <div>
        <GuideNavBar changeToHome = {this.props.changeToHome} changeToGuide = {this.props.changeToGuide}/>
        <GuideSearchBar />
        <ResInfo resList = {this.props.resList}/>
      </div>
    )
  }
}
