import React from "react";
import ReactDOM from "react-dom";
import UpperDiv from "./upperDiv";
import MiddleDiv from "./middleDiv";

class Layout extends React.Component {
  render() {
    return (
      <div id='app'>
        <UpperDiv />
        <MiddleDiv />
      </div>
    );
  }
}

const app = document.getElementById('app');

ReactDOM.render(<Layout/>, app);
