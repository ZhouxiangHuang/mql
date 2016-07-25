import React, {Component} from 'react';
import GuideNavBar from "../articlesList/guideNavBar";
import GuideSearchBar from "../articlesList/guideSearchBar";
import ResInfo from "./restaurantInfo";


export default class RestaurantMainPage extends Component {
  render() {
    return (
      <div>
        <GuideNavBar />
        <GuideSearchBar />
        <ResInfo />
      </div>
    )
  }
}
