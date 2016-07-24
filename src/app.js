import React from "react";
import ReactDOM from "react-dom";
import UpperDiv from "./upperDiv";
import MiddleDiv from "./middleDiv";
import LowerDiv from "./lowerDiv";
import GuideNavBar from "./guideNavBar";
import GuideArticles from "./guideArticles";

class Layout extends React.Component {
  render() {
    return (
      <div id='app'>
        <GuideNavBar />
        <GuideArticles />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
