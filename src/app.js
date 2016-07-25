import React from "react";
import ReactDOM from "react-dom";
import UpperDiv from "./home/upperDiv";
import MiddleDiv from "./home/middleDiv";
import LowerDiv from "./home/lowerDiv";
import GuideMainPage from "./articlesList/guidePageMain";
import RestaurantMainPage from "./restaurantList/restaurantList";

class Layout extends React.Component {
  render() {
      return (
        <div id='app'>
          <RestaurantMainPage />
        </div>
      )
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
